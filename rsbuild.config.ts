import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';

export default defineConfig({
    plugins: [pluginSvelte()],
    output: {
        minify: true,
        inlineScripts: true,
        injectStyles: true,
        filename: {
            js: 'skidwars.js',
        },
        distPath: {
            js: '',
        }
    },
    performance: {
        chunkSplit: {
            strategy: 'all-in-one',
        }
    },
    tools: {
        htmlPlugin: false,
    }
})
