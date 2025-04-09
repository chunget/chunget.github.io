import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://chunget.github.io',
    base: '/',
    integrations: [tailwind()],
});
