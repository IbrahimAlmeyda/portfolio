// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ibrahimalmeyda.dev",

  i18n: {
  locales: ["es", "en"],
  defaultLocale: "es",
  routing: { prefixDefaultLocale: false },
},

  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-ES", en: "en-US" } },
    }),
  ],
});