import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { chmodSync, cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, test } from 'node:test';

// Hooks export GIT_DIR and friends; left in, every git call below would act on this repo instead.
const cleanEnv = Object.fromEntries(Object.entries(process.env).filter(([k]) => !k.startsWith('GIT_')));

// A fake gh holds the API's JSON, runs the script's --jq through real jq and logs every call,
// so the script's filters are tested against a local bare remote.
const jq = spawnSync('jq', ['--version'], { stdio: 'ignore' }).status === 0;
const skip = !jq && process.env.GITHUB_ACTIONS !== 'true' && 'jq is not available on this host';
const fakeGh = `#!/usr/bin/env node
const fs = require('node:fs');
const { spawnSync } = require('node:child_process');
const dir = process.env.FAKE_DIR;
const a = process.argv.slice(2);
fs.appendFileSync(dir + '/calls.log', JSON.stringify(a) + '\\n');
const st = JSON.parse(fs.readFileSync(dir + '/state.json', 'utf8'));
const opt = (k) => (a.includes(k) ? a[a.indexOf(k) + 1] : undefined);
const reply = (data) => {
  if (!opt('--jq')) return process.stdout.write(typeof data === 'string' ? data : JSON.stringify(data));
  const r = spawnSync('jq', ['-r', opt('--jq')], { input: JSON.stringify(data), encoding: 'utf8' });
  process.stdout.write(r.stdout);
  process.exit(r.status);
};
const fail = () => { process.stderr.write('HTTP 502: Bad Gateway\\n'); process.exit(1); };
if (a[0] === 'api') {
  const p = a[1];
  if (p.includes('/releases?')) {
    if (st.releasesFail) { process.stderr.write('HTTP 401: Bad credentials\\n'); process.exit(1); }
    reply([...st.tags.map((tag_name) => ({ tag_name, draft: false, prerelease: false })), ...st.unpublished]);
  } else if (p.includes('/contents/CHANGELOG.md')) reply(st.tags.map((t) => '## [' + t.slice(1) + ']\\n\\n- ' + t + ' ' + (st.notes ?? 'notes') + '\\n').join('\\n'));
  else if (p.includes('/releases/tags/')) st.fail === 'date' ? fail() : reply({ published_at: st.published[p.split('/').at(-1)] ?? st.published });
  else if (p.endsWith('/status')) {
    const sha = p.split('/').at(-2);
    reply({ statuses: st.green.includes(sha) ? [{ context: 'Site validation', state: 'success' }] : [] });
  }
} else if (a[0] === 'pr' && a[1] === 'list') {
  const state = opt('--state');
  if (state === 'all' && st.fail === 'history') fail();
  reply(st.prs
    .filter((p) => (!opt('--base') || p.base === opt('--base')) && (!opt('--head') || p.head === opt('--head')) && (state === 'all' || p.state === 'OPEN'))
    .map((p) => ({ number: p.number, headRefName: p.head, state: p.state, isCrossRepository: !!p.fork,
      author: { login: p.author ?? 'app/github-actions' }, comments: p.comments ?? [] })));
} else if (a[0] === 'pr' && a[1] === 'create') {
  st.created = { base: opt('--base'), head: opt('--head') };
  fs.writeFileSync(dir + '/state.json', JSON.stringify(st));
  reply('https://example.test/pull/99\\n');
} else if (a[0] === 'pr' && a[1] === 'merge') {
  // A merge into a base listed in merges lands at once; any other waits on checks, as main does.
  const pr = a[2].startsWith('https:') ? st.created : st.prs.find((p) => String(p.number) === a[2]);
  if (pr && st.merges.includes(pr.base)) spawnSync('git', ['--git-dir', process.env.FAKE_REMOTE, 'update-ref', 'refs/heads/' + pr.base, 'refs/heads/' + pr.head]);
}
`;

const roots = [];
after(() => roots.forEach((r) => rmSync(r, { recursive: true, force: true })));

