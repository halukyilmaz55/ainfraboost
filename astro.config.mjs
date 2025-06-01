import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import content from '@astrojs/content';

export default defineConfig({
  site: 'https://ainfraboost.com',
  integrations: [content()],
});
