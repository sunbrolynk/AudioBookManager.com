import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { findOverflow } from '../scripts/check-overflow.mjs';

test('findOverflow flags what widens the page and ignores what scrolls inside its own box', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  const check = async (html) => { await page.setContent(html); return page.evaluate(findOverflow); };
  try {
    assert.equal((await check('<body style="margin:0"><div style="width:500px">wide</div></body>')).length, 2);
    assert.deepEqual(await check('<body style="margin:0"><div style="overflow-x:auto"><pre style="width:900px">code</pre></div><a style="position:absolute;left:-999px">skip</a></body>'), []);
    const header = '<header class="r1-top"><div style="display:flex;width:360px"><nav style="display:flex;min-width:0;white-space:nowrap;width:100px"><a>Features</a><a>Screenshots</a></nav><div class="r">EN</div></div></header>';
    assert.deepEqual(await check(`<body style="margin:0">${header}</body>`), ['header links run under the language menu']);
  } finally {
    await browser.close();
  }
});
