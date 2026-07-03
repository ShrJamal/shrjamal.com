import cloudflare from "@astrojs/cloudflare"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"
import { loadEnv } from "vite-plus"

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