// prs: { number, base, head, state = 'OPEN', fork, author, comments, at = where its branch starts }.
// published is when every release came out, or a map of tag to time; an hour ago keeps it inside the stale grace period.
// merges lists the bases where a merge call lands at once.
const hourAgo = new Date(Date.now() - 3600e3).toISOString().replace(/\.\d+Z$/, 'Z');
function setup({ main, tags, unpublished = [], published = hourAgo, merges = [], prs = [], green = [], releasesFail = false, fail = '' }) {
  const root = mkdtempSync(join(tmpdir(), 'sync-releases-'));
  roots.push(root);
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
  const shas = {};
  // A fork PR's branch lives in the fork, so only this repo's open PRs get a branch here.
  for (const p of prs.filter((p) => !p.fork && (p.state ?? 'OPEN') === 'OPEN')) {
    git(work, 'switch', '-q', '--detach', p.at ?? 'origin/main');
    writeFileSync(join(work, 'stale.txt'), p.head);
    git(work, 'add', '-A');
    git(work, 'commit', '-q', '-m', 'old release PR');
    git(work, 'push', '-q', 'origin', `HEAD:refs/heads/${p.head}`);
    shas[p.head] = git(work, 'rev-parse', 'HEAD');
  }
  git(work, 'switch', '-q', '--detach', 'origin/main');
  const fake = join(root, 'fake');
  mkdirSync(fake);
  writeFileSync(join(fake, 'gh'), fakeGh);
  chmodSync(join(fake, 'gh'), 0o755);
  const state = { tags, unpublished, published, merges, releasesFail, fail, prs: prs.map((p) => ({ state: 'OPEN', ...p })), green: green.map((h) => shas[h]) };
  writeFileSync(join(fake, 'state.json'), JSON.stringify(state));
  writeFileSync(join(fake, 'calls.log'), '');
  return { work, remote, fake, git };
}

function run(env, expectStatus = 0, out = {}) {
  const r = spawnSync('bash', ['scripts/sync-releases.sh'], {
    cwd: env.work,
    encoding: 'utf8',
    env: { ...cleanEnv, PATH: `${env.fake}:${process.env.PATH}`, FAKE_DIR: env.fake, FAKE_REMOTE: env.remote, RUNNER_TEMP: env.fake, ABM_REPO: 'o/abm', ABM_TOKEN: '', GH_TOKEN: 'x' },
  });
  if (expectStatus === 0) assert.equal(r.status, 0, r.stdout + r.stderr);
  else assert.notEqual(r.status, 0, r.stdout + r.stderr);
  out.text = r.stdout + r.stderr;
  return readFileSync(join(env.fake, 'calls.log'), 'utf8').trim().split('\n').filter(Boolean).map((l) => JSON.parse(l));
}
const has = (calls, ...prefix) => calls.some((c) => prefix.every((p, i) => c[i] === p));
const files = (env, ref) => env.git(env.remote, 'ls-tree', '--name-only', ref, 'src/content/releases/').split('\n').map((f) => f.split('/').pop());

test('main gets a new release, and the new PR closes the older one', { skip }, () => {
  const env = setup({
    main: ['0.20.0'],
    tags: ['v0.25.0', 'v0.26.0'],
    prs: [{ base: 'main', head: 'releases/main/v0.25.0', number: 221 }],
  });
  const calls = run(env);
  assert.ok(has(calls, 'pr', 'close', '221'), 'the older main PR stays open');
  assert.deepEqual(calls.find((c) => c[1] === 'close'), ['pr', 'close', '221', '--delete-branch', '--comment', 'Closing this one: the pull request for 0.26.0 includes these releases.']);
  assert.ok(has(calls, 'pr', 'create', '--base', 'main', '--head', 'releases/main/v0.26.0'));
  assert.ok(calls.filter((c) => c[1] === 'create').every((c) => c.includes('main')), 'every PR goes into main');
  assert.deepEqual(files(env, 'releases/main/v0.26.0'), ['0.20.0.md', '0.25.0.md', '0.26.0.md']);
  assert.match(env.git(env.remote, 'show', 'releases/main/v0.26.0:src/content/releases/0.26.0.md'), new RegExp(`^date: '${hourAgo}'$`, 'm'), 'the release keeps its full published time');
  assert.ok(has(calls, 'workflow', 'run', 'site-checks.yml', '--ref', 'releases/main/v0.26.0'));
  assert.ok(has(calls, 'pr', 'merge', 'https://example.test/pull/99', '--squash', '--auto'));
});

