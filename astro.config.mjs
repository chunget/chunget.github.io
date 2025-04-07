import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/*
export default defineConfig({
  
});
*/
export default defineConfig({
  integrations: [tailwind()],
  site:'https://chunget.github.io',
  base:'/astro-project'
});
