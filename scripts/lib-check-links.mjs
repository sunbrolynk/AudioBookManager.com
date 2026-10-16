import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, relative, sep, join } from 'node:path';
import { inspectHtml } from './lib-html.mjs';

export function checkLinks(directory, site = 'https://audiobookmanager.com') {
  const root = resolve(directory);
  const origin = new URL(site).origin;
  const problems = [];
  const cache = new Map();

  const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isSymbolicLink()) {
      throw new Error(`Unexpected symlink in build output: ${relative(root, path)}`);
    }
    return entry.isDirectory() ? walk(path) : path.endsWith('.html') ? [path] : [];
  });

  const parsed = (file) => {
    if (!cache.has(file)) cache.set(file, inspectHtml(readFileSync(file, 'utf8')));
    return cache.get(file);
  };

  const isFile = (file) => {
    try {
      return statSync(file).isFile();
    } catch (error) {
      if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return false;
      throw error;
    }
  };

  const pageUrl = (file) => {
    const parts = relative(root, file).split(sep);
    if (parts.at(-1) === 'index.html') parts.pop();
    const path = '/' + parts.map(encodeURIComponent).join('/');
    return new URL(file.endsWith(`${sep}index.html`) ? `${path.replace(/\/$/, '')}/` : path, origin);
  };

  const files = walk(root);
  if (!files.length) throw new Error('No HTML files found in build output');

  for (const file of files) {
    // Starlight's generated 404 language links do not have per-locale pages.
    if (relative(root, file) === '404.html') continue;

    const document = parsed(file);
    const current = pageUrl(file);
    const report = (href, reason) =>
      problems.push(`${relative(root, file)} -> ${href} (${reason})`);

    if (document.baseHref !== undefined) {
      report(document.baseHref, 'base href is unsupported; use explicit links');
      continue;
    }

    for (const { href } of document.links) {
      let url;
      try {
        url = new URL(href, current);
      } catch {
        report(href, 'invalid URL');
        continue;
      }

      if (url.protocol === 'mailto:' || url.protocol === 'tel:') continue;
      if (!['http:', 'https:'].includes(url.protocol)) {
        report(href, 'unsupported URL scheme');
        continue;
      }
      if (url.origin !== origin) continue;

      let pathname;
      try {
        pathname = decodeURIComponent(url.pathname);
      } catch {
        report(href, 'invalid path encoding');
        continue;
      }
      if (pathname.includes('\0') || pathname.includes('\\')) {
        report(href, 'invalid path characters');
        continue;
      }

      const candidate = resolve(root, `.${pathname}`);
      const local = relative(root, candidate);
      if (local === '..' || local.startsWith(`..${sep}`) || resolve(root, local) !== candidate) {
        report(href, 'path escapes build directory');
        continue;
      }

      const target = isFile(candidate)
        ? candidate
        : isFile(join(candidate, 'index.html'))
          ? join(candidate, 'index.html')
          : null;

      if (!target) {
        report(href, 'no page or file');
        continue;
      }
      if (!url.hash || !target.endsWith('.html')) continue;

      let fragment;
      try {
        fragment = decodeURIComponent(url.hash.slice(1).split(':~:')[0]);
      } catch {
        report(href, 'invalid anchor encoding');
        continue;
      }

      // Empty fragments and #top are browser-supported top-of-page links.
      if (!fragment || fragment.toLowerCase() === 'top') continue;
      if (!parsed(target).ids.has(fragment)) report(href, 'no anchor');
    }
  }

  return problems;
}
