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
  title: 'Fallou TALL - Data Architect Consultant | €1,200-1,800/day',
  description: 'Data Architect Consultant | €200K+ annual value delivered | Fix broken data systems | €1,200-1,800/day | Available immediately for 2-6 month projects',
  keywords: ['Data Architect Consultant', 'Data Architecture Consultant', 'Data Engineering Consultant', 'ROI Data Architecture', 'Enterprise Data Transformation', 'DataOps', 'PySpark Framework', 'Cloud Data Architecture', 'Paris', 'France', 'Montreal', 'Canada', 'National Bank of Canada', 'Orange', 'Sopra Steria', 'Azure', 'AWS', 'Databricks', 'Data Quality', 'Cost Reduction', 'Business Value', 'Freelance Data Architect', 'Independent Data Consultant'],
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
    title: 'Fallou TALL - Data Architect Consultant | Measurable ROI',
    description: 'Data Architect Consultant | €200K+ annual value delivered | Fix broken data systems | €1,200-1,800/day | Available immediately',
    url: 'https://falloutall.com',
    siteName: 'Fallou TALL - Data Architect Consultant',
    images: [
      {
        url: '/fallou-tall-photo.jpg',
        width: 1024,
        height: 768,
        alt: 'Fallou TALL - Data Architect Consultant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fallou TALL - Data Architect Consultant',
    description: 'Data Architect Consultant | €200K+ annual value | Fix broken data systems | €1,200-1,800/day | Available immediately',
    images: ['/fallou-tall-photo.jpg'],
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
    jobTitle: 'Data Architect Consultant',
    description: 'Data Architect Consultant delivering measurable ROI through pragmatic data architecture. Specialized in enterprise data transformations, DataOps, and cloud-native solutions. Available for 2-6 month consulting projects.',
    url: 'https://falloutall.com',
    image: 'https://falloutall.com/fallou-tall-photo.jpg',
    sameAs: [
      'https://www.linkedin.com/in/cmftall',
      'https://github.com/cmftall'
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
    name: 'Data Architect Consulting Services',
    provider: {
      '@type': 'Person',
      name: 'Fallou TALL',
      jobTitle: 'Data Architect Consultant'
    },
    description: 'Enterprise data architecture consulting services delivering measurable ROI. Specialized in fixing broken data systems, reducing costs, and improving data quality. Available for 2-6 month consulting projects.',
    serviceType: 'Data Architecture Consulting',
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
      price: '1200-1800',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1200-1800',
        priceCurrency: 'EUR',
        unitCode: 'DAY',
        unitText: 'per day'
      }
    },
    url: 'https://falloutall.com',
    aggregateRating: null // Add when testimonials available
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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