test('a base that already has every release has its leftover release PRs closed', { skip }, () => {
  const env = setup({
    main: ['0.25.0', '0.26.0'],
    tags: ['v0.25.0', 'v0.26.0'],
    prs: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230 }],
  });
  const calls = run(env);
  assert.ok(has(calls, 'pr', 'close', '230', '--delete-branch', '--comment', 'Closing this one: main already has these releases.'));
  assert.ok(!calls.some((c) => c[1] === 'create' || c[0] === 'workflow'));
});

test('an open PR left behind its base is rebuilt on the new base and checked again', { skip }, () => {
  const env = setup({
    main: ['0.25.0'],
    tags: ['v0.25.0', 'v0.26.0'],
    // Opened on an older main, so the current main is not in its history.
    prs: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230, at: 'origin/main~1' }],
  });
  const calls = run(env);
  assert.ok(!calls.some((c) => c[1] === 'close' || c[1] === 'create'));
  env.git(env.remote, 'merge-base', '--is-ancestor', 'main', 'releases/main/v0.26.0');
  assert.deepEqual(files(env, 'releases/main/v0.26.0'), ['0.25.0.md', '0.26.0.md']);
  assert.ok(has(calls, 'pr', 'edit', '230', '--title', 'add 0.26.0 to the updates page'));
  assert.ok(has(calls, 'workflow', 'run', 'site-checks.yml', '--ref', 'releases/main/v0.26.0'));
});

test('a release PR that was closed by hand is not opened again', { skip }, () => {
  const env = setup({ main: ['0.25.0'], tags: ['v0.25.0', 'v0.26.0'], prs: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230, state: 'CLOSED' }] });
  const calls = run(env);
  assert.ok(!calls.some((c) => c[1] === 'create' || c[0] === 'workflow' || c[1] === 'merge'));
});

test('a release PR the script closed itself is opened again', { skip }, () => {
  const bot = { author: { login: 'github-actions' }, body: 'Closing this one: main already has these releases.' };
  const env = setup({ main: ['0.25.0'], tags: ['v0.25.0', 'v0.26.0'], prs: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230, state: 'CLOSED', comments: [bot] }] });
  const calls = run(env);
  assert.ok(has(calls, 'pr', 'create', '--base', 'main', '--head', 'releases/main/v0.26.0'));
});

test('a fork PR with a release branch name is never edited, merged or closed', { skip }, () => {
  const fork = { base: 'main', head: 'releases/main/v0.26.0', number: 666, fork: true, author: 'someone' };
  const env = setup({ main: ['0.25.0'], tags: ['v0.25.0', 'v0.26.0'], prs: [fork, { ...fork, head: 'releases/main/v0.25.0', number: 667 }] });
  const calls = run(env);
  assert.ok(!calls.some((c) => c.includes('666') || c.includes('667')), JSON.stringify(calls));
  assert.ok(has(calls, 'pr', 'create', '--base', 'main', '--head', 'releases/main/v0.26.0'), 'the release still gets its own PR');
  assert.ok(has(calls, 'pr', 'merge', 'https://example.test/pull/99', '--squash', '--auto'));
});

test('a failed ABM release lookup stops the run before any PR is touched', { skip }, () => {
  const env = setup({ main: ['0.25.0'], tags: ['v0.26.0'], prs: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230 }], releasesFail: true });
  const calls = run(env, 1);
  assert.ok(!calls.some((c) => c[0] === 'pr' || c[0] === 'workflow'), JSON.stringify(calls));
});

test('a release lookup with no valid tags stops the run before any PR is touched', { skip }, () => {
  const env = setup({ main: ['0.25.0'], tags: ['nightly'], prs: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230 }] });
  const calls = run(env, 1);
  assert.ok(!calls.some((c) => c[0] === 'pr' || c[0] === 'workflow'), JSON.stringify(calls));
});

