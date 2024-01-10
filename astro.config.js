import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site: env.SITE,
  integrations: [sitemap(), tailwind()],
})
