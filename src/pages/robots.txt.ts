import type { APIRoute } from 'astro'

const SITE = import.meta.env.SITE

export const GET: APIRoute = async () => {
  return new Response(
    `
	User-agent: *
	Allow: /

	Sitemap: ${SITE}/sitemap.xml
	`,
    {
      headers: {
        'content-type': 'text/plain',
        'Cache-Control': 'public, max-age=604800', // 1 week cache
      },
    },
  )
}
