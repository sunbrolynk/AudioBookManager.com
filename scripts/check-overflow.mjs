#!/usr/bin/env node
// Loads every built page at every width from 320 to 1920 and fails if the page scrolls sideways
// or any visible element sticks out past the viewport. Run after `npm run build`.
// Needs Playwright's Chromium: `npx playwright install chromium` once per machine.
import { createServer } from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

export const WIDTHS = [320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920];
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.wasm': 'application/wasm' };

// Runs in the page: what sticks out past the right edge (or the left, on a right-to-left page)
// without a scrolling or clipping box around it to keep it in.
export function findOverflow() {
  const root = document.scrollingElement;
  const width = root.clientWidth;
  const problems = [];
  if (root.scrollWidth > width) problems.push(`page is ${root.scrollWidth}px wide in a ${width}px viewport`);
  const rtl = getComputedStyle(document.documentElement).direction === 'rtl';
  // The header's links sit in a row with the language menu and buttons; they must never run under them.
  const nav = document.querySelector('.r1-top nav');
  const controls = document.querySelector('.r1-top .r');
  const links = nav && getComputedStyle(nav).display !== 'none' ? [...nav.querySelectorAll('a')] : [];
  if (links.length && controls && links.at(-1).getBoundingClientRect().right > controls.getBoundingClientRect().left + 1) {
    problems.push('header links run under the language menu');
  }
  const contained = (el) => {
    for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
      const s = getComputedStyle(a);
      if (s.overflowX !== 'visible' || s.position === 'fixed') return true;
    }
    return false;
  };
  const clipped = (el) => { const s = getComputedStyle(el); return s.overflowX !== 'visible' || s.display === 'none' || s.visibility === 'hidden'; };
  // Text can run out of a box that itself fits, such as one long word in a heading.
  const text = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = text.nextNode(); node && problems.length < 5; node = text.nextNode()) {
    const el = node.parentElement;
    if (!node.textContent.trim() || !el || clipped(el) || contained(el)) continue;
    const range = document.createRange();
    range.selectNodeContents(node);
    const rects = [...range.getClientRects()];
    if (rects.some((r) => (rtl ? r.left < -1 : r.right > width + 1))) problems.push(`text "${node.textContent.trim().slice(0, 40)}" in ${el.tagName.toLowerCase()} runs past the viewport`);
  }
  for (const el of document.body.querySelectorAll('*')) {
    const s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden' || s.position === 'fixed') continue;
    const r = el.getBoundingClientRect();
    if (r.width <= 1 || r.height <= 1) continue;
    const out = rtl ? r.left < -1 : r.right > width + 1;
    if (!out || contained(el)) continue;
    const name = el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (el.classList.length ? `.${[...el.classList].join('.')}` : '');
    problems.push(`${name} reaches ${Math.round(rtl ? r.left : r.right)}px`);
    if (problems.length > 4) break;
  }
  return problems;
}

async function pages(dist) {
  const all = [];
  const walk = async (dir) => {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.name === 'index.html') {
        const html = await readFile(p, 'utf8');
        // Redirect stubs and ReDoc's own page aren't laid out by the site's CSS.
        if (!html.includes('http-equiv="refresh"') && !html.includes('id="redoc"')) all.push(`/${relative(dist, dir)}/`.replace('//', '/'));
      }
    }
  };
  await walk(dist);
  return all.sort();
}

function serve(dist) {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const file = join(dist, path.endsWith('/') ? `${path}index.html` : path);
    try {
      res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
      res.end(await readFile(file));
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dist = fileURLToPath(new URL('../dist/', import.meta.url));
  const server = await serve(dist);
  const base = `http://127.0.0.1:${server.address().port}`;
  const list = await pages(dist);
  const browser = await chromium.launch();
  const failures = [];
  const queue = [...list];
  await Promise.all(Array.from({ length: 4 }, async () => {
    const page = await browser.newPage({ viewport: { width: WIDTHS[0], height: 900 } });
    for (let path = queue.shift(); path; path = queue.shift()) {
      await page.setViewportSize({ width: WIDTHS[0], height: 900 });
      await page.goto(base + path, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        const problems = await page.evaluate(findOverflow);
        if (problems.length) failures.push(`${path} at ${width}px: ${problems.join('; ')}`);
      }
    }
    await page.close();
  }));
  await browser.close();
  server.close();
  if (failures.length) {
    console.error(`check-overflow: ${failures.length} page and width combination(s) overflow:\n  ${failures.join('\n  ')}`);
    process.exit(1);
  }
  console.log(`check-overflow: ${list.length} pages fit at ${WIDTHS.join(', ')}px`);
}
