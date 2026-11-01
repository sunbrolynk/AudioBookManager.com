import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { clean, chunk, payloads } from '../scripts/post-site-release.mjs';

test('comments and images are stripped from the body', () => {
  assert.equal(clean('a\r\n<!-- hide\nme -->\n![x](http://i/p.png)\n<img src="y">\n\n\n\nb'), 'a\n\nb');
});

test('a long body is split under the embed limit, title and link on the first only', () => {
  const body = Array.from({ length: 600 }, (_, i) => `- line number ${i} of the notes`).join('\n');
  const pr = { title: 'Release', html_url: 'https://github.com/o/r/pull/1', body };
  const messages = payloads(pr);
  const embeds = messages.flatMap((m) => m.embeds);
  assert.ok(embeds.length > 1);
  assert.ok(embeds.every((e) => e.description.length <= 4000));
  assert.ok(messages.every((m) => m.embeds.length <= 10));
  assert.deepEqual([embeds[0].title, embeds[0].url], ['Release', pr.html_url]);
  assert.ok(embeds.slice(1).every((e) => !e.title));
  assert.equal(chunk('x'.repeat(9000)).length, 3);
});

test('dry run prints the payload and posts nothing', () => {
  const file = join(mkdtempSync(join(tmpdir(), 'rel-')), 'event.json');
  writeFileSync(file, JSON.stringify({ pull_request: { title: 'T', html_url: 'https://github.com/o/r/pull/2', body: 'hi <!-- x -->' } }));
  const out = execFileSync('node', ['scripts/post-site-release.mjs', '--dry-run'], {
    encoding: 'utf8',
    env: { PATH: process.env.PATH, GITHUB_EVENT_PATH: file },
  });
  assert.equal(JSON.parse(out)[0].embeds[0].description, 'hi');
});
