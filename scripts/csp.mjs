#!/usr/bin/env node
// Runs after `astro build`: hashes every inline script, inline <style> and style attribute in
// dist/, and writes them into dist/_headers so the Content-Security-Policy allows exactly those.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const html = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? html(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []);
const hash = (s) => `'sha256-${createHash('sha256').update(s, 'utf8').digest('base64')}'`;

const scripts = new Set();
const styles = new Set();
for (const file of html(dist)) {
  const page = readFileSync(file, 'utf8');
  for (const m of page.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) scripts.add(hash(m[1]));
  for (const m of page.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) styles.add(hash(m[1]));
  for (const m of page.matchAll(/\sstyle="([^"]*)"/g)) styles.add(hash(m[1].replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')));
}

const path = join(dist, '_headers');
const out = readFileSync(path, 'utf8')
  .replaceAll('__SCRIPT_HASHES__', [...scripts].sort().join(' '))
  .replace('__STYLE_HASHES__', [...styles].sort().join(' '));
if (out.includes('__')) throw new Error('a CSP placeholder was left in _headers');
const longest = Math.max(...out.split('\n').map((l) => l.length));
// Cloudflare Pages rejects a header line longer than 2,000 characters.
if (longest > 2000) throw new Error(`CSP line is ${longest} characters, over Cloudflare's 2,000 limit`);
writeFileSync(path, out);
console.log(`csp: ${scripts.size} script and ${styles.size} style hashes, longest line ${longest} characters`);
