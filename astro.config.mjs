import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import react from '@astrojs/react';
import astroI18next from "astro-i18next";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

const noIndexPages = [
  "https://imrodriguez.com/404/",
  "https://imrodriguez.com/es/404/",
  "https://imrodriguez.com/thankyou/",
  "https://imrodriguez.com/es/thankyou/"
]

// https://astro.build/config
export default defineConfig({
  site: "https://imrodriguez.com",
  integrations: [astroI18next(), react(), tailwind(), mdx(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap({
    filter: (page) => {
      if (!noIndexPages.includes(page)) {
        return true;
      } else {
        return false;
      }
    }  ,
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en",
        es: "es",
      }
    }
  })]
});