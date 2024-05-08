import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import metaTags from 'astro-meta-tags'

// https://astro.build/config
export default defineConfig({
  site: 'https://cjamal.com',
  integrations: [
    metaTags(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
