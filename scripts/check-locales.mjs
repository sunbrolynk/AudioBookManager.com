#!/usr/bin/env node
// A locale is listed only when every root-locale page has a translation in it.
// src/locales.json maps a locale code to { "label": "Français", "lang": "fr" }; this fails the build
// when a configured locale is missing pages, or when a locale folder exists but is not configured.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { translationHtml } from '../src/lib/translation-html.mjs';

const docs = new URL('../src/content/docs/', import.meta.url).pathname;
const locales = JSON.parse(readFileSync(new URL('../src/locales.json', import.meta.url), 'utf8'));
const codes = Object.keys(locales);
const isCode = (n) => /^[a-z]{2,3}(-[a-z0-9]+)?$/i.test(n);

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(dir, e.name)) : /\.mdx?$/.test(e.name) ? [join(dir, e.name)] : []);
const id = (file, base) => relative(base, file).replace(/\.mdx?$/, '');

const rootDirs = readdirSync(docs, { withFileTypes: true }).filter((e) => e.isDirectory());
const localeDirs = rootDirs.map((e) => e.name).filter((n) => isCode(n) || codes.includes(n));
const rootPages = walk(docs).filter((f) => !localeDirs.includes(relative(docs, f).split('/')[0])).map((f) => id(f, docs));

const problems = [];
for (const code of localeDirs.filter((c) => !codes.includes(c))) {
  problems.push(`${code}/ has pages but is not in src/locales.json. Finish it and add it, or remove the folder.`);
}
for (const code of codes) {
  const dir = join(docs, code);
  const have = new Set(existsSync(dir) ? walk(dir).map((f) => id(f, dir)) : []);
  const missing = rootPages.filter((p) => !have.has(p));
  // The landing page is not a docs page: each locale needs its own at src/pages/<code>/index.astro.
  if (!existsSync(new URL(`../src/pages/${code}/index.astro`, import.meta.url))) missing.push('landing page (src/pages/' + code + '/index.astro)');
  if (missing.length) problems.push(`${code} is configured but incomplete, missing ${missing.length} of ${rootPages.length + 1} pages:\n  ${missing.join('\n  ')}`);
}
// Each locale says whether a reviewer has confirmed it, and which issue its review runs on; the badge links there.
for (const code of codes) {
  const { reviewed, issue } = locales[code];
  if (typeof reviewed !== 'boolean') problems.push(`src/locales.json: ${code} needs "reviewed": true or false`);
  if (!Number.isInteger(issue) || issue < 1) problems.push(`src/locales.json: ${code} needs "issue", the number of its review issue`);
}
// Landing copy lives in src/landing-strings.json: every configured locale needs every key (and array length) of the root.
const landing = JSON.parse(readFileSync(new URL('../src/landing-strings.json', import.meta.url), 'utf8'));
const shape = (a, b, path, code) => {
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || b.length !== a.length) return problems.push(`landing strings for ${code}: "${path}" must be a list of ${a.length}`);
    a.forEach((x, i) => shape(x, b[i], `${path}.${i}`, code));
  } else if (a && typeof a === 'object') {
    for (const k of Object.keys(a)) shape(a[k], b?.[k], `${path}.${k}`, code);
  } else if (typeof b !== 'string' || !b.trim()) problems.push(`landing strings for ${code} are missing "${path}"`);
};
for (const code of codes) {
  if (!landing[code]) problems.push(`src/landing-strings.json has no entry for "${code}"`);
  else for (const k of Object.keys(landing.root)) shape(landing.root[k], landing[code][k], k, code);
}
// Header, footer and release-page labels live in src/ui-strings.json: every configured locale needs every English key.
const ui = JSON.parse(readFileSync(new URL('../src/ui-strings.json', import.meta.url), 'utf8'));
for (const code of codes) {
  const missing = Object.keys(ui.en).filter((k) => typeof ui[code]?.[k] !== 'string' || !ui[code][k].trim());
  if (missing.length) problems.push(`src/ui-strings.json for ${code} is missing ${missing.join(', ')}`);
  // A {slot} the page fills (a link, a count) must survive translation, and no new one may appear.
  const slots = (s) => [...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
  for (const k of Object.keys(ui.en)) {
    if (typeof ui[code]?.[k] === 'string' && slots(ui[code][k]) !== slots(ui.en[k])) problems.push(`src/ui-strings.json for ${code}: "${k}" has {${slots(ui[code][k])}} where English has {${slots(ui.en[k])}}`);
  }
}
// Translated strings may carry only <b>, <em>, <code> and <br>: some are rendered as HTML, so anything else would run on the page.
const markup = (file, value, path) => {
  if (typeof value === 'string') {
    try { translationHtml(value); } catch (error) { problems.push(`${file} "${path}": ${error.message}`); }
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) markup(file, v, path ? `${path}.${k}` : k);
  }
};
markup('src/landing-strings.json', landing, '');
markup('src/ui-strings.json', ui, '');
// Non-English locales need the translator call-out (with a {mail} slot); English ones must not have it.
const english = (c) => /^en(-|$)/i.test(locales[c].lang);
for (const code of codes) {
  const note = landing[code]?.translatorNote;
  if (english(code) && note) problems.push(`landing strings for ${code}: translatorNote belongs only on non-English locales`);
  if (!english(code) && !(typeof note === 'string' && note.includes('{mail}'))) problems.push(`landing strings for ${code} need a translatorNote containing {mail}`);
}
// Every sidebar group and link label needs a translation for each configured locale.
const sidebar = JSON.parse(readFileSync(new URL('../src/sidebar-labels.json', import.meta.url), 'utf8'));
const config = readFileSync(new URL('../astro.config.mjs', import.meta.url), 'utf8');
for (const [, label] of config.matchAll(/label: '([^']+)', translations:/g)) {
  for (const c of codes) if (!sidebar[label]?.[locales[c].lang]) problems.push(`sidebar group "${label}" has no translation for ${locales[c].lang}`);
}
const groups = (config.match(/\{ label: '[^']+', (?:translations: [^,]+, )?(?:items|link):/g) || []).length;
if (groups !== (config.match(/translations: sidebarLabels/g) || []).length) problems.push('a sidebar group or link in astro.config.mjs has no translations field');
// Language names need no check: LanguageSelect falls back to Intl.DisplayNames for any name not in src/locale-names.json.
if (problems.length) {
  console.error(`check-locales: ${problems.join('\n')}\nA language is listed only when every page is translated.`);
  process.exit(1);
}
console.log(`check-locales: English plus ${codes.length} complete locale(s), ${rootPages.length + 1} pages each (docs plus landing)`);
