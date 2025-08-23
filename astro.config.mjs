import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // We'll add i18n configuration later
  // For now, keep it simple
  output: 'static',
  build: {
    format: 'file'
  }
});
