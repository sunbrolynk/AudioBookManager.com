import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { chmodSync, cpSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

// Hooks export GIT_DIR and friends; left in, every git call below would act on this repo instead.
const cleanEnv = Object.fromEntries(Object.entries(process.env).filter(([k]) => !k.startsWith('GIT_')));

// A fake gh answers from state.json and logs every call, so the script runs against a local bare remote.
const fakeGh = `#!/usr/bin/env node
const fs = require('node:fs');
const dir = process.env.FAKE_DIR;
const a = process.argv.slice(2);
fs.appendFileSync(dir + '/calls.log', JSON.stringify(a) + '\\n');
const st = JSON.parse(fs.readFileSync(dir + '/state.json', 'utf8'));
const opt = (k) => a[a.indexOf(k) + 1];
const out = (s) => s && process.stdout.write(s + '\\n');
if (a[0] === 'api') {
  const p = a[1];
  if (p.includes('/releases?')) out(st.tags.join('\\n'));
  else if (p.includes('/contents/CHANGELOG.md')) out(st.tags.map((t) => '## [' + t.slice(1) + ']\\n\\n- ' + t + ' notes\\n').join('\\n'));
  else if (p.includes('/releases/tags/')) out('2026-11-18');
  else if (p.endsWith('/status')) out(st.status);
} else if (a[0] === 'pr' && a[1] === 'list') {
  if (a.includes('--base')) out(st.open.filter((p) => p.base === opt('--base')).map((p) => p.head).join('\\n'));
  else {
    const all = opt('--state') === 'all';
    const hit = st.open.find((p) => p.head === opt('--head')) ?? (all && st.closed.includes(opt('--head')) ? { number: 1 } : null);
    out(hit ? String(hit.number) : '');
  }
} else if (a[0] === 'pr' && a[1] === 'create') out('https://example.test/pull/99');
`;

function setup({ dev, main, tags, open = [], closed = [], status = '' }) {
  const root = mkdtempSync(join(tmpdir(), 'sync-releases-'));
  const git = (cwd, ...args) => execFileSync('git', ['-C', cwd, ...args], { env: cleanEnv, encoding: 'utf8', stdio: 'pipe' }).trim();
  const remote = join(root, 'remote.git');
  const work = join(root, 'work');
  git(root, 'init', '-q', '--bare', remote);
  git(root, 'clone', '-q', remote, work);
  git(work, 'config', 'user.email', 't@example.com');
  git(work, 'config', 'user.name', 't');
  mkdirSync(join(work, 'scripts'));
  mkdirSync(join(work, 'public'));
  mkdirSync(join(work, 'src/content/releases'), { recursive: true });
  for (const f of ['sync-releases.sh', 'build-releases.mjs']) cpSync(new URL(`../scripts/${f}`, import.meta.url), join(work, 'scripts', f));
  const publish = (versions) => {
    writeFileSync(join(work, 'public/releases.json'), JSON.stringify(versions.map((version) => ({ version })), null, 2) + '\n');
    for (const v of versions) writeFileSync(join(work, `src/content/releases/${v}.md`), `${v}\n`);
    git(work, 'add', '-A');
    git(work, 'commit', '-q', '--allow-empty', '-m', `releases up to ${versions.at(-1)}`);
  };
  git(work, 'commit', '-q', '--allow-empty', '-m', 'start');
  publish(main);
  git(work, 'push', '-q', 'origin', 'HEAD:main');
  publish(dev);
  git(work, 'push', '-q', 'origin', 'HEAD:dev');
  for (const p of open) {
    git(work, 'switch', '-q', '--detach', p.at ?? 'origin/main');
    writeFileSync(join(work, 'stale.txt'), p.head);
    git(work, 'add', '-A');
    git(work, 'commit', '-q', '-m', 'old release PR');
    git(work, 'push', '-q', 'origin', `HEAD:refs/heads/${p.head}`);
  }
  git(work, 'switch', '-q', '--detach', 'origin/dev');
  const fake = join(root, 'fake');
  mkdirSync(fake);
  writeFileSync(join(fake, 'gh'), fakeGh);
  chmodSync(join(fake, 'gh'), 0o755);
  writeFileSync(join(fake, 'state.json'), JSON.stringify({ tags, open, closed, status }));
  writeFileSync(join(fake, 'calls.log'), '');
  return { work, remote, fake, git };
}

function run(env) {
  const r = spawnSync('bash', ['scripts/sync-releases.sh'], {
    cwd: env.work,
    encoding: 'utf8',
    env: { ...cleanEnv, PATH: `${env.fake}:${process.env.PATH}`, FAKE_DIR: env.fake, RUNNER_TEMP: env.fake, ABM_REPO: 'o/abm', ABM_TOKEN: '', GH_TOKEN: 'x' },
  });
  assert.equal(r.status, 0, r.stdout + r.stderr);
  return readFileSync(join(env.fake, 'calls.log'), 'utf8').trim().split('\n').filter(Boolean).map((l) => JSON.parse(l));
}
const has = (calls, ...prefix) => calls.some((c) => prefix.every((p, i) => c[i] === p));
const files = (env, ref) => env.git(env.remote, 'ls-tree', '--name-only', ref, 'src/content/releases/').split('\n').map((f) => f.split('/').pop());

test('main gets a release dev already has, and the new PR closes the older one', () => {
  const env = setup({
    dev: ['0.20.0', '0.25.0', '0.26.0'],
    main: ['0.20.0'],
    tags: ['v0.25.0', 'v0.26.0'],
    open: [{ base: 'main', head: 'releases/main/v0.25.0', number: 221 }],
  });
  const calls = run(env);
  assert.ok(has(calls, 'pr', 'close', 'releases/main/v0.25.0'), 'the older main PR stays open');
  assert.ok(calls.find((c) => c[1] === 'close').includes('--delete-branch'));
  assert.ok(has(calls, 'pr', 'create', '--base', 'main', '--head', 'releases/main/v0.26.0'));
  assert.ok(!calls.some((c) => c[1] === 'create' && c.includes('dev')), 'dev already has 0.26.0');
  assert.deepEqual(files(env, 'releases/main/v0.26.0'), ['0.20.0.md', '0.25.0.md', '0.26.0.md']);
  assert.ok(has(calls, 'workflow', 'run', 'site-checks.yml', '--ref', 'releases/main/v0.26.0'));
  assert.ok(has(calls, 'pr', 'merge', 'https://example.test/pull/99', '--squash', '--auto'));
});

test('a base that already has every release has its leftover release PRs closed', () => {
  const env = setup({
    dev: ['0.26.0'],
    main: ['0.26.0'],
    tags: ['v0.25.0', 'v0.26.0'],
    open: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230 }],
  });
  const calls = run(env);
  assert.ok(has(calls, 'pr', 'close', 'releases/main/v0.26.0'));
  assert.ok(!calls.some((c) => c[1] === 'create' || c[0] === 'workflow'));
});

