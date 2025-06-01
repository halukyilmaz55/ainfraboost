import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://ainfraboost.com',
  output: 'server', // SSR için gerekli
  adapter: cloudflare(),
});
