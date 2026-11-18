import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright';
import { fileFor, findOverflow, serve } from '../scripts/check-overflow.mjs';

// Build hosts without Playwright's Chromium (Cloudflare Pages) skip this; GitHub Actions installs it, so there it always runs.
const skip = !existsSync(chromium.executablePath()) && process.env.GITHUB_ACTIONS !== 'true' && "Playwright's Chromium is not installed on this host";

test('findOverflow flags what widens the page and ignores what scrolls inside its own box', { skip }, async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  const check = async (html) => { await page.setContent(html); return page.evaluate(findOverflow); };
  try {
    assert.equal((await check('<body style="margin:0"><div style="width:500px">wide</div></body>')).length, 2);
    assert.match((await check('<body style="margin:0"><h1 style="font-size:60px">Troubleshootingtroubleshooting</h1></body>')).join(), /text "Troubleshootingtroubleshooting" in h1 runs past/);
    assert.deepEqual(await check('<body style="margin:0"><span style="position:absolute;width:1px;overflow:hidden;white-space:nowrap">screen reader only text that is long</span><div style="overflow-x:auto"><pre style="width:900px">code</pre></div><a style="position:absolute;left:-999px">skip</a></body>'), []);
    const header = '<header class="r1-top"><div style="display:flex;width:360px"><nav style="display:flex;min-width:0;white-space:nowrap;width:100px"><a>Features</a><a>Screenshots</a></nav><div class="r">EN</div></div></header>';
    assert.deepEqual(await check(`<body style="margin:0">${header}</body>`), ['header links run under the language menu']);
  } finally {
    await browser.close();
  }
});

test('the check server only hands out files inside dist', () => {
  assert.equal(fileFor('/site/dist', '/settings/'), '/site/dist/settings/index.html');
  assert.equal(fileFor('/site/dist', '/_astro/a.css'), '/site/dist/_astro/a.css');
  // The URL parser folds plain dot segments; an encoded slash only becomes one after decoding.
  assert.equal(fileFor('/site/dist', '/../package.json'), '/site/dist/package.json');
  for (const url of ['/%2e%2e%2fpackage.json', '/x/..%2f..%2f..%2fsecret', '/%E0%A4%A']) assert.equal(fileFor('/site/dist', url), null, url);
});

test('the check server redirects a directory URL and 404s a missing file without crashing', async () => {
  const dist = mkdtempSync(join(tmpdir(), 'ovf-'));
  mkdirSync(join(dist, 'docs'));
  writeFileSync(join(dist, 'docs', 'index.html'), 'ok');
  const server = await serve(dist);
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const dir = await fetch(`${base}/docs`, { redirect: 'manual' });
    assert.equal(dir.status, 308);
    assert.equal(dir.headers.get('location'), '/docs/');
    assert.equal((await fetch(`${base}/docs/`)).status, 200);
    assert.equal((await fetch(`${base}/missing.css`)).status, 404);
  } finally {
    server.close();
    rmSync(dist, { recursive: true });
  }
});
