import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const page = new URL('../dist/updates/index.html', import.meta.url);
const versions = readdirSync(new URL('../src/content/releases/', import.meta.url)).map((f) => f.replace(/\.md$/, ''));

test('every release on the built Updates page answers to both #v0.26.1 and #v0-26-1', { skip: !existsSync(page) && 'run npm run build first' }, () => {
  const ids = new Set([...readFileSync(page, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  assert.ok(versions.includes('0.26.1'));
  for (const v of versions) {
    assert.ok(ids.has(`v${v}`), `no #v${v}`);
    assert.ok(ids.has(`v${v.replaceAll('.', '-')}`), `no #v${v.replaceAll('.', '-')}`);
  }
});
