import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
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
    ],
});
