import { test } from 'node:test';
import assert from 'node:assert/strict';
import { STORES, findStore, stockStatus } from '../src/data/stores.js';

test('there are 4 stores with unique ids and about 8 products each', () => {
  assert.equal(STORES.length, 4);
  assert.equal(new Set(STORES.map((store) => store.id)).size, 4);
  for (const store of STORES) {
    for (const key of ['id', 'name', 'emoji', 'address', 'hours']) {
      assert.equal(typeof store[key], 'string', `${store.id}.${key}`);
    }
    assert.ok(store.products.length >= 7 && store.products.length <= 9, `${store.id} has ${store.products.length} products`);
    for (const product of store.products) {
      assert.equal(typeof product.sku, 'string');
      assert.equal(typeof product.name, 'string');
      assert.equal(typeof product.size, 'string');
      assert.equal(typeof product.price, 'number');
      assert.ok(Number.isInteger(product.stock) && product.stock >= 0);
    }
  }
});

test('the data includes out-of-stock and low-stock products', () => {
  const statuses = STORES.flatMap((store) => store.products.map((product) => stockStatus(product.stock)));
  assert.ok(statuses.includes('out'));
  assert.ok(statuses.includes('low'));
  assert.ok(statuses.includes('in'));
});

test('stockStatus thresholds', () => {
  assert.equal(stockStatus(0), 'out');
  assert.equal(stockStatus(5), 'low');
  assert.equal(stockStatus(6), 'in');
});

test('findStore returns the store for a known id and null otherwise', () => {
  assert.equal(findStore(STORES[0].id), STORES[0]);
  assert.equal(findStore('nope'), null);
  assert.equal(findStore(null), null);
});
