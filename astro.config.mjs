import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    integrations: [react(), tailwind(), sitemap()],
    site: 'https://www.juniauto.com.br',
    trailingSlash: 'never',
});
