import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { chmodSync, copyFileSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const script = new URL('../scripts/check-secrets.sh', import.meta.url).pathname;
// Built at runtime so this file never holds a token-shaped string itself.
const { GIT_INDEX_FILE: _ignored, ...cleanEnv } = process.env;
const token = () => 'ghp_' + 'Ab1Cd2Ef3Gh4Ij5Kl6Mn7Op8Qr9St0Uv1Wx2';

test('a staged scan reads the index git hands the hook, as git commit -a does', () => {
  const repo = mkdtempSync(join(tmpdir(), 'check-secrets-'));
  // The scanner runs as another user in its container, so it needs to be able to read the repo.
  chmodSync(repo, 0o755);
  const git = (...args) => execFileSync('git', ['-C', repo, ...args], { env: cleanEnv });
  git('init', '-q');
  git('config', 'user.email', 't@example.com');
  git('config', 'user.name', 't');
  mkdirSync(join(repo, 'scripts'));
  copyFileSync(script, join(repo, 'scripts/check-secrets.sh'));
  writeFileSync(join(repo, 'notes.txt'), 'nothing here\n');
  git('add', '.');
  git('commit', '-q', '-m', 'clean');

  // git commit -a stages tracked edits into a separate index and points GIT_INDEX_FILE at it.
  writeFileSync(join(repo, 'notes.txt'), `token = ${token()}\n`);
  const index = join(repo, '.git', 'index.commit-a');
  execFileSync('cp', [join(repo, '.git', 'index'), index]);
  execFileSync('git', ['-C', repo, 'add', 'notes.txt'], { env: { ...cleanEnv, GIT_INDEX_FILE: index } });

  const clean = spawnSync('bash', [join(repo, 'scripts/check-secrets.sh'), '--staged'], { cwd: repo, env: { ...cleanEnv, GIT_INDEX_FILE: '.git/index' }, encoding: 'utf8' });
  assert.equal(clean.status, 0, `the scan should read the repo and pass the normal index:\n${clean.stdout}${clean.stderr}`);
  const run = spawnSync('bash', [join(repo, 'scripts/check-secrets.sh'), '--staged'], { cwd: repo, env: { ...cleanEnv, GIT_INDEX_FILE: index }, encoding: 'utf8' });
  assert.notEqual(run.status, 0, `the secret in the commit's index passed the scan:\n${run.stdout}${run.stderr}`);
  assert.match(run.stdout + run.stderr, /leaks found: 1/, 'the scan must fail on the leak, not on an error');
});
