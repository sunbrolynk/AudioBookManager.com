import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import {
  mkdtempSync, mkdirSync, writeFileSync, readFileSync, copyFileSync, rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const hash = (value) =>
  `'sha256-${createHash('sha256').update(value, 'utf8').digest('base64')}'`;

function fixture(t, html, headers) {
  const root = mkdtempSync(join(tmpdir(), 'abm-csp-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'scripts'));
  mkdirSync(join(root, 'dist'));

  copyFileSync(
    new URL('../scripts/csp.mjs', import.meta.url),
    join(root, 'scripts/csp.mjs'),
  );
  // Use the real shared parser without copying its dependency tree.
  const helper = new URL('../scripts/lib-html.mjs', import.meta.url).href;
  writeFileSync(
    join(root, 'scripts/lib-html.mjs'),
    `export { inspectHtml } from ${JSON.stringify(helper)};\n`,
  );
  writeFileSync(join(root, 'dist/index.html'), html);
  writeFileSync(join(root, 'dist/_headers'), headers);

  const result = spawnSync(
    process.execPath,
    [join(root, 'scripts/csp.mjs')],
    { encoding: 'utf8', timeout: 10000 },
  );
  assert.ifError(result.error);
  assert.equal(result.signal, null);
  return {
    ...result,
    headers: readFileSync(join(root, 'dist/_headers'), 'utf8'),
  };
}

const template = `/*
  Content-Security-Policy: script-src 'self' __SCRIPT_HASHES__; style-src 'self' 'unsafe-hashes' __STYLE_HASHES__
`;

test('CSP command hashes parsed inline content exactly and deduplicates it', (t) => {
  const script = 'const value = "&amp;";';
  const style = '.x { color: red; }';
  const attribute = 'content: "a&b"';
  const result = fixture(t, `
    <script>${script}</script>
    <script>${script}</script>
    <script src="/external.js">not inline</script>
    <style>${style}</style>
    <div style='content: &quot;a&amp;b&quot;'></div>
  `, template);

  assert.equal(result.status, 0, result.stderr);
  for (const value of [script, style, attribute]) {
    assert.ok(result.headers.includes(hash(value)));
  }
  assert.equal(result.headers.split(hash(script)).length - 1, 1);
  assert.ok(!result.headers.includes(hash('not inline')));
  assert.ok(!result.headers.includes('__SCRIPT_HASHES__'));
  assert.ok(!result.headers.includes('__STYLE_HASHES__'));
});

test('CSP command fails without writing when a placeholder remains', (t) => {
  const original = template + '  Other: __UNKNOWN__\n';
  const result = fixture(t, '<p>Hello</p>', original);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /placeholder/);
  assert.equal(result.headers, original);
});

test('CSP command fails without writing an oversized header', (t) => {
  const original = template + `  Oversized: ${'x'.repeat(2001)}\n`;
  const result = fixture(t, '<p>Hello</p>', original);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /2,000/);
  assert.equal(result.headers, original);
});

test('CSP command rejects missing or duplicated required placeholders', (t) => {
  for (const original of [
    template.replace('__SCRIPT_HASHES__', ''),
    template.replace('__STYLE_HASHES__', ''),
    template.replace('__SCRIPT_HASHES__', '__SCRIPT_HASHES__ __SCRIPT_HASHES__'),
    template.replace('__STYLE_HASHES__', '__STYLE_HASHES__ __STYLE_HASHES__'),
  ]) {
    const result = fixture(t, '<p>Hello</p>', original);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /Expected exactly one/);
    assert.equal(result.headers, original);
  }
});
