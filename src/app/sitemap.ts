import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shrjamal.com',
      lastModified: new Date(),
    },
  ]
}