for (const [fail, what] of [['history', 'closed-PR lookup'], ['date', 'release date read']]) {
  test(`a failed ${what} stops the run before anything is pushed, opened or closed`, { skip }, () => {
    const env = setup({
      main: ['0.20.0'],
      tags: ['v0.25.0', 'v0.26.0'],
      prs: [{ base: 'main', head: 'releases/main/v0.25.0', number: 221 }],
      fail,
    });
    const calls = run(env, 1);
    assert.ok(!calls.some((c) => ['create', 'close', 'edit', 'merge'].includes(c[1]) || c[0] === 'workflow'), JSON.stringify(calls));
    assert.equal(env.git(env.remote, 'branch', '--list', 'releases/main/v0.26.0'), '', 'the new release branch was pushed');
  });
}

test('a draft or prerelease is never added, so a base with every published release gets no PR', { skip }, () => {
  const env = setup({
    main: ['0.26.0'],
    tags: ['v0.26.0'],
    unpublished: [{ tag_name: 'v0.27.0', draft: true, prerelease: false }, { tag_name: 'v0.28.0', draft: false, prerelease: true }],
  });
  const calls = run(env);
  assert.ok(!calls.some((c) => ['create', 'merge', 'edit'].includes(c[1]) || c[0] === 'workflow'), JSON.stringify(calls));
});

test('a release missing for over a day still gets its PR, then fails the run naming the base', { skip }, () => {
  const env = setup({ main: ['0.25.0'], tags: ['v0.25.0', 'v0.26.0'], published: '2026-11-19T02:30:00Z' });
  const out = {};
  const calls = run(env, 1, out);
  assert.ok(has(calls, 'pr', 'create', '--base', 'main', '--head', 'releases/main/v0.26.0'), 'the PR work still runs first');
  assert.match(out.text, /::error::main is missing 0\.26\.0, which came out at 2026-11-19T02:30:00Z/);
});

test('a release PR closed by hand fails the run once the release is over a day old', { skip }, () => {
  const env = setup({
    main: ['0.25.0'],
    tags: ['v0.25.0', 'v0.26.0'],
    published: '2026-11-19T02:30:00Z',
    prs: [{ base: 'main', head: 'releases/main/v0.26.0', number: 230, state: 'CLOSED' }],
  });
  const out = {};
  const calls = run(env, 1, out);
  assert.ok(!calls.some((c) => c[1] === 'create' || c[0] === 'workflow' || c[1] === 'merge'), 'it stays closed');
  assert.match(out.text, /::error::main is missing 0\.26\.0/);
});

const dayAgo = '2026-11-19T02:30:00Z';

test('a backport older than the newest entry is still added', { skip }, () => {
  const env = setup({ main: ['0.23.0', '0.24.0'], tags: ['v0.23.0', 'v0.23.1', 'v0.24.0'] });
  const calls = run(env);
  assert.ok(has(calls, 'pr', 'create', '--base', 'main', '--head', 'releases/main/v0.23.1'), JSON.stringify(calls));
  assert.deepEqual(files(env, 'releases/main/v0.23.1'), ['0.23.0.md', '0.23.1.md', '0.24.0.md']);
});

test('a fresh backport does not hide an older release that is overdue', { skip }, () => {
  const env = setup({
    main: ['0.23.0'],
    tags: ['v0.23.0', 'v0.23.1', 'v0.24.0'],
    published: { 'v0.23.0': dayAgo, 'v0.24.0': dayAgo, 'v0.23.1': hourAgo },
  });
  const out = {};
  run(env, 1, out);
  assert.match(out.text, /::error::main is missing 0\.24\.0, which came out at 2026-11-19T02:30:00Z/);
  assert.doesNotMatch(out.text, /missing 0\.23\.1/, 'the backport is still inside its grace period');
});

