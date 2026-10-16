import test from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdtempSync, mkdirSync, writeFileSync, copyFileSync, rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'abm-locales-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  const write = (name, content) => {
    const path = join(root, name);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
  };
  const json = (name, value) => write(name, JSON.stringify(value));

  write('scripts/.keep', '');
  for (const name of ['check-locales.mjs', 'lib-string-validation.mjs']) {
    copyFileSync(
      new URL(`../scripts/${name}`, import.meta.url),
      join(root, 'scripts', name),
    );
  }

  json('src/locales.json', { de: { label: 'Deutsch', lang: 'de' } });
  json('src/landing-strings.json', {
    root: { title: 'Hello {name}' },
    de: { title: 'Hallo {name}', translatorNote: 'Kontakt: {mail}' },
  });
  json('src/ui-strings.json', {
    en: { docs: 'Docs' },
    de: { docs: 'Dokumentation' },
  });
  json('src/sidebar-labels.json', { Help: { de: 'Hilfe' } });
  write('astro.config.mjs',
    "const sidebar = [{ label: 'Help', translations: sidebarLabels['Help'], items: ['faq'] }];"
  );
  write('src/content/docs/faq.md', '---\ntitle: FAQ\n---\nQuestions.');
  write('src/content/docs/de/faq.md', '---\ntitle: Fragen\n---\nFragen.');
  write('src/pages/de/index.astro', '<h1>Hallo</h1>');

  return {
    root,
    json,
    run: () => {
      const result = spawnSync(
        process.execPath,
        [join(root, 'scripts/check-locales.mjs')],
        { encoding: 'utf8', timeout: 10000 },
      );
      assert.ifError(result.error);
      assert.equal(result.signal, null);
      return result;
    },
  };
}

test('locale command accepts a complete fixture', (t) => {
  const result = fixture(t).run();
  assert.equal(result.status, 0, result.stderr);
});

test('locale command fails when a UI string is missing', (t) => {
  const f = fixture(t);
  f.json('src/ui-strings.json', { en: { docs: 'Docs' }, de: {} });
  const result = f.run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /ui\.de\.docs: missing or empty translation/);
});

test('locale command fails when a placeholder is lost', (t) => {
  const f = fixture(t);
  f.json('src/landing-strings.json', {
    root: { title: 'Hello {name}' },
    de: { title: 'Hallo', translatorNote: 'Kontakt: {mail}' },
  });
  const result = f.run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /landing\.de\.title: placeholder names or counts differ/);
});

test('locale command fails when a translated page is missing', (t) => {
  const f = fixture(t);
  rmSync(join(f.root, 'src/content/docs/de/faq.md'));
  const result = f.run();
  assert.equal(result.status, 1);
  assert.match(result.stderr, /de is configured but incomplete/);
});
