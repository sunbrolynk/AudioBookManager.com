import test from 'node:test';
import assert from 'node:assert/strict';
import { translationHtml } from '../src/lib/translation-html.mjs';

test('preserves supported formatting and multilingual text', () => {
  const examples = [
    'Plain text & punctuation.',
    '<b>Important</b><br>Next line',
    '<em>Українська 日本語 العربية</em>',
    '<code>docker compose up -d</code>',
    '<b>Nested <em>emphasis</em></b>',
    'Line<br/>break<br />again',
    '&lt;script&gt;shown as text&lt;/script&gt;',
    '&amp; &#60; &#x3c; &quot;',
  ];
  for (const value of examples) {
    assert.equal(translationHtml(value), value);
  }
});

test('rejects executable markup and attributes', () => {
  const attacks = [
    '<script>alert(1)</script>',
    '<img src=x onerror=alert(1)>',
    '<svg onload=alert(1)>',
    '<iframe srcdoc="<script>alert(1)</script>"></iframe>',
    '<a href="javascript:alert(1)">Click</a>',
    '<b onclick="alert(1)">Click</b>',
    '<em style="background:url(https://example.com)">Text</em>',
    '<code id="main">Text</code>',
    '<br onmouseover=alert(1)>',
    '<br/onclick=alert(1)>',
    '<script src="/malicious.js"></script>',
    '<!-- hidden markup -->',
    '<!DOCTYPE html>',
    '<?processing instruction?>',
    '</p><script>alert(1)</script>',
    '<b\x00 onclick=alert(1)>Text</b>',
  ];
  for (const value of attacks) {
    assert.throws(() => translationHtml(value), undefined, value);
  }
});

test('rejects malformed and unbalanced formatting', () => {
  for (const value of [
    '<b>Unclosed',
    '</b>',
    '<b><em>Wrong order</b></em>',
    '<br></br>',
    '<b',
    '<',
    'Text < unfinished',
    '<b>Text</b><',
  ]) {
    assert.throws(() => translationHtml(value), undefined, value);
  }
});

test('rejects non-string input', () => {
  for (const value of [null, undefined, 42, {}, [], true]) {
    assert.throws(() => translationHtml(value), TypeError);
  }
});
