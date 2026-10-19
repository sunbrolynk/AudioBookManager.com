import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { allowed, checkSite, parsePolicy, parseRules, policyFor, srcsetUrls } from '../scripts/check-csp.mjs';

const headers = "/*\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:; font-src 'self'; object-src 'none'\n";

test('sources fall back to default-src and honour data: per directive', () => {
  const policy = parsePolicy(headers);
  assert.equal(allowed(policy, 'img-src', 'data:image/svg+xml,x'), true);
  assert.equal(allowed(policy, 'font-src', 'data:font/woff2;base64,x'), false);
  assert.equal(allowed(policy, 'script-src', '/_astro/a.js'), true);
  assert.equal(allowed(policy, 'script-src', 'https://cdn.example.com/a.js'), false);
  assert.equal(allowed(policy, 'object-src', '/a.swf'), false);
});

test('a built site with a data: font or an off-site script fails', () => {
  const dist = mkdtempSync(join(tmpdir(), 'check-csp-'));
  mkdirSync(join(dist, '_astro'));
  writeFileSync(join(dist, '_headers'), headers);
  writeFileSync(join(dist, '_astro', 'a.css'), '@font-face{src:url(data:font/woff2;base64,AA)} .i{mask-image:url("data:image/svg+xml,x")}');
  writeFileSync(join(dist, 'index.html'), '<script src="https://cdn.example.com/x.js"></script><img src="/a.png"><link rel="icon" href="/favicon.png">');
  const problems = checkSite(dist);
  assert.equal(problems.length, 2);
  assert.match(problems.join('\n'), /font-src blocks data:font/);
  assert.match(problems.join('\n'), /script-src blocks https:\/\/cdn\.example\.com/);
});

test("an absolute URL on the site's own origin counts as 'self'", () => {
  const policy = parsePolicy(headers);
  assert.equal(allowed(policy, 'img-src', 'https://audiobookmanager.com/favicon.png', 'https://audiobookmanager.com'), true);
  assert.equal(allowed(policy, 'img-src', '//audiobookmanager.com/favicon.png', 'https://audiobookmanager.com'), true);
  assert.equal(allowed(policy, 'img-src', 'https://audiobookmanager.com.evil.example/x.png', 'https://audiobookmanager.com'), false);
});

test('srcset candidates on img and source are checked like src', () => {
  const dist = mkdtempSync(join(tmpdir(), 'check-csp-'));
  writeFileSync(join(dist, '_headers'), "/*\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:\n");
  writeFileSync(join(dist, 'index.html'), '<picture><source srcset="https://cdn.example.com/a.webp 1x, /b.webp 2x"><img src="/fallback.png" srcset="data:image/png;base64,AA 1x, https://img.example.org/c.png 2x"></picture>');
  const problems = checkSite(dist).join('\n');
  assert.match(problems, /img-src blocks https:\/\/cdn\.example\.com\/a\.webp/);
  assert.match(problems, /img-src blocks https:\/\/img\.example\.org\/c\.png/);
  assert.doesNotMatch(problems, /b\.webp|fallback|data:/);
});

test('srcset is parsed like a browser does, including candidates with no space after the comma', () => {
  assert.deepEqual(srcsetUrls('/a.png 1x,https://cdn.example.com/b.png 2x'), ['/a.png', 'https://cdn.example.com/b.png']);
  assert.deepEqual(srcsetUrls('data:image/png;base64,AA 1x, /c.png 2x'), ['data:image/png;base64,AA', '/c.png']);
  // With no descriptor, a comma inside a URL belongs to it, as the HTML spec and browsers have it.
  assert.deepEqual(srcsetUrls('/d.png,/e.png'), ['/d.png,/e.png']);
  assert.deepEqual(srcsetUrls('/f.png, https://cdn.example.com/g.png'), ['/f.png', 'https://cdn.example.com/g.png']);
});

test('single-quoted and unquoted attributes and string-form CSS imports are checked too', () => {
  const dist = mkdtempSync(join(tmpdir(), 'check-csp-'));
  writeFileSync(join(dist, '_headers'), "/*\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self'\n");
  writeFileSync(join(dist, 'index.html'), "<img src='https://img.example.org/a.png'><script src=https://js.example.org/x.js></script><style>@import \"https://css.example.org/t.css\"; @import url('/local.css');</style>");
  writeFileSync(join(dist, 'a.css'), "@import 'https://css.example.net/u.css';");
  const problems = checkSite(dist).join('\n');
  for (const blocked of ['img-src blocks https://img.example.org/a.png', 'script-src blocks https://js.example.org/x.js', 'style-src blocks https://css.example.org/t.css', 'style-src blocks https://css.example.net/u.css']) {
    assert.ok(problems.includes(blocked), `missing: ${blocked}\n${problems}`);
  }
  assert.doesNotMatch(problems, /local\.css/);
});

test('a later path rule replaces the site policy for its own pages only', () => {
  const rules = parseRules("/*\n  Content-Security-Policy: default-src 'self'; style-src 'self'\n\n/api-reference/*\n  ! Content-Security-Policy\n  Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline'\n");
  assert.deepEqual(policyFor(rules, '/api-reference/').get('style-src'), ["'self'", "'unsafe-inline'"]);
  assert.deepEqual(policyFor(rules, '/installation/').get('style-src'), ["'self'"]);
  assert.deepEqual(policyFor(rules, '/_astro/a.css').get('style-src'), ["'self'"]);
});
