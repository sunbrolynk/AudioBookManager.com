import { markdownSafeUrls } from '../src/lib/markdown-safe-urls.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { htmlAsText } from '../src/lib/html-as-text.mjs';

const renderer = await createSatteriMarkdownProcessor({
  mdastPlugins: [htmlAsText, markdownSafeUrls],
  syntaxHighlight: false,
});

test('raw HTML is rendered as text rather than active markup', async () => {
  const examples = [
    '<script>alert(1)</script>',
    '<img src=x onerror=alert(1)>',
    '<svg onload=alert(1)></svg>',
    '<iframe src="https://example.com"></iframe>',
    'Before <b onclick="alert(1)">text</b> after',
  ];
  for (const source of examples) {
    const { code } = await renderer.render(source);
    assert.doesNotMatch(code, /<(?:script|img|svg|iframe|b)\b/i, source);
    assert.match(code, /&lt;/, source);
  }
});

test('unsafe Markdown links do not produce active destinations', async () => {
  const examples = [
    '[link](javascript:alert%281%29)',
    '[link](JaVaScRiPt:alert%281%29)',
    '[link](jav&#x61;script:alert%281%29)',
    '[link](vbscript:msgbox%281%29)',
    '[link](data:text/html;base64,PHNjcmlwdD4=)',
  ];
  for (const source of examples) {
    await assert.rejects(
      () => renderer.render(source),
      /Unsupported URL scheme in Markdown/,
      source,
    );
  }
});

test('ordinary documentation links and formatting still render', async () => {
  const { code } = await renderer.render(
    '**Important** [Install](/installation/) [GitHub](https://github.com/sunbrolynk)'
  );
  assert.match(code, /<strong>Important<\/strong>/);
  assert.match(code, /href="\/installation\/"/);
  assert.match(code, /href="https:\/\/github\.com\/sunbrolynk"/);
});

test('rejects unsafe reference links and images', async () => {
  const examples = [
    '[link][bad]\n\n[bad]: javascript:alert%281%29',
    '![image](javascript:alert%281%29)',
    '![image][bad]\n\n[bad]: data:text/html;base64,PHNjcmlwdD4=',
    '[link](java&#x09;script:alert%281%29)',
    '[link](java&#x0A;script:alert%281%29)',
    '[link](javascript&#58;alert%281%29)',
    '[link](file:///etc/passwd)',
  ];
  for (const source of examples) {
    await assert.rejects(
      () => renderer.render(source),
      /Unsupported URL scheme in Markdown/,
      source,
    );
  }
});

test('preserves relative, anchor, email, and reference links', async () => {
  const { code } = await renderer.render(
    '[Relative](../faq/) [Anchor](#install) ' +
    '[Email](mailto:translate@audiobookmanager.com)\n\n' +
    '[Reference][guide]\n\n[guide]: /installation/'
  );
  assert.match(code, /href="\.\.\/faq\/"/);
  assert.match(code, /href="#install"/);
  assert.match(code, /href="mailto:translate@audiobookmanager\.com"/);
  assert.match(code, /href="\/installation\/"/);
});
