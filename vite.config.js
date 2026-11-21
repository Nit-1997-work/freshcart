import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        login: resolve(import.meta.dirname, 'login.html'),
        stores: resolve(import.meta.dirname, 'stores.html'),
        store: resolve(import.meta.dirname, 'store.html'),
      },
    },
  },
});
