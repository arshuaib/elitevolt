import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://elitevoltsystems.com/';
const sourcePath = resolve(root, 'js/shop.js');
const source = await readFile(sourcePath, 'utf8');
const match = source.match(/const\s+productsData\s*=\s*(\[[\s\S]*?\n\s*\]);\s*\r?\n\s*\/\/ Pagination settings/);
if (!match) throw new Error(`Could not locate productsData in ${sourcePath}`);
const products = vm.runInNewContext(`(${match[1]})`, Object.create(null));
if (!Array.isArray(products) || products.length === 0) throw new Error('Product catalog is empty or invalid.');

const esc = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const safeJson = value => JSON.stringify(value).replaceAll('<', '\\u003c');
const taxonomyValues = (product, singular, plural) => [product[singular], product[plural]]
  .flatMap(value => Array.isArray(value) ? value : [value])
  .map(value => String(value || '').trim()).filter(Boolean);
const withinRoot = target => {
  const rel = relative(root, target);
  return rel !== '' && rel !== '..' && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
};
const cleanLocalPagePath = value => {
  const raw = String(value || '').trim().replaceAll('\\', '/');
  if (!raw || /^[a-z]+:/i.test(raw) || raw.startsWith('//')) throw new Error(`Expected a local product page path, got: ${raw}`);
  const target = resolve(root, raw);
  if (!withinRoot(target)) throw new Error(`Product page path escapes the site root: ${raw}`);
  return { raw, target };
};
const relativeAsset = (asset, pageDirectory) => {
  const value = String(asset || '').trim();
  if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:')) return value;
  const target = resolve(root, value);
  if (!withinRoot(target)) return value;
  let rel = relative(pageDirectory, target).split(sep).join('/');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
};
const allIds = new Set();
const allPaths = new Set();

