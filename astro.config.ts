import cloudflare from "@astrojs/cloudflare"
import tailwind from "@astrojs/tailwind"
import metaTags from "astro-meta-tags"
import { defineConfig, envField } from "astro/config"
import { loadEnv } from "vite"

// @ts-ignore
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "")
export default defineConfig({
  site: env.SITE!,
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
  }),
  integrations: [
    metaTags(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  devToolbar: {
    enabled: false,
  },
  env: {
    schema: {
      SITE: envField.string({
        context: "client",
        access: "public",
        url: true,
      }),
    },
  },
})
