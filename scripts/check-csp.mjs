#!/usr/bin/env node
// Runs after csp.mjs: checks every resource the built pages and stylesheets load against the
// policy in dist/_headers, so a data: icon or an off-site font fails the build instead of the browser.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export function parsePolicy(headers) {
  const line = headers.match(/Content-Security-Policy:\s*(.+)/);
  if (!line) throw new Error('dist/_headers has no Content-Security-Policy');
  return new Map(line[1].split(';').map((d) => d.trim().split(/\s+/)).filter((d) => d[0]).map(([name, ...sources]) => [name, sources]));
}

export function allowed(policy, directive, url, origin) {
  const sources = policy.get(directive) ?? policy.get('default-src') ?? [];
  if (sources.includes("'none'")) return false;
  if (url.startsWith('data:')) return sources.includes('data:');
  if (url.startsWith('blob:')) return sources.includes('blob:');
  const abs = url.match(/^(?:(https?):)?\/\/([^/?#]+)/i);
  // An absolute URL on the site's own origin is the same as a relative one.
  const own = abs && origin && abs[2].toLowerCase() === new URL(origin).host && (!abs[1] || `${abs[1].toLowerCase()}:` === new URL(origin).protocol);
  if (!abs || own) return sources.includes("'self'");
  return sources.includes('*') || sources.includes('https:') || sources.some((s) => s.replace(/^https?:\/\//, '') === abs[2]);
}

const cssUrls = (css) => {
  const found = [];
  // Strip font-face blocks first so their urls are checked against font-src and the rest against img-src.
  const rest = css.replace(/@font-face\s*{[^}]*}/g, (block) => {
    for (const m of block.matchAll(/url\(\s*["']?([^"')]+)/g)) found.push(['font-src', m[1]]);
    return '';
  });
  for (const m of rest.matchAll(/url\(\s*["']?([^"')]+)/g)) found.push(['img-src', m[1]]);
  return found;
};

const htmlUrls = (html) => {
  const found = [];
  for (const m of html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)) found.push(['script-src', m[1]]);
  for (const m of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) found.push(['img-src', m[1]]);
  // A browser may pick any srcset candidate, so each one has to be allowed.
  for (const m of html.matchAll(/<(?:img|source)\b[^>]*\bsrcset="([^"]+)"/g)) {
    for (const candidate of m[1].split(/,\s+/)) if (candidate.trim()) found.push(['img-src', candidate.trim().split(/\s+/)[0]]);
  }
  for (const m of html.matchAll(/<link\b([^>]*)>/g)) {
    const href = m[1].match(/\bhref="([^"]+)"/)?.[1];
    const rel = m[1].match(/\brel="([^"]+)"/)?.[1] ?? '';
    if (!href) continue;
    if (rel === 'stylesheet') found.push(['style-src', href]);
    else if (rel.includes('icon')) found.push(['img-src', href]);
    else if (rel === 'manifest') found.push(['manifest-src', href]);
    else if (rel === 'preload' && /\bas="font"/.test(m[1])) found.push(['font-src', href]);
  }
  for (const m of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)) found.push(...cssUrls(m[1]));
  for (const m of html.matchAll(/\sstyle="([^"]*)"/g)) found.push(...cssUrls(m[1].replace(/&quot;/g, '"')));
  return found;
};

export function checkSite(dist, origin) {
  const policy = parsePolicy(readFileSync(join(dist, '_headers'), 'utf8'));
  const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]);
  const problems = new Set();
  for (const file of files(dist)) {
    const urls = file.endsWith('.html') ? htmlUrls(readFileSync(file, 'utf8'))
      : file.endsWith('.css') ? cssUrls(readFileSync(file, 'utf8')) : [];
    for (const [directive, url] of urls) {
      if (!allowed(policy, directive, url, origin)) problems.add(`${directive} blocks ${url.slice(0, 60)} (${file.slice(dist.length)})`);
    }
  }
  return [...problems];
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const site = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8').match(/site: '([^']+)'/)?.[1];
  const problems = checkSite(fileURLToPath(new URL('../dist/', import.meta.url)), site);
  if (problems.length) {
    console.error(`check-csp: ${problems.length} resource(s) the Content-Security-Policy blocks:\n  ${problems.join('\n  ')}`);
    process.exit(1);
  }
  console.log('check-csp: every built resource is allowed by the policy');
}
