import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jdreyes.dev'
  return [
    { url: `${baseUrl}/es`, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/en`, lastModified: new Date(), priority: 0.8 },
  ]
}