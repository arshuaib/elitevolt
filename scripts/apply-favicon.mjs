import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const faviconPath = resolve(root, 'images', 'logo.png');

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      files.push(...await collectHtml(resolve(directory, entry.name)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      files.push(resolve(directory, entry.name));
    }
  }
  return files;
}

const htmlFiles = await collectHtml(root);
let updated = 0;
for (const file of htmlFiles) {
  const relativeFavicon = relative(dirname(file), faviconPath).split(sep).join('/');
  const iconLink = `<link rel="icon" href="${relativeFavicon}" type="image/png">`;
  const html = await readFile(file, 'utf8');
  const iconTag = /<link\b(?=[^>]*\brel\s*=\s*["'][^"']*\b(?:shortcut\s+)?icon\b[^"']*["'])[^>]*>/i;
  const withoutOldIcon = html.replace(iconTag, '');
  let next = withoutOldIcon.replace(/(<meta\b[^>]*name\s*=\s*["']viewport["'][^>]*>)/i, `$1\n${iconLink}`);
  if (next === withoutOldIcon) {
    next = withoutOldIcon.replace(/(<meta\b[^>]*charset\s*=\s*["']?[^\s"'>]+[^>]*>)/i, `$1\n${iconLink}`);
  }
  if (next === withoutOldIcon) {
    next = withoutOldIcon.replace(/<head\b[^>]*>/i, head => `${head}\n${iconLink}`);
  }
  if (next === withoutOldIcon) throw new Error(`Could not find a <head> element in ${file}`);
  if (next !== html) {
    await writeFile(file, next, 'utf8');
    updated += 1;
  }
}

console.log(`Applied favicon links to ${updated} HTML pages.`);
