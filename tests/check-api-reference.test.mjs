import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkBundle, checkLicences, checkSpec } from '../scripts/check-api-reference.mjs';

const spec = (extra = {}) => JSON.stringify({ openapi: '3.1.0', info: { title: 'ABM', version: '0.17.0' }, paths: { '/api/health': {} }, ...extra });

test('a clean spec passes, with the schema\'s own example values allowed', () => {
  assert.deepEqual(checkSpec(spec({ x: 'http://127.0.0.1:5173', y: '/mnt/books/Author/Series/Book.m4b' })), []);
});

test('a spec with servers, a home path, a LAN address or an email fails', () => {
  const problems = checkSpec(spec({ servers: [{ url: 'http://192.168.1.20:5173' }], a: '/home/shane/books', b: 'me@example.com' }));
  assert.equal(problems.length, 4);
});

test('broken or empty specs fail', () => {
  assert.deepEqual(checkSpec('{'), ['openapi.json is not valid JSON']);
  assert.equal(checkSpec(JSON.stringify({ openapi: '2.0', info: {}, paths: {} })).length, 3);
});

test('any bundle other than the pinned one fails, and so does a cdn.redoc.ly reference', () => {
  const problems = checkBundle(Buffer.from('x https://cdn.redoc.ly/redoc/logo-mini.svg'));
  assert.equal(problems.length, 2);
});

test('the licence and notices files must ship unchanged', () => {
  assert.deepEqual(checkLicences(() => { throw new Error('nope'); }), ['redoc.LICENSE.txt is missing', 'redoc.standalone.js.LICENSE.txt is missing']);
  assert.equal(checkLicences(() => Buffer.from('edited')).length, 2);
});
