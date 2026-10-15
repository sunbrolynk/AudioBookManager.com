#!/usr/bin/env node
// Finds internal links and #anchors in dist/ that point nowhere. Run after `npm run build`: node scripts/check-links.mjs
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(d, e.name)) : e.name.endsWith('.html') ? [join(d, e.name)] : []);
const ids = new Map();
const idsOf = (file) => {
  if (!ids.has(file)) ids.set(file, new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return ids.get(file);
};
const bad = [];
// 404.html's language switcher points at per-locale 404 paths that never exist as pages.
for (const file of walk(dist).filter((f) => !f.endsWith('/404.html'))) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/href="(\/[^"]*|#[^"]+)"/g)) {
    if (href.startsWith('/_astro/') || href.startsWith('//') || /\.\w+$/.test(href.split('#')[0])) continue;
    const [path, frag] = href.split('#');
    const target = path ? join(dist, decodeURI(path), 'index.html') : file;
    if (!existsSync(target)) { bad.push(`${relative(dist, file)} -> ${href} (no page)`); continue; }
    if (frag && !idsOf(target).has(decodeURIComponent(frag))) bad.push(`${relative(dist, file)} -> ${href} (no anchor)`);
  }
}
console.log(bad.length ? bad.join('\n') : 'check-links: every internal link and anchor resolves');
process.exit(bad.length ? 1 : 0);
