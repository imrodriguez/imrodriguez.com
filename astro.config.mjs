import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import react from '@astrojs/react';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
    integrations: [astroI18next(),react(),tailwind(), mdx(), image({
        serviceEntryPoint: '@astrojs/image/sharp'
      })],
      
});
