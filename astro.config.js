import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import metaTags from 'astro-meta-tags'

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site: env.SITE,
  integrations: [tailwind(), metaTags()],
})
