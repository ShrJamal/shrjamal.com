import type { APIRoute } from 'astro'

export const prerender = true

export const GET: APIRoute = async () => {
  const main = ['/'].map((path) =>
    getXMLEntry({ path, lastmod: '27 March 2024' }),
  )

  return new Response(genSitemap([...main]), {
    headers: {
      'content-type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, must-revalidate', // 1 day
    },
  })
}

function genSitemap(urls: string[]) {
  const resArr = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ]
  resArr.push(...urls)
  resArr.push('</urlset>')
  return resArr.join('\n')
}

function getXMLEntry(e: { path: string; lastmod?: string }) {
  const arr = ['<url>']
  arr.push(`<loc>${import.meta.env.SITE}${e.path}</loc>`)
  if (e.lastmod)
    arr.push(`<lastmod>${new Date(e.lastmod).toISOString()}</lastmod>`)
  arr.push('</url>')
  return arr.join('\n')
}
