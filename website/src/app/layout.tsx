import type { Metadata } from 'next'
import { Inter, Crimson_Pro } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { ErrorBoundary } from '@/components/ErrorBoundary'

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
  title: 'Fallou TALL - Data Architect Delivering Measurable ROI | €700-1800/day',
  description: 'I deliver measurable ROI through pragmatic data architecture. 8+ years reducing errors by up to 30%, achieving €130K+ annual savings, and building 100+ production pipelines. Business-focused Data Architect for enterprise consulting.',
  keywords: ['Data Architect', 'Data Engineering Consultant', 'ROI Data Architecture', 'Enterprise Data Transformation', 'DataOps', 'PySpark Framework', 'Cloud Data Architecture', 'Paris', 'France', 'Montreal', 'Canada', 'National Bank of Canada', 'Orange', 'Sopra Steria', 'Azure', 'AWS', 'Databricks', 'Data Quality', 'Cost Reduction', 'Business Value'],
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
    title: 'Fallou TALL - Data Architect Delivering Measurable ROI',
    description: 'I deliver measurable ROI through pragmatic data architecture. 8+ years achieving €130K+ annual savings, up to 30% error reduction, 100+ production pipelines built. Trusted by National Bank of Canada, Orange, Onepoint, Sopra Steria.',
    url: 'https://falloutall.com',
    siteName: 'Fallou TALL - Data Architecture Consulting',
    images: [
      {
        url: '/fallou-tall-photo.jpg',
        width: 1024,
        height: 768,
        alt: 'Fallou TALL - Business Value-Focused Data Architect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fallou TALL - Data Architect Delivering Measurable ROI',
    description: 'I deliver measurable ROI through pragmatic data architecture. €130K+ annual savings, up to 30% error reduction, 100+ production pipelines. €700-1800/day consulting.',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fallou TALL',
    jobTitle: 'Senior Data Architect',
    description: 'Data Architect delivering measurable ROI through pragmatic data architecture. Specialized in enterprise data transformations, DataOps, and cloud-native solutions.',
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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}