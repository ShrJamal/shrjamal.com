import cloudflare from "@astrojs/cloudflare"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"
import metaTags from "astro-meta-tags"
import { loadEnv } from "vite"

// @ts-expect-error
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "")
export default defineConfig({
  site: env.SITE!,
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
  }),
  server: {
    port: 3000,
  },
  integrations: [metaTags()],
  vite: {
    resolve: {
      tsconfigPaths: true,
    },
    plugins: [tailwindcss()],
  },
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
