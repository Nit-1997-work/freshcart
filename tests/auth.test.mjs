import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

const store = new Map();
globalThis.sessionStorage = {
  getItem: (key) => (store.has(key) ? store.get(key) : null),
  setItem: (key, value) => store.set(key, String(value)),
  removeItem: (key) => store.delete(key),
};
const replaced = [];
globalThis.location = { replace: (url) => replaced.push(url) };

const { SESSION_KEY, getSession, signIn, signOut, requireSession } = await import('../src/auth.js');

beforeEach(() => {
  store.clear();
  replaced.length = 0;
});

test('signIn stores {email} under freshcart.session', () => {
  signIn('ana@example.com');
  assert.equal(SESSION_KEY, 'freshcart.session');
  assert.deepEqual(JSON.parse(store.get('freshcart.session')), { email: 'ana@example.com' });
  assert.deepEqual(getSession(), { email: 'ana@example.com' });
});

test('signOut clears the session', () => {
  signIn('ana@example.com');
  signOut();
  assert.equal(getSession(), null);
});

test('getSession ignores malformed values', () => {
  store.set('freshcart.session', 'not json');
  assert.equal(getSession(), null);
  store.set('freshcart.session', JSON.stringify({ name: 'x' }));
  assert.equal(getSession(), null);
});

test('requireSession redirects to /login.html when signed out', () => {
  assert.equal(requireSession(), null);
  assert.deepEqual(replaced, ['/login.html']);
});

test('requireSession returns the session when signed in', () => {
  signIn('ana@example.com');
  assert.deepEqual(requireSession('/elsewhere.html'), { email: 'ana@example.com' });
  assert.deepEqual(replaced, []);
});
