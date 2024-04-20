import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${['/']
        .map((path) => getXMLEntry({ path, lastmod: '27 March 2024' }))
        .join('')}
    </urlset>
	`,
    {
      headers: {
        'content-type': 'application/xml',
      },
    },
  )
}

function getXMLEntry({
  path,
  changeFreq = 'monthly',
  priority = '0.5',
  lastmod,
}: {
  path: string
  changeFreq?: string
  priority?: string
  lastmod?: string
}) {
  return `
  <url>
    <loc>${import.meta.env.SITE}${path}</loc>
    ${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ''}
    ${changeFreq ? `<changefreq>${changeFreq}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
  </url>
`
}
