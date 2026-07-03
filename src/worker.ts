import handler from "@astrojs/cloudflare/entrypoints/server"

export default {
  async fetch(req, env, ctx) {
    const response = await handler.fetch(req, env, ctx)
    return response
  },
} satisfies ExportedHandler<Env>
