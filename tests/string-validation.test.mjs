import test from 'node:test';
import assert from 'node:assert/strict';
import { validateStrings } from '../scripts/lib-string-validation.mjs';

test('accepts translated text and reordered placeholders', () => {
  assert.deepEqual(validateStrings(
    { title: 'Hello {name}', rows: [['Contact {mail}: {name}']] },
    { title: 'Вітаємо, {name}', rows: [['{name}: {mail}']] }
  ), []);
});

test('rejects missing, empty, and non-string translations', () => {
  for (const target of [{}, { title: '' }, { title: '   ' }, { title: 42 }]) {
    assert.deepEqual(
      validateStrings({ title: 'Hello' }, target),
      ['strings.title: missing or empty translation']
    );
  }
});

test('rejects incorrect object and array structures', () => {
  for (const target of [null, [], 'text']) {
    assert.deepEqual(
      validateStrings({ title: 'Hello' }, target),
      ['strings: expected an object']
    );
  }
  for (const target of [null, {}, [], ['one', 'two']]) {
    assert.deepEqual(
      validateStrings(['one'], target),
      ['strings: expected a list of 1 items']
    );
  }
});

test('rejects missing, renamed, added, and duplicated placeholders', () => {
  for (const target of [
    'Hello',
    'Hello {username}',
    'Hello {name} {mail}',
    'Hello {name} {name}',
  ]) {
    assert.deepEqual(
      validateStrings('Hello {name}', target),
      ['strings: placeholder names or counts differ']
    );
  }
});

test('reports nested paths and multiple problems', () => {
  assert.deepEqual(
    validateStrings(
      { rows: [['Hello {name}', 'Contact']] },
      { rows: [['Hello', '']] },
      'landing.uk'
    ),
    [
      'landing.uk.rows[0][0]: placeholder names or counts differ',
      'landing.uk.rows[0][1]: missing or empty translation',
    ]
  );
});

test('does not accept inherited properties as translations', () => {
  assert.deepEqual(
    validateStrings({ title: 'Hello' }, Object.create({ title: 'Bonjour' })),
    ['strings.title: missing or empty translation']
  );
});

test('allows locale-specific extra fields such as translatorNote', () => {
  assert.deepEqual(
    validateStrings(
      { title: 'Hello' },
      { title: 'Bonjour', translatorNote: 'Contact : {mail}' }
    ),
    []
  );
});

test('reports invalid reference values', () => {
  assert.deepEqual(
    validateStrings({ title: 42 }, { title: 'Hello' }),
    ['strings.title: reference value must be a string']
  );
});
