#!/usr/bin/env node
// Runs after csp.mjs: checks every resource the built pages and stylesheets load against the
// policy in dist/_headers, so a data: icon or an off-site font fails the build instead of the browser.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const directives = (value) =>
  new Map(value.split(';').map((d) => d.trim().split(/\s+/)).filter((d) => d[0]).map(([name, ...sources]) => [name, sources]));

// Each path rule in _headers with the policy it sets, in file order; the last matching rule wins.
export function parseRules(headers) {
  const rules = [];
  for (const line of headers.split('\n')) {
    if (/^\//.test(line)) rules.push({ pattern: line.trim(), policy: null });
    const csp = line.match(/^\s+Content-Security-Policy:\s*(.+)/);
    if (csp && rules.length) rules.at(-1).policy = directives(csp[1]);
  }
  const withPolicy = rules.filter((r) => r.policy);
  if (!withPolicy.length) throw new Error('dist/_headers has no Content-Security-Policy');
  return withPolicy;
}

export const parsePolicy = (headers) => parseRules(headers)[0].policy;

export function policyFor(rules, path) {
  const matches = (pattern) => new RegExp(`^${pattern.split('*').map((s) => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('.*')}$`).test(path);
  return rules.filter((r) => matches(r.pattern)).at(-1)?.policy;
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
  // Imports load stylesheets (style-src), font-face sources load fonts, and every other url() an image.
  let rest = css.replace(/@import\s+(?:url\(\s*["']?([^"')\s]+)["']?\s*\)|["']([^"']+)["'])[^;]*;?/g, (_, u, q) => {
    found.push(['style-src', u ?? q]);
    return '';
  });
  rest = rest.replace(/@font-face\s*{[^}]*}/g, (block) => {
    for (const m of block.matchAll(/url\(\s*["']?([^"')]+)/g)) found.push(['font-src', m[1]]);
    return '';
  });
  for (const m of rest.matchAll(/url\(\s*["']?([^"')]+)/g)) found.push(['img-src', m[1]]);
  return found;
};

// One attribute of a tag, however it is quoted.
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'>]+))`, 'i'));
  return m ? (m[1] ?? m[2] ?? m[3]).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&') : undefined;
};

// The URLs in a srcset, parsed the way browsers do: a candidate's URL runs to the next whitespace,
// a trailing comma ends it, and descriptors run to the next comma.
export function srcsetUrls(value) {
  const urls = [];
  let i = 0;
  while (i < value.length) {
    while (i < value.length && /[\s,]/.test(value[i])) i++;
    const start = i;
    while (i < value.length && !/\s/.test(value[i])) i++;
    let url = value.slice(start, i);
    if (url.endsWith(',')) url = url.replace(/,+$/, '');
    else while (i < value.length && value[i] !== ',') i++;
    if (url) urls.push(url);
  }
  return urls;
}

const htmlUrls = (html) => {
  const found = [];
  for (const [tag, name] of html.matchAll(/<(script|img|source|link)\b[^>]*>/gi)) {
    const kind = name.toLowerCase();
    const src = attr(tag, 'src');
    if (kind === 'script' && src) found.push(['script-src', src]);
    if (kind === 'img' && src) found.push(['img-src', src]);
    // A browser may pick any srcset candidate, so each one has to be allowed.
    const srcset = attr(tag, 'srcset');
    if ((kind === 'img' || kind === 'source') && srcset) for (const url of srcsetUrls(srcset)) found.push(['img-src', url]);
    if (kind === 'link') {
      const href = attr(tag, 'href');
      const rel = (attr(tag, 'rel') ?? '').toLowerCase();
      if (!href) continue;
      if (rel === 'stylesheet') found.push(['style-src', href]);
      else if (rel.includes('icon')) found.push(['img-src', href]);
      else if (rel === 'manifest') found.push(['manifest-src', href]);
      else if (rel === 'preload' && attr(tag, 'as') === 'font') found.push(['font-src', href]);
    }
  }
  for (const m of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) found.push(...cssUrls(m[1]));
  for (const m of html.matchAll(/\sstyle\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) found.push(...cssUrls((m[1] ?? m[2]).replace(/&quot;/g, '"')));
  return found;
};

export function checkSite(dist, origin) {
  const rules = parseRules(readFileSync(join(dist, '_headers'), 'utf8'));
  const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]);
  const problems = new Set();
  for (const file of files(dist)) {
    const urls = file.endsWith('.html') ? htmlUrls(readFileSync(file, 'utf8'))
      : file.endsWith('.css') ? cssUrls(readFileSync(file, 'utf8')) : [];
    const rel = file.slice(dist.length).replace(/^\/?/, '/');
    const policy = policyFor(rules, file.endsWith('.html') ? rel.replace(/index\.html$/, '') : rel);
    if (urls.length && !policy) problems.add(`no Content-Security-Policy applies to ${rel}`);
    for (const [directive, url] of urls) {
      if (policy && !allowed(policy, directive, url, origin)) problems.add(`${directive} blocks ${url.slice(0, 60)} (${file.slice(dist.length)})`);
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
