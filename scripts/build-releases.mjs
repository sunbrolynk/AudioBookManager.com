#!/usr/bin/env node
// Usage: node scripts/build-releases.mjs <CHANGELOG.md> <tag...> [--out public/releases.json] [--repo <ABM checkout>]
// Also writes one markdown file per release into src/content/releases/ for the Updates page.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';

const REPO = 'https://github.com/sunbrolynk/AudioBook-Manager';
const args = process.argv.slice(2);
let out = new URL('../public/releases.json', import.meta.url).pathname;
const oi = args.indexOf('--out');
if (oi !== -1) out = args.splice(oi, 2)[1];
// With --repo, a version whose changelog heading has no date takes its tag's commit date.
let repo = null;
const ri = args.indexOf('--repo');
if (ri !== -1) repo = args.splice(ri, 2)[1];
const tagDate = (version) =>
  execFileSync('git', ['-C', repo, 'log', '-1', '--format=%cs', `v${version}`], { encoding: 'utf8' }).trim() || null;
const [changelog, ...tags] = args;
if (!changelog || tags.length === 0) {
  console.error('usage: build-releases.mjs <CHANGELOG.md> <tag...> [--out file] [--repo dir]');
  process.exit(1);
}

const cmp = (a, b) => {
  const [x, y] = [a, b].map((v) => v.split('.').map(Number));
  return y[0] - x[0] || y[1] - x[1] || y[2] - x[2];
};

// Split into sections headed "## [x.y.z]" or "## [x.y.z] - YYYY-MM-DD".
const sections = new Map();
const text = readFileSync(changelog, 'utf8').replace(/\r\n/g, '\n');
for (const m of text.matchAll(/^## \[(\d+\.\d+\.\d+)\][^\n]*\n([\s\S]*?)(?=^## \[|(?![\s\S]))/gm)) {
  const date = m[0].match(/^## [^\n]*?(\d{4}-\d{2}-\d{2})/)?.[1] ?? null;
  sections.set(m[1], { date, notes: m[2].trim() });
}

const versions = [...new Set(tags.map((t) => t.replace(/^v/, '')))].sort(cmp);
const releases = versions.map((version) => {
  const s = sections.get(version);
  if (!s) throw new Error(`no changelog section for ${version}`);
  return { version, date: s.date ?? (repo ? tagDate(version) : null), notes_markdown: s.notes, url: `${REPO}/releases/tag/v${version}` };
});

writeFileSync(out, JSON.stringify(releases, null, 2) + '\n');
console.log(`wrote ${releases.length} releases to ${out}`);

// The collection mirrors the JSON exactly, so files for versions no longer passed are removed.
const dir = new URL('../src/content/releases/', import.meta.url).pathname;
mkdirSync(dir, { recursive: true });
for (const f of readdirSync(dir)) if (f.endsWith('.md')) rmSync(dir + f);
for (const r of releases) {
  const front = `---\nversion: '${r.version}'\ndate: ${r.date ? `'${r.date}'` : 'null'}\nurl: '${r.url}'\n---\n\n`;
  writeFileSync(`${dir}${r.version}.md`, front + r.notes_markdown + '\n');
}
console.log(`wrote ${releases.length} release pages to ${dir}`);