function makeProductPage(product, pagePath, pageDirectory) {
  const name = String(product.name || '').trim();
  const description = String(product.description || `${name} from EliteVolt Systems.`).trim();
  const canonical = new URL(pagePath, origin).href;
  const title = `${name} | EliteVolt Systems Ghana`;
  const image = relativeAsset(product.mainImg, pageDirectory);
  const thumbnails = Array.isArray(product.thumbnails)
    ? product.thumbnails
    : (typeof product.thumbnails === 'string' ? [product.thumbnails] : []);
  const images = [...new Set([product.mainImg, ...thumbnails].filter(Boolean))];
  const gallery = images.map((src, index) => `<img src="${esc(relativeAsset(src, pageDirectory))}" alt="${esc(name)}${index ? ` product image ${index + 1}` : ''}" loading="${index ? 'lazy' : 'eager'}" decoding="async">`).join('\n');
  const specs = Array.isArray(product.specs) ? product.specs.filter(Boolean) : [];
  const specsSection = specs.length ? `<section class="product-specs"><h2>Specifications</h2><ul>${specs.map(item => `<li>${esc(item)}</li>`).join('')}</ul></section>` : '';
  const id = String(product.id);
  const regularPrice = Number(product.compareAtPrice) > Number(product.price) ? Number(product.compareAtPrice) : Number(product.price);
  const availability = product.stock === true ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock';
  const categories = taxonomyValues(product, 'category', 'categories');
  const subcategories = taxonomyValues(product, 'subcategory', 'subcategories');
  const category = [...categories, ...subcategories].join(' > ');
  const structuredProduct = {
    '@context': 'https://schema.org', '@type': 'Product', name,
    image: images.map(src => (/^(https?:)?\/\//i.test(src) ? src : new URL(String(src).replace(/^\.\//, ''), origin).href)),
    description, sku: id, ...(category ? { category } : {}),
    offers: { '@type': 'Offer', url: canonical, priceCurrency: 'GHS', price: Number(product.price).toFixed(2), availability, itemCondition: 'https://schema.org/NewCondition' },
  };
  const breadcrumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}index.html` },
    { '@type': 'ListItem', position: 2, name: 'Shop', item: `${origin}shop.html` },
    { '@type': 'ListItem', position: 3, name, item: canonical },
  ] };
  const whatsappText = `Hello, I am interested in ${name}. Please share availability and details.`;
  const whatsapp = `https://wa.me/233249976762?text=${encodeURIComponent(whatsappText)}`;
  const mailto = `mailto:info@elitevoltsystems.com?subject=${encodeURIComponent(`Product enquiry - ${name}`)}&body=${encodeURIComponent(`Hello EliteVolt Systems,\n\nI am interested in ${name}. Please share availability and details.`)}`;
  const baseProductUrl = JSON.stringify({ id, name, price: Number(product.price) }).replaceAll('<', '\\u003c');
  const discountPrice = Number(product.compareAtPrice) > Number(product.price) ? Number(product.price).toFixed(2) : null;
  const metaDescription = description.length > 160 ? `${description.slice(0, 157).trimEnd()}...` : description;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="${esc(relativeAsset('images/logo.png', pageDirectory))}" type="image/png">
<title>${esc(title)}</title><meta name="description" content="${esc(metaDescription)}"><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="${esc(canonical)}">
<meta property="og:type" content="product"><meta property="og:title" content="${esc(title)}"><meta property="og:site_name" content="EliteVolt Systems"><meta property="og:description" content="${esc(metaDescription)}"><meta property="og:url" content="${esc(canonical)}"><meta property="og:image" content="${esc(/^(https?:)?\/\//i.test(image) ? image : new URL(String(product.mainImg).replace(/^\.\//, ''), origin).href)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(metaDescription)}"><meta name="twitter:image" content="${esc(/^(https?:)?\/\//i.test(image) ? image : new URL(String(product.mainImg).replace(/^\.\//, ''), origin).href)}">
<script type="application/ld+json">${safeJson(structuredProduct)}</script><script type="application/ld+json">${safeJson(breadcrumbs)}</script>
<link rel="stylesheet" href="${esc(relativeAsset('css/seo-pages.css', pageDirectory))}"><link rel="stylesheet" href="${esc(relativeAsset('css/site-global.css', pageDirectory))}"><link rel="stylesheet" href="${esc(relativeAsset('css/product-gallery.css', pageDirectory))}"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><script defer src="${esc(relativeAsset('js/site-nav.js', pageDirectory))}"></script>
<style>body{font-family:Inter,Arial,sans-serif;margin:0;color:#17211d;background:#fff}.site-nav{position:sticky;top:0;z-index:20;background:#fff}.page-wrap{max-width:1180px;margin:auto;padding:1rem clamp(16px,4vw,40px)}.crumbs{font-size:.92rem;margin:1rem 0;color:#64748b}.crumbs a{color:#166534}.product{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(1.25rem,4vw,3rem);align-items:start}.gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem}.gallery img{width:100%;height:180px;object-fit:contain;background:#f8fafc;border-radius:14px}.gallery img:first-child{grid-column:1/-1;height:min(52vw,500px)}.product h1{font-size:clamp(1.9rem,4vw,3rem);line-height:1.12}.product-description{color:#475569}.price{font-size:1.7rem;font-weight:800;color:#166534;margin:1rem 0}.status{font-weight:700}.product-actions{display:flex;flex-wrap:wrap;gap:.5rem}.cta{display:inline-flex;align-items:center;justify-content:center;background:#0b3d34;color:#fff;padding:.8rem 1rem;border-radius:999px;text-decoration:none;margin:.35rem .35rem .35rem 0;font-weight:700;min-height:46px}.secondary{background:#334155}.product-specs{margin-top:1.5rem}.product-specs li{margin:.5rem 0}.product-enquiries{margin-top:1rem}.related-products{margin-top:3rem}.related-product-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem}@media(max-width:700px){.product{grid-template-columns:1fr}.gallery img:first-child{height:75vw;max-height:380px}.gallery img{height:100px}.product-actions .cta{flex:1}.crumbs{overflow-x:auto;white-space:nowrap}}</style></head>
<body><header class="site-nav"><div class="nav-inner"><a class="brand" href="${esc(relativeAsset('index.html', pageDirectory))}"><img src="${esc(relativeAsset('images/logo.png', pageDirectory))}" alt="EliteVolt Systems logo"><span class="brand-copy">Solar • Electrical • Electronics</span></a><nav class="main-nav" aria-label="Main navigation"><a href="${esc(relativeAsset('index.html', pageDirectory))}"><i class="fas fa-house" aria-hidden="true"></i> Home</a><a href="${esc(relativeAsset('shop.html', pageDirectory))}"><i class="fas fa-store" aria-hidden="true"></i> Shop</a><a href="${esc(relativeAsset('calculator.html', pageDirectory))}"><i class="fas fa-calculator" aria-hidden="true"></i> Calc</a><a href="${esc(relativeAsset('index.html', pageDirectory))}#services"><i class="fas fa-tools" aria-hidden="true"></i> Services</a><a href="${esc(relativeAsset('blog/index.html', pageDirectory))}"><i class="fas fa-blog" aria-hidden="true"></i> Blog</a><a href="${esc(relativeAsset('shop.html', pageDirectory))}" class="mini-cart-link" aria-label="Open cart"><i class="fas fa-shopping-cart" aria-hidden="true"></i><span id="cartItemCount" class="cart-badge" style="display:none">0</span></a></nav></div></header>
<main class="page-wrap"><div class="crumbs"><a href="${esc(relativeAsset('index.html', pageDirectory))}">Home</a> / <a href="${esc(relativeAsset('shop.html', pageDirectory))}">Shop</a> / ${esc(name)}</div><section class="product" aria-labelledby="productTitle"><div class="gallery" aria-label="${esc(name)} images">${gallery}</div><div><h1 id="productTitle">${esc(name)}</h1><p class="product-description">${esc(description)}</p><div class="price" data-product-price>GH₵ ${Number(product.price).toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div><p class="status">${product.stock === true ? 'In stock' : 'Out of stock'}</p><div class="product-actions"><button class="product-wishlist" type="button" data-wish="${esc(id)}" aria-pressed="false">♡ Save to wishlist</button><button class="cta add-to-cart-btn" type="button" data-product-add="${esc(id)}" ${product.stock === true ? '' : 'disabled'}>Add to cart</button></div>${specsSection}<div class="product-enquiries"><a class="cta" href="${esc(whatsapp)}" target="_blank" rel="noopener">Enquire on WhatsApp</a><a class="cta secondary" href="${esc(mailto)}">Enquire by Email</a><a class="cta secondary" href="${esc(relativeAsset('shop.html', pageDirectory))}">Back to Shop</a></div></div></section><section class="related-products" aria-labelledby="related-products-title"><h2 id="related-products-title">Related products</h2><div class="related-product-grid"></div></section></main>
<footer class="site-footer"><div class="site-footer-inner"><div class="footer-brand"><h3>EliteVolt Systems</h3><p>Solar • Electrical • Electronics</p><p>Solar installation, electrical services, solar products and backup power solutions.</p></div><div><h4>Quick Links</h4><div class="footer-links"><a href="${esc(relativeAsset('index.html', pageDirectory))}">Home</a><a href="${esc(relativeAsset('shop.html', pageDirectory))}">Shop</a><a href="${esc(relativeAsset('calculator.html', pageDirectory))}">Load Calculator</a><a href="${esc(relativeAsset('index.html', pageDirectory))}#services">Services</a><a href="${esc(relativeAsset('blog/index.html', pageDirectory))}">Blog</a></div></div><div><h4>Contact</h4><p><a href="tel:+233249976762">+233 24 997 6762</a></p><p><a href="mailto:info@elitevoltsystems.com">info@elitevoltsystems.com</a></p><p>Ghana</p></div></div><div class="footer-bottom"><span>© 2026 EliteVolt Systems. All rights reserved.</span><span>Solar • Electrical • Electronics</span></div></footer>
<script>window.EV_PRODUCT = ${baseProductUrl};</script><script src="${esc(relativeAsset('js/shop.js', pageDirectory))}"></script><script src="${esc(relativeAsset('js/product-gallery.js', pageDirectory))}"></script><script src="${esc(relativeAsset('js/meta-pixel.js', pageDirectory))}"></script></body></html>
`;
}

for (const product of products) {
  const id = String(product.id || '').trim();
  if (!id || allIds.has(id)) throw new Error(`Missing or duplicate product ID: ${id || '(empty)'}`);
  allIds.add(id);
  const { raw: pagePath, target } = cleanLocalPagePath(product.pageUrl);
  if (!pagePath.startsWith('products/')) throw new Error(`Product pages must live in products/: ${pagePath}`);
  if (allPaths.has(pagePath.toLowerCase())) throw new Error(`Two products use the same page path: ${pagePath}`);
  allPaths.add(pagePath.toLowerCase());
  const pageDirectory = dirname(target);
  await mkdir(pageDirectory, { recursive: true });
  let existing = '';
  try {
    existing = await readFile(target, 'utf8');
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }
  const generated = makeProductPage(product, pagePath, pageDirectory);
  if (existing !== generated) {
    await writeFile(target, generated, 'utf8');
    console.log(`${existing ? 'Updated' : 'Created'} product page: ${pagePath}`);
  }
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const collected = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ['blog', 'products'].includes(entry.name)) {
      collected.push(...await htmlFiles(resolve(directory, entry.name)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      collected.push(resolve(directory, entry.name));
    }
  }
  return collected;
}

const pages = await htmlFiles(root);
const urls = [...new Set(pages.map(file => {
  const rel = relative(root, file).split(sep).join('/');
  if (rel === 'index.html') return origin;
  if (rel.endsWith('/index.html')) return new URL(`${rel.slice(0, -'index.html'.length)}`, origin).href;
  return new URL(rel, origin).href;
}))].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
const xmlEscape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${xmlEscape(url)}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(root, 'sitemap.xml'), sitemap, 'utf8');
console.log(`Catalog build complete: ${products.length} products and ${urls.length} sitemap URLs.`);
