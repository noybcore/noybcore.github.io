import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';
import Pages from 'vite-plugin-pages-react';

export default defineConfig({
    // base: '/noybcore.github.io/',
    base: '/',
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
        Pages({
            dirs: 'src/pages',
            extensions: ['tsx', 'ts', 'jsx', 'js'],
        }),
    ],
});
