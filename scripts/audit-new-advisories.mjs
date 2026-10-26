#!/usr/bin/env node
// Fails only on advisories this change introduces: those already in the base branch's lock are reported, not blocking.
// Base ref: AUDIT_BASE, default origin/dev. A base that can't be read means every advisory counts as new.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const LEVELS = ['moderate', 'high', 'critical'];

// "package advisory-id" for every moderate-or-worse advisory in an `npm audit --json` report.
export function advisories(report) {
  if (report.error) throw new Error(`npm audit failed: ${report.error.summary ?? report.error.code}`);
  const found = new Set();
  for (const [name, vuln] of Object.entries(report.vulnerabilities ?? {})) {
    for (const via of vuln.via) {
      if (typeof via === 'object' && LEVELS.includes(via.severity)) found.add(`${name} ${via.url.split('/').pop()}`);
    }
  }
  return found;
}

export function newAdvisories(now, base) {
  return [...advisories(now)].filter((id) => !advisories(base).has(id)).sort();
}

const audit = (dir) => {
  try {
    return JSON.parse(execFileSync('npm', ['audit', '--package-lock-only', '--json'], { cwd: dir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }));
  } catch (err) {
    if (err.stdout) return JSON.parse(err.stdout); // npm exits 1 when it finds advisories
    throw err;
  }
};

function main() {
  const base = process.env.AUDIT_BASE ?? 'origin/dev';
  const now = audit('.');
  let was = { vulnerabilities: {} };
  const tmp = mkdtempSync(join(tmpdir(), 'audit-base-'));
  try {
    for (const file of ['package.json', 'package-lock.json']) {
      writeFileSync(join(tmp, file), execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8', maxBuffer: 1 << 28 }));
    }
    was = audit(tmp);
  } catch {
    console.error(`could not audit ${base}; every advisory counts as new`);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
  const known = [...advisories(now)].filter((id) => advisories(was).has(id)).sort();
  if (known.length) console.log(`already on ${base} (not blocking, update through the normal path):\n${known.map((l) => `  ${l}`).join('\n')}`);
  const fresh = newAdvisories(now, was);
  if (fresh.length) {
    console.error(`NEW advisories introduced by this change:\n${fresh.map((l) => `  ${l}`).join('\n')}`);
    process.exit(1);
  }
  console.log('no new advisories');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
