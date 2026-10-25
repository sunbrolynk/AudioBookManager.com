import { test } from 'node:test';
import assert from 'node:assert/strict';
import { advisories, newAdvisories } from '../scripts/audit-new-advisories.mjs';

const report = (...pairs) => ({
  vulnerabilities: Object.fromEntries(pairs.map(([name, id, severity = 'high']) => [name, { via: [{ severity, url: `https://github.com/advisories/${id}` }, 'other-package'] }])),
});

test('an advisory already on the base does not count as new', () => {
  const base = report(['undici', 'GHSA-aaaa']);
  assert.deepEqual(newAdvisories(report(['undici', 'GHSA-aaaa']), base), []);
});

test('a new advisory on a new or an existing package is reported', () => {
  const base = report(['undici', 'GHSA-aaaa']);
  assert.deepEqual(newAdvisories(report(['undici', 'GHSA-aaaa'], ['left-pad', 'GHSA-bbbb']), base), ['left-pad GHSA-bbbb']);
  const worse = { vulnerabilities: { undici: { via: [{ severity: 'high', url: 'https://github.com/advisories/GHSA-aaaa' }, { severity: 'high', url: 'https://github.com/advisories/GHSA-cccc' }] } } };
  assert.deepEqual(newAdvisories(worse, base), ['undici GHSA-cccc']);
});

test('low advisories are ignored, as the old moderate threshold did', () => {
  assert.deepEqual([...advisories(report(['x', 'GHSA-low', 'low']))], []);
});

test('an npm audit error fails instead of passing as clean', () => {
  assert.throws(() => advisories({ error: { code: 'ENOAUDIT', summary: 'offline' } }), /npm audit failed/);
});
