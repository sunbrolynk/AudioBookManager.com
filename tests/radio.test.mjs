import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { LOCALES, route } from '../functions/_middleware.js';
import { RECONNECT_SECONDS, ago, backoff, clock, creditIndex, fill, findCredit, groupByArtist, httpsUrl, licenceLabel } from '../src/lib/radio.mjs';

const credits = JSON.parse(readFileSync(new URL('../src/data/radio-credits.json', import.meta.url), 'utf8'));
const at = (u) => route(new URL(u));

test('the radio host serves the player and credits pages at clean addresses', () => {
  assert.deepEqual(at('https://radio.audiobookmanager.com/'), { asset: '/radio/' });
  assert.deepEqual(at('https://radio.audiobookmanager.com/credits/'), { asset: '/radio/credits/' });
  assert.deepEqual(at('https://radio.audiobookmanager.com/credits?x=1'), { redirect: 'https://radio.audiobookmanager.com/credits/?x=1' });
});

test('the built address of a page redirects to the radio host, from either host', () => {
  assert.deepEqual(at('https://audiobookmanager.com/radio/'), { redirect: 'https://radio.audiobookmanager.com/' });
  assert.deepEqual(at('https://www.audiobookmanager.com/radio/credits/'), { redirect: 'https://radio.audiobookmanager.com/credits/' });
  assert.deepEqual(at('https://radio.audiobookmanager.com/radio/'), { redirect: 'https://radio.audiobookmanager.com/' });
});

test('each language has its own copy of the pages on the radio host', () => {
  assert.deepEqual(at('https://radio.audiobookmanager.com/de/'), { asset: '/radio/de/' });
  assert.deepEqual(at('https://radio.audiobookmanager.com/zh-cn/credits/'), { asset: '/radio/zh-cn/credits/' });
  assert.deepEqual(at('https://radio.audiobookmanager.com/de'), { redirect: 'https://radio.audiobookmanager.com/de/' });
  assert.deepEqual(at('https://radio.audiobookmanager.com/pt-br/credits?x=1'), { redirect: 'https://radio.audiobookmanager.com/pt-br/credits/?x=1' });
  assert.deepEqual(at('https://audiobookmanager.com/radio/ja/credits/'), { redirect: 'https://radio.audiobookmanager.com/ja/credits/' });
  // A prefix that isn't one of the site's languages, and the main site's own language pages, are left alone.
  assert.equal(at('https://radio.audiobookmanager.com/xx/'), null);
  assert.equal(at('https://audiobookmanager.com/de/'), null);
  assert.equal(at('https://audiobookmanager.com/de/installation/'), null);
});

test('the middleware knows every language the site has, and the Functions route list sends each one to it', () => {
  const locales = Object.keys(JSON.parse(readFileSync(new URL('../src/locales.json', import.meta.url), 'utf8')));
  assert.deepEqual([...LOCALES].sort(), locales.sort());
  const routes = JSON.parse(readFileSync(new URL('../public/_routes.json', import.meta.url), 'utf8')).include;
  for (const code of locales) for (const p of ['', '/', '/credits', '/credits/']) assert.ok(routes.includes(`/${code}${p}`), `/${code}${p}`);
});

test('everything else passes through, including previews and the credits data file', () => {
  assert.equal(at('https://audiobookmanager.com/'), null);
  assert.equal(at('https://audiobookmanager.com/installation/'), null);
  assert.equal(at('https://abm-site.pages.dev/radio/'), null);
  assert.equal(at('https://radio.audiobookmanager.com/radio/credits.json'), null);
  assert.equal(at('https://radio.audiobookmanager.com/_astro/radio.css'), null);
});

test('reconnect waits 2, 5, 10 then 30 seconds and stays at 30', () => {
  assert.deepEqual([0, 1, 2, 3, 4, 9].map(backoff), [2, 5, 10, 30, 30, 30]);
  assert.deepEqual(RECONNECT_SECONDS, [2, 5, 10, 30]);
});

test('credits match a song by artist and title, ignoring case and spaces, and miss gracefully', () => {
  const index = creditIndex(credits);
  const first = credits[0];
  assert.equal(findCredit(index, { artist: ` ${first.artist.toUpperCase()} `, title: first.title.toLowerCase() }), first);
  assert.equal(findCredit(index, { artist: 'Nobody', title: 'Nothing' }), undefined);
  assert.equal(findCredit(index, undefined), undefined);
});

test('only https URLs survive', () => {
  assert.equal(httpsUrl('https://stream.audiobookmanager.com/a.jpg'), 'https://stream.audiobookmanager.com/a.jpg');
  for (const bad of ['javascript:alert(1)', 'http://x.test/', 'data:text/html,x', '//x.test/', '', undefined, null]) assert.equal(httpsUrl(bad), '');
});

test('licences read as their deed names, times and ages as clocks', () => {
  assert.equal(licenceLabel('CC-BY-4.0'), 'CC BY 4.0');
  assert.equal(licenceLabel('CC-BY-SA-4.0'), 'CC BY-SA 4.0');
  assert.equal(licenceLabel('CC0-1.0'), 'CC0 1.0');
  assert.equal(clock(102), '1:42');
  assert.equal(clock(-3), '0:00');
  assert.equal(ago(1000, 1000 + 4 * 60), '4 min. ago');
  assert.equal(ago(1000, 1010), 'now');
  assert.equal(ago(1000, 1000 + 4 * 60, 'de'), 'vor 4 Min.');
  assert.equal(ago(1000, 1000 + 3 * 3600, 'ja'), '3 時間前');
  assert.equal(fill('{n} of {m}', { n: 1, m: 2 }), '1 of 2');
  assert.equal(fill('{a} {missing}', { a: 'x' }), 'x {missing}');
});

test('credits group by artist A to Z and every track keeps a licence and an https source', () => {
  const groups = groupByArtist(credits);
  const names = groups.map((g) => g.artist);
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })));
  assert.equal(groups.reduce((n, g) => n + g.tracks.length, 0), credits.length);
  for (const c of credits) {
    assert.ok(c.license && httpsUrl(c.license_url) && httpsUrl(c.source_url), c.id);
    assert.equal(new Set(credits.map((x) => x.id)).size, credits.length);
  }
});

test('only the /radio path itself is the radio pages: lookalike and doubled paths pass through', () => {
  assert.equal(at('https://audiobookmanager.com/radiocredits/'), null);
  assert.equal(at('https://audiobookmanager.com/radio-x/'), null);
  assert.equal(at('https://audiobookmanager.com/radio//'), null);
  assert.deepEqual(at('https://audiobookmanager.com/radio'), { redirect: 'https://radio.audiobookmanager.com/' });
});

test('the radio brand link goes to the main site landing page in the same language', () => {
  const layout = readFileSync(new URL('../src/layouts/RadioLayout.astro', import.meta.url), 'utf8');
  assert.match(layout, /const site = 'https:\/\/audiobookmanager\.com'/);
  assert.match(layout, /<a class="brand" href=\{`\$\{site\}\$\{prefix\}\/`\} aria-label=\{t\.radioHome\}>/);
});
