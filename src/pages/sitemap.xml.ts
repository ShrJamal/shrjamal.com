import type { APIRoute } from "astro"
import { products } from "~/lib/projects"

export const prerender = true

export const GET: APIRoute = async () => {
  // The site is rebuilt on every deploy, so the build time is the last change.
  const lastmod = new Date().toISOString()
  const paths = ["/", ...products.map((p) => `/work/${p.slug}`)]
  const entries = paths.map((path) => getXMLEntry({ path, lastmod }))

  return new Response(genSitemap(entries), {
    headers: {
      "content-type": "application/xml",
      "Cache-Control": "public, max-age=86400, must-revalidate", // 1 day
    },
  })
}

function genSitemap(urls: string[]) {
  const resArr = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ]
  resArr.push(...urls)
  resArr.push("</urlset>")
  return resArr.join("\n")
}

function getXMLEntry(e: { path: string; lastmod?: string }) {
  const arr = ["<url>"]
  arr.push(`<loc>${new URL(e.path, import.meta.env.SITE).href}</loc>`)
  if (e.lastmod) arr.push(`<lastmod>${e.lastmod}</lastmod>`)
  arr.push("</url>")
  return arr.join("\n")
}
