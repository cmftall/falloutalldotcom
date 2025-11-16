// Dynamic sitemap generation
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://falloutall.com'
  
  // Validate required environment variable in production
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_SITE_URL) {
    console.error('⚠️  NEXT_PUBLIC_SITE_URL is required for production sitemap generation')
  }
  
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
