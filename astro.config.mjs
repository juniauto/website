import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://www.juniauto.com.br',
    trailingSlash: 'always',
    build: {
        format: 'directory'
    },
    integrations: [tailwind(), sitemap()],
});
