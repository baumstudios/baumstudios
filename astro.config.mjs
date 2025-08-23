import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://baumstudios.com',
  output: 'static',
  build: {
    format: 'file'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      // Include all language versions
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          hr: 'hr'
        }
      },
      // Custom options
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      // You can customize per page if needed
      serialize(item) {
        // Homepage gets higher priority
        if (item.url === 'https://baumstudios.com/' || item.url === 'https://baumstudios.com/hr/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        return item;
      }
    })
  ]
});
