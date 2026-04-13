import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://ksiazczak-parkiet.pl',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://ksiazczak-parkiet.pl/') {
          item.priority = 1.0;
        } else if (item.url.includes('/cyklinowanie-') || item.url.includes('/uslugi') || item.url.includes('/schody-drewniane')) {
          item.priority = 0.9;
        } else if (item.url.includes('/realizacje') || item.url.includes('/o-nas') || item.url.includes('/kontakt')) {
          item.priority = 0.6;
        } else {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
