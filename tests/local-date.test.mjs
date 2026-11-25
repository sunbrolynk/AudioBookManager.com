import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { test } from 'node:test';
import { localDay } from '../src/lib/local-date.mjs';

const late = '2026-11-19T02:30:00Z';

test('a release published late in the evening in Denver shows that evening\'s day there', () => {
  assert.equal(localDay(late, 'America/Denver'), '2026-11-18');
  assert.equal(localDay(late, 'UTC'), '2026-11-19');
});

test('with no zone given it uses the local one', () => {
  const day = (TZ) => execFileSync('node', ['--input-type=module', '-e',
    `import { localDay } from ${JSON.stringify(new URL('../src/lib/local-date.mjs', import.meta.url).href)}; process.stdout.write(localDay('${late}'));`],
  { env: { ...process.env, TZ }, encoding: 'utf8' });
  assert.equal(day('America/Denver'), '2026-11-18');
  assert.equal(day('UTC'), '2026-11-19');
});

test('a bare day is a calendar day and is never shifted', () => {
  assert.equal(localDay('2026-11-19', 'America/Denver'), '2026-11-19');
});