test('an overdue release that this run merges does not fail it', { skip }, () => {
  // Its checks finish inside the run, so main's auto-merge lands before the end.
  const env = setup({ main: ['0.25.0'], tags: ['v0.25.0', 'v0.26.0'], published: dayAgo, merges: ['main'] });
  const out = {};
  const calls = run(env, 0, out);
  assert.ok(has(calls, 'pr', 'merge', 'https://example.test/pull/99', '--squash', '--auto'));
  assert.deepEqual(files(env, 'main'), ['0.25.0.md', '0.26.0.md'], 'the merge landed');
  assert.doesNotMatch(out.text, /::error::/);
});

test('an overdue release whose PR does not merge still fails the run', { skip }, () => {
  const env = setup({ main: ['0.25.0'], tags: ['v0.25.0', 'v0.26.0'], published: dayAgo });
  const out = {};
  run(env, 1, out);
  assert.match(out.text, /::error::main is missing 0\.26\.0/);
});

// Opens the PR the last run created, as GitHub would, then changes what ABM has before the next run.
function reopen(env, change = {}) {
  const f = join(env.fake, 'state.json');
  const st = JSON.parse(readFileSync(f, 'utf8'));
  st.prs.push({ number: 99, ...st.created, state: 'OPEN' });
  writeFileSync(f, JSON.stringify({ ...st, ...change }));
  writeFileSync(join(env.fake, 'calls.log'), '');
}
const show = (env, file) => env.git(env.remote, 'show', `releases/main/v0.24.0:src/content/releases/${file}`);
const halfHourAgo = new Date(Date.now() - 1800e3).toISOString().replace(/\.\d+Z$/, 'Z');

for (const [what, first, change, check] of [
  ['a backport published', ['v0.23.0', 'v0.24.0'], { tags: ['v0.23.0', 'v0.23.1', 'v0.24.0'] },
    (env) => assert.deepEqual(files(env, 'releases/main/v0.24.0'), ['0.23.0.md', '0.23.1.md', '0.24.0.md'])],
  ['a release unpublished', ['v0.23.0', 'v0.23.1', 'v0.24.0'], { tags: ['v0.23.0', 'v0.24.0'] },
    (env) => assert.deepEqual(files(env, 'releases/main/v0.24.0'), ['0.23.0.md', '0.24.0.md'])],
  ['a changelog section edited', ['v0.23.0', 'v0.24.0'], { notes: 'reworded notes' },
    (env) => assert.match(show(env, '0.24.0.md'), /^- v0\.24\.0 reworded notes$/m)],
  ['a publish date changed', ['v0.23.0', 'v0.24.0'], { published: halfHourAgo },
    (env) => assert.match(show(env, '0.24.0.md'), new RegExp(`^date: '${halfHourAgo}'$`, 'm'))],
]) {
  test(`${what} while a release PR is open reaches that PR with the base unmoved`, { skip }, () => {
    const env = setup({ main: ['0.23.0'], tags: first });
    run(env);
    reopen(env, change);
    const calls = run(env);
    check(env);
    assert.ok(has(calls, 'pr', 'edit', '99', '--title'), JSON.stringify(calls));
    assert.ok(!calls.some((c) => c[1] === 'create' || c[1] === 'close'), 'the same PR carries it');
    assert.ok(has(calls, 'workflow', 'run', 'site-checks.yml', '--ref', 'releases/main/v0.24.0'), 'the new commit is checked');
  });
}

test('an open release PR that already matches ABM is not pushed again', { skip }, () => {
  const env = setup({ main: ['0.23.0'], tags: ['v0.23.0', 'v0.24.0'] });
  run(env);
  const sha = env.git(env.remote, 'rev-parse', 'releases/main/v0.24.0');
  reopen(env, { green: [sha] });
  const calls = run(env);
  assert.equal(env.git(env.remote, 'rev-parse', 'releases/main/v0.24.0'), sha);
  assert.ok(!calls.some((c) => c[0] === 'workflow' || ['edit', 'create', 'close'].includes(c[1])), JSON.stringify(calls));
  assert.ok(has(calls, 'pr', 'merge', '99', '--squash', '--auto'));
});
