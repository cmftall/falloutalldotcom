import type { Metadata } from 'next'
import { Inter, Crimson_Pro } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
})

export const metadata: Metadata = {
  title: 'Fallou TALL - Data Consultant | Reduce Errors & Improve Efficiency',
  description: 'Data Consultant helping companies reduce data errors and improve efficiency through pragmatic data platforms. Measurable ROI delivered. Available immediately for new projects.',
  keywords: ['Data Consultant', 'Data Engineering Consultant', 'Data Architecture Consultant', 'ROI Data Consulting', 'Enterprise Data Transformation', 'DataOps', 'Data Quality Framework', 'Cloud Data Architecture', 'Paris', 'France', 'Montreal', 'Canada', 'National Bank of Canada', 'Orange', 'Sopra Steria', 'Azure', 'AWS', 'Databricks', 'Data Quality', 'Cost Reduction', 'Business Value', 'Freelance Data Consultant', 'Independent Data Consultant', 'Reduce Data Errors', 'Improve Efficiency'],
  authors: [{ name: 'Fallou TALL' }],
  creator: 'Fallou TALL',
  publisher: 'Fallou TALL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://falloutall.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fallou TALL - Data Consultant | Reduce Errors & Improve Efficiency',
    description: 'Data Consultant helping companies reduce data errors and improve efficiency through pragmatic data platforms. Measurable ROI delivered.',
    url: 'https://falloutall.com',
    siteName: 'Fallou TALL - Data Consultant',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Fallou TALL - Data Consultant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fallou TALL - Data Consultant | Reduce Errors & Improve Efficiency',
    description: 'Data Consultant helping companies reduce data errors and improve efficiency through pragmatic data platforms. Measurable ROI delivered.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fallou TALL',
    jobTitle: 'Data Consultant',
    description: 'Data Consultant delivering measurable ROI through pragmatic data platforms. Specialized in reducing data errors, improving efficiency, and building reliable data systems. Available for 2-6 month consulting projects.',
    url: 'https://falloutall.com',
    image: 'https://falloutall.com/fallou-tall-photo.jpg',
    sameAs: [
      'https://www.linkedin.com/in/cmftall'
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Sopra Steria'
      }
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'AIMS'
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Cheikh Anta Diop University'
      }
    ],
    knowsAbout: [
      'Data Architecture',
      'Data Engineering',
      'Cloud Computing',
      'Machine Learning',
      'DataOps',
      'Apache Spark',
      'Python',
      'Azure',
      'AWS',
      'Databricks'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'France'
    }
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Data Consulting Services',
    provider: {
      '@type': 'Person',
      name: 'Fallou TALL',
      jobTitle: 'Data Consultant'
    },
    description: 'Data consulting services delivering measurable ROI through pragmatic data platforms. Specialized in reducing data errors, improving efficiency, and building reliable data systems. Available for 2-6 month consulting projects.',
    serviceType: 'Data Consulting',
    areaServed: ['France', 'Canada', 'Europe', 'North America'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://falloutall.com',
      servicePhone: null,
      serviceEmail: 'cmftall@gmail.com',
      availableLanguage: ['French', 'English']
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: 'Contact for pricing',
      availability: 'https://schema.org/InStock',
      availabilityStarts: null,
      availabilityEnds: null
    },
    url: 'https://falloutall.com',
    aggregateRating: null // Add when testimonials available
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://falloutall.com'

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical Hero image for LCP optimization - AVIF only (smallest format) */}
        <link
          rel="preload"
          href={`${siteUrl}/fallou-tall-photo.avif`}
          as="image"
          type="image/avif"
          fetchPriority="high"
        />
        {/* Defer JSON-LD scripts to avoid blocking render */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          defer
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          defer
        />
      </head>
      <body className={`${inter.variable} ${crimsonPro.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <Analytics />
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}