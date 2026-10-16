import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { checkLinks } from '../scripts/lib-check-links.mjs';

function fixture(t, files) {
  const root = mkdtempSync(join(tmpdir(), 'abm-links-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const [name, content] of Object.entries(files)) {
    const path = join(root, name);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
  }
  return root;
}

test('resolves relative, root-relative, absolute, and file links', (t) => {
  const root = fixture(t, {
    'index.html': `
      <a href="/guide/">Guide</a>
      <a href="https://audiobookmanager.com/guide/#intro">Intro</a>
      <a href="/downloads/example.txt">Download</a>
      <link href="/assets/site.css" rel="stylesheet">
    `,
    'guide/index.html': `
      <h2 id="intro">Intro</h2>
      <a href="../">Home</a>
      <a href="?a=1&amp;b=2#intro">This section</a>
      <a href="#top">Top</a>
    `,
    'downloads/example.txt': 'Example',
    'assets/site.css': 'body {}',
  });
  assert.deepEqual(checkLinks(root), []);
});

test('decodes encoded filenames and HTML entities in anchors', (t) => {
  const root = fixture(t, {
    'index.html': '<a href="/caf%C3%A9/#a%26b">Link</a>',
    'café/index.html': '<h2 id="a&amp;b">Heading</h2>',
  });
  assert.deepEqual(checkLinks(root), []);
});

test('reports broken relative links, files, and anchors', (t) => {
  const root = fixture(t, {
    'index.html': `
      <a href="missing/">Missing page</a>
      <a href="/missing.pdf">Missing file</a>
      <a href="/guide/#missing">Missing anchor</a>
    `,
    'guide/index.html': '<h2 id="intro">Intro</h2>',
  });
  const problems = checkLinks(root);
  assert.equal(problems.length, 3);
  assert.ok(problems.some((p) => p.includes('missing/ (no page or file)')));
  assert.ok(problems.some((p) => p.includes('/missing.pdf (no page or file)')));
  assert.ok(problems.some((p) => p.includes('/guide/#missing (no anchor)')));
});

test('does not fetch external, email, or telephone destinations', (t) => {
  const root = fixture(t, {
    'index.html': `
      <a href="https://example.invalid/missing/">External</a>
      <a href="//example.invalid/">External</a>
      <a href="mailto:translate@audiobookmanager.com">Email</a>
      <a href="tel:+15555550100">Phone</a>
    `,
  });
  assert.deepEqual(checkLinks(root), []);
});

test('rejects unsafe schemes, malformed encodings, and escaped paths', (t) => {
  const root = fixture(t, {
    'index.html': `
      <a href="javascript:alert(1)">Unsafe</a>
      <a href="/bad%ZZ/">Bad encoding</a>
      <a href="/%2e%2e%2foutside.txt">Outside</a>
      <a href="/bad%00.txt">Null byte</a>
    `,
  });
  const problems = checkLinks(root);
  assert.equal(problems.length, 4);
  assert.ok(problems.some((p) => p.includes('unsupported URL scheme')));
  assert.ok(problems.some((p) => p.includes('invalid path encoding')));
  assert.ok(problems.some((p) => p.includes('path escapes build directory')));
  assert.ok(problems.some((p) => p.includes('invalid path characters')));
});

test('rejects base href rather than silently misresolving links', (t) => {
  const root = fixture(t, {
    'index.html': '<base href="/elsewhere/"><a href="guide/">Guide</a>',
  });
  assert.match(checkLinks(root)[0], /base href is unsupported/);
});

test('fails when there are no HTML pages to check', (t) => {
  const root = fixture(t, {});
  assert.throws(() => checkLinks(root), /No HTML files/);
});
