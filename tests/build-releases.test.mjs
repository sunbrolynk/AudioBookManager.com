import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

// The script writes next to itself, so it runs from a throwaway copy of the site layout.
const site = mkdtempSync(join(tmpdir(), 'releases-'));
mkdirSync(join(site, 'scripts'));
mkdirSync(join(site, 'public'));
cpSync(new URL('../scripts/build-releases.mjs', import.meta.url), join(site, 'scripts/build-releases.mjs'));
const changelog = join(site, 'CHANGELOG.md');
writeFileSync(changelog, '# Changelog\n\n## [0.2.0]\n\n### Added\n\n- new thing\n\n## [0.1.0] - 2026-01-02\n\n### Added\n\n- first\n');
const run = (...a) => execFileSync('node', [join(site, 'scripts/build-releases.mjs'), changelog, ...a], { stdio: 'pipe' });
const json = () => JSON.parse(readFileSync(join(site, 'public/releases.json'), 'utf8'));

test('--keep adds a release without dropping the ones already published', () => {
  run('v0.1.0');
  run('v0.2.0', '--keep', '--date', '2026-02-03');
  assert.deepEqual(json().map((r) => [r.version, r.date]), [['0.2.0', '2026-02-03'], ['0.1.0', '2026-01-02']]);
  assert.ok(existsSync(join(site, 'src/content/releases/0.1.0.md')));
  assert.ok(existsSync(join(site, 'src/content/releases/0.2.0.md')));
});

test('without --keep the published list is replaced', () => {
  run('v0.2.0', '--date', '2026-02-03');
  assert.deepEqual(json().map((r) => r.version), ['0.2.0']);
  assert.equal(existsSync(join(site, 'src/content/releases/0.1.0.md')), false);
});
