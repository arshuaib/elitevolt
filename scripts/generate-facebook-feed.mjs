import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteOrigin = 'https://elitevoltsystems.com/';
const sourcePath = resolve(root, 'js/shop.js');
const source = await readFile(sourcePath, 'utf8');
const productsMatch = source.match(/const\s+productsData\s*=\s*(\[[\s\S]*?\n\s*\]);\s*\r?\n\s*\/\/ Pagination settings/);

if (!productsMatch) {
  throw new Error(`Could not find the productsData array in ${sourcePath}`);
}

const products = vm.runInNewContext(`(${productsMatch[1]})`, Object.create(null));
if (!Array.isArray(products) || products.length === 0) {
  throw new Error('The product catalog is empty or invalid.');
}

const seenIds = new Set();
const rows = products.map((product) => {
  const id = String(product.id || '').trim();
  const title = String(product.name || '').trim();
  const description = String(product.description || title).trim();
  const currentPrice = Number(product.price);
  const compareAtPrice = Number(product.compareAtPrice);

  if (!id || !title || !Number.isFinite(currentPrice) || currentPrice <= 0) {
    throw new Error(`Product ${id || '(missing ID)'} needs an ID, title, and positive price.`);
  }
  if (seenIds.has(id)) throw new Error(`Duplicate product ID: ${id}`);
  seenIds.add(id);

  const pagePath = String(product.pageUrl || '').trim();
  const imagePath = String(product.mainImg || '').trim();
  if (!pagePath || !imagePath) throw new Error(`Product ${id} needs a product page and main image.`);
  if (!existsSync(resolve(root, pagePath))) throw new Error(`Product page is missing for ${id}: ${pagePath}`);

  const salePrice = Number.isFinite(compareAtPrice) && compareAtPrice > currentPrice
    ? currentPrice
    : null;
  const regularPrice = salePrice === null ? currentPrice : compareAtPrice;
  const category = [product.category, product.subcategory]
    .map((value) => String(value || '').trim())
    .filter(Boolean)
    .join(' > ') || 'Solar & Electrical Products';
  const thumbnails = Array.isArray(product.thumbnails) ? product.thumbnails : [];

  return {
    id,
    title,
    description,
    availability: product.stock === true ? 'in stock' : 'out of stock',
    condition: 'new',
    price: `${regularPrice.toFixed(2)} GHS`,
    sale_price: salePrice === null ? '' : `${salePrice.toFixed(2)} GHS`,
    link: new URL(pagePath, siteOrigin).href,
    image_link: new URL(imagePath, siteOrigin).href,
    additional_image_link: thumbnails[0] ? new URL(String(thumbnails[0]), siteOrigin).href : '',
    brand: String(product.brand || 'EliteVolt Systems').trim(),
    product_type: category,
  };
});

const headers = [
  'id', 'title', 'description', 'availability', 'condition', 'price',
  'sale_price', 'link', 'image_link', 'additional_image_link', 'brand', 'product_type',
];
const csvCell = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const csv = [headers.join(','), ...rows.map((row) => headers.map((key) => csvCell(row[key])).join(','))].join('\r\n') + '\r\n';

const xmlEscape = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
})[character]);
const xmlItems = rows.map((row) => [
  '    <item>',
  `      <g:id>${xmlEscape(row.id)}</g:id>`,
  `      <g:title>${xmlEscape(row.title)}</g:title>`,
  `      <g:description>${xmlEscape(row.description)}</g:description>`,
  `      <link>${xmlEscape(row.link)}</link>`,
  `      <g:image_link>${xmlEscape(row.image_link)}</g:image_link>`,
  ...(row.additional_image_link ? [`      <g:additional_image_link>${xmlEscape(row.additional_image_link)}</g:additional_image_link>`] : []),
  `      <g:availability>${row.availability === 'in stock' ? 'in_stock' : 'out_of_stock'}</g:availability>`,
  `      <g:condition>${row.condition}</g:condition>`,
  `      <g:price>${xmlEscape(row.price)}</g:price>`,
  ...(row.sale_price ? [`      <g:sale_price>${xmlEscape(row.sale_price)}</g:sale_price>`] : []),
  `      <g:brand>${xmlEscape(row.brand)}</g:brand>`,
  `      <g:product_type>${xmlEscape(row.product_type)}</g:product_type>`,
  '      <g:identifier_exists>false</g:identifier_exists>',
  '    </item>',
].join('\n')).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>EliteVolt Systems Product Catalog</title>
    <link>${siteOrigin}shop.html</link>
    <description>Solar, electrical and electronic products from EliteVolt Systems, Ghana.</description>
    <atom:link href="${siteOrigin}merchant-feed.xml" rel="self" type="application/rss+xml" />
${xmlItems}
  </channel>
</rss>
`;

await Promise.all([
  writeFile(resolve(root, 'facebook-product-feed.csv'), csv, 'utf8'),
  writeFile(resolve(root, 'merchant-feed.xml'), xml, 'utf8'),
]);

console.log(`Generated CSV and XML catalog feeds for ${rows.length} products.`);
