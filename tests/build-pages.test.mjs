import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');

execFileSync(join(root, 'node_modules', '.bin', 'vite'), ['build'], { cwd: root, stdio: ['ignore', 'ignore', 'inherit'] });

test('vite build emits index.html', () => {
  assert.ok(existsSync(join(dist, 'index.html')), 'dist/index.html is missing');
});

test('vite build emits login.html', () => {
  assert.ok(existsSync(join(dist, 'login.html')), 'dist/login.html is missing');
});

test('header Sign in link on index.html opens /login.html', () => {
  const html = readFileSync(join(dist, 'index.html'), 'utf8');
  assert.match(html, /<a href="\/login\.html"[^>]*>Sign in<\/a>/);
});

test('vite build emits stores.html and store.html', () => {
  assert.ok(existsSync(join(dist, 'stores.html')), 'dist/stores.html is missing');
  assert.ok(existsSync(join(dist, 'store.html')), 'dist/store.html is missing');
});

test('header Stores link opens /stores.html on every page', () => {
  for (const page of ['index.html', 'login.html', 'stores.html', 'store.html']) {
    const html = readFileSync(join(dist, page), 'utf8');
    assert.match(html, /<a href="\/stores\.html"[^>]*>Stores<\/a>/, `${page} Stores link`);
  }
});