test('an open PR left behind its base is rebuilt on the new base and checked again', () => {
  const env = setup({
    dev: ['0.25.0', '0.26.0'],
    main: ['0.25.0'],
    tags: ['v0.25.0', 'v0.26.0'],
    // Opened on an older main, so the current main is not in its history.
    open: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230, at: 'origin/main~1' }],
  });
  const calls = run(env);
  assert.ok(!calls.some((c) => c[1] === 'close' || c[1] === 'create'));
  env.git(env.remote, 'merge-base', '--is-ancestor', 'main', 'releases/main/v0.26.0');
  assert.deepEqual(files(env, 'releases/main/v0.26.0'), ['0.25.0.md', '0.26.0.md']);
  assert.ok(has(calls, 'pr', 'edit', '230', '--title', 'add 0.26.0 to the updates page'));
  assert.ok(has(calls, 'workflow', 'run', 'site-checks.yml', '--ref', 'releases/main/v0.26.0'));
});

test('an up-to-date PR whose checks already passed is left to merge itself', () => {
  const env = setup({
    dev: ['0.26.0'],
    main: ['0.25.0'],
    tags: ['v0.25.0', 'v0.26.0'],
    open: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230 }],
    status: 'success',
  });
  const calls = run(env);
  assert.ok(!calls.some((c) => c[0] === 'workflow' || c[1] === 'edit' || c[1] === 'create'));
  assert.ok(has(calls, 'pr', 'merge', '230', '--squash', '--auto'));
});

test('a release PR that was closed by hand is not opened again', () => {
  const env = setup({ dev: ['0.26.0'], main: ['0.25.0'], tags: ['v0.25.0', 'v0.26.0'], closed: ['releases/main/v0.26.0'] });
  const calls = run(env);
  assert.ok(!calls.some((c) => c[1] === 'create' || c[0] === 'workflow' || c[1] === 'merge'));
});
