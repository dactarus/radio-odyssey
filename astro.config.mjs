import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.radio-odyssey.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
