import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectHtml } from '../scripts/lib-html.mjs';

test('reads quoted and unquoted attributes and decodes entities', () => {
  const result = inspectHtml(`
    <h2 id="a&amp;b">Heading</h2>
    <a href='/faq/?a=1&amp;b=2#answer'>FAQ</a>
    <a href=/installation/>Install</a>
    <a name=legacy>Legacy anchor</a>
  `);
  assert.ok(result.ids.has('a&b'));
  assert.ok(result.ids.has('legacy'));
  assert.deepEqual(result.links.map((link) => link.href), [
    '/faq/?a=1&b=2#answer',
    '/installation/',
  ]);
});

test('distinguishes inline scripts from external scripts', () => {
  const result = inspectHtml(`
    <SCRIPT>const value = "<tag>&amp;";</SCRIPT>
    <script src = "/app.js">ignored</script>
    <script src="">also ignored</script>
  `);
  assert.deepEqual(result.scripts, ['const value = "<tag>&amp;";']);
});

test('preserves style text and decodes style attributes', () => {
  const result = inspectHtml(`
    <style>.example::before { content: "&amp;"; }</style>
    <div style='content: &quot;a&amp;b&quot;'></div>
  `);
  assert.deepEqual(result.styles, [
    '.example::before { content: "&amp;"; }',
  ]);
  assert.deepEqual(result.styleAttributes, ['content: "a&b"']);
});

test('does not mistake comments or escaped examples for active elements', () => {
  const result = inspectHtml(`
    <!-- <script>bad()</script><a href="/missing/"> -->
    <pre>&lt;script&gt;example()&lt;/script&gt;</pre>
  `);
  assert.deepEqual(result.scripts, []);
  assert.deepEqual(result.links, []);
});

test('uses the first base href and inspects template contents', () => {
  const result = inspectHtml(`
    <base href="/docs/">
    <base href="/ignored/">
    <template><a href="guide/">Guide</a></template>
  `);
  assert.equal(result.baseHref, '/docs/');
  assert.deepEqual(result.links, [{ tag: 'a', href: 'guide/' }]);
});
