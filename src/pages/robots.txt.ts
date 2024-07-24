export const prerender = true

export const GET = () => {
  const rules = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${import.meta.env.SITE}/sitemap.xml`,
  ]
  return new Response(rules.join("\n"), {
    headers: {
      "content-type": "text/plain",
    },
  })
}
