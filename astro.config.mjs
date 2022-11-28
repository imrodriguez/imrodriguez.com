import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from "@astrojs/partytown";
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx(), partytown({
        // Adds dataLayer.push as a forwarding-event.
        config: {
          forward: ["dataLayer.push"],
        },
      }),
      image({
        serviceEntryPoint: '@astrojs/image/sharp'
      })],
});
