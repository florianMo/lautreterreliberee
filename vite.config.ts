import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        sveltekit({
            // Consult https://kit.svelte.dev/docs/integrations#preprocessors
            // for more information about preprocessors
            preprocess: vitePreprocess(),

            // put build in build folder
            adapter: adapter({ out: "build" })
        })
    ],
    server: {
        fs: {
          // Allow serving files from one level up to the project root
          allow: ['..'],
        },
      },
});
