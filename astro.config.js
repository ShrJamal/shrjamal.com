import tailwind from "@astrojs/tailwind"
import metaTags from "astro-meta-tags"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://shrjamal.com",
  integrations: [
    metaTags(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  devToolbar: {
    enabled: false,
  },
})
