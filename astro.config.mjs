import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { storyblok } from '@storyblok/astro';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      components: {
        // Add your Storyblok components here
      },
    }),
  ],
  site: 'http://localhost:3000',
  output: 'static'
});
