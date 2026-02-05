import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';
import pagesPlugin from 'vite-plugin-pages';

export default defineConfig({
    base: '/noybcore.github.io/',
    plugins: [
        tailwindcss(),
        sitemap({
            hostname: 'https://noybcore.com',
            outDir: 'dist',
            generateRobotsTxt: true,
            dynamicRoutes: ['/', '/about', '/work', '/services', '/contact'],
            changefreq: 'monthly',
            priority: 0.8,
        }),
        pagesPlugin({
            dirs: 'src/pages',
        }),
    ],
});
