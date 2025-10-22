// Dynamic sitemap generation
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://falloutall.com'
  const locales = ['en', 'fr']
  
  // Generate pages for each locale
  const pages = []
  
  for (const locale of locales) {
    pages.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    })
  }
  
  // Add root redirect
  pages.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  })

  return pages
}
