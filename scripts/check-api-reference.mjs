#!/usr/bin/env node
// Checks the API reference's two committed files before a build ships them: the ReDoc bundle is
// the pinned one with Redocly's logo request removed, and the spec is a real ABM spec with nothing
// from a private setup in it. Regenerate them with scripts/fetch-redoc.sh and scripts/update-openapi.sh.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const PATCHED_SHA256 = '488ad6f335c47d69afe969ab3c9a906d5d2b91695d6b3e0be63ab76f63c94021';
// ReDoc's MIT licence and the third-party notices its bundle points at ship beside it.
const LICENCES = {
  'redoc.LICENSE.txt': 'd3026d549cf68ab7355bcfa85877bf8f845b3334a7efbfdc63936432fb34ff0e',
  'redoc.standalone.js.LICENSE.txt': '469cc94b600aac09643f70e167cd1f66f24301ebb546532fad5db7c60f7b30d0',
};
// Example values ABM's own schema uses; anything else matching these patterns came from a real setup.
const ALLOWED = new Set(['127.0.0.1', '/mnt/books/Author/Series/Book.m4b']);
const PRIVATE = [
  /\/home\/[\w.-]+/g,
  /\b(?:10|127|192\.168|172\.(?:1[6-9]|2\d|3[01]))(?:\.\d{1,3}){2,3}\b/g,
  /\/mnt\/[^\s"]+/g,
  /[\w.%+-]+@[\w-]+\.[\w.-]+/g,
];

export function checkSpec(text) {
  const problems = [];
  let spec;
  try { spec = JSON.parse(text); } catch { return ['openapi.json is not valid JSON']; }
  if (!/^3\./.test(spec.openapi ?? '')) problems.push('openapi.json is not an OpenAPI 3 document');
  if (!spec.info?.version) problems.push('openapi.json has no info.version');
  if (!spec.paths || !Object.keys(spec.paths).length) problems.push('openapi.json has no paths');
  if (spec.servers) problems.push('openapi.json names servers; the page must only ever call this site');
  for (const pattern of PRIVATE) {
    for (const [hit] of text.matchAll(pattern)) if (!ALLOWED.has(hit)) problems.push(`openapi.json contains ${hit}`);
  }
  return problems;
}

export function checkLicences(read) {
  const problems = [];
  for (const [name, want] of Object.entries(LICENCES)) {
    let buffer;
    try { buffer = read(name); } catch { problems.push(`${name} is missing`); continue; }
    if (createHash('sha256').update(buffer).digest('hex') !== want) problems.push(`${name} is not ReDoc 2.5.3's`);
  }
  return problems;
}

export function checkBundle(buffer) {
  const problems = [];
  const sha = createHash('sha256').update(buffer).digest('hex');
  if (sha !== PATCHED_SHA256) problems.push(`redoc.standalone.js is not the pinned bundle (sha256 ${sha})`);
  if (buffer.includes('cdn.redoc.ly')) problems.push('redoc.standalone.js still loads from cdn.redoc.ly');
  return problems;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dir = new URL('../public/api-reference/', import.meta.url);
  const problems = [
    ...checkBundle(readFileSync(new URL('redoc.standalone.js', dir))),
    ...checkSpec(readFileSync(new URL('openapi.json', dir), 'utf8')),
    ...checkLicences((name) => readFileSync(new URL(name, dir))),
  ];
  if (problems.length) {
    console.error(`check-api-reference:\n  ${problems.join('\n  ')}`);
    process.exit(1);
  }
  console.log('check-api-reference: pinned ReDoc bundle and a clean ABM spec');
}
