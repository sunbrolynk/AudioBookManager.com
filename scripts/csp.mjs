#!/usr/bin/env node
// Runs after `astro build`: hashes every inline script, inline <style> and style attribute in
// dist/, and writes them into dist/_headers so the Content-Security-Policy allows exactly those.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { inspectHtml } from './lib-html.mjs';

const dist = new URL('../dist/', import.meta.url).pathname;
const html = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? html(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []);
const hash = (s) => `'sha256-${createHash('sha256').update(s, 'utf8').digest('base64')}'`;

const scripts = new Set();
const styles = new Set();
const pages = html(dist);
if (!pages.length) throw new Error('No HTML files found for CSP generation');
for (const file of pages) {
  const parsed = inspectHtml(readFileSync(file, 'utf8'));
  for (const script of parsed.scripts) scripts.add(hash(script));
  for (const style of parsed.styles) styles.add(hash(style));
  for (const attribute of parsed.styleAttributes) styles.add(hash(attribute));
}

const path = join(dist, '_headers');
const template = readFileSync(path, 'utf8');
for (const placeholder of ['__SCRIPT_HASHES__', '__STYLE_HASHES__']) {
  if (template.split(placeholder).length - 1 !== 1) {
    throw new Error(`Expected exactly one ${placeholder} placeholder`);
  }
}
const out = template
  .replace('__SCRIPT_HASHES__', [...scripts].sort().join(' '))
  .replace('__STYLE_HASHES__', [...styles].sort().join(' '));
if (out.includes('__')) throw new Error('a CSP placeholder was left in _headers');
const longest = Math.max(...out.split('\n').map((l) => l.length));
// Cloudflare Pages rejects a header line longer than 2,000 characters.
if (longest > 2000) throw new Error(`CSP line is ${longest} characters, over Cloudflare's 2,000 limit`);
writeFileSync(path, out);
console.log(`csp: ${scripts.size} script and ${styles.size} style hashes, longest line ${longest} characters`);
