import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { Header } from '@/components/layout/Header'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Analytics } from '@/components/Analytics'
import dynamic from 'next/dynamic'

// Lazy load Footer
const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="animate-pulse bg-muted h-16"></div>
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Fallou TALL - Senior Data Architect & Lead Data Engineer',
  description: 'Senior Data Architect with 8+ years of experience leading enterprise transformations. I design cloud-native solutions that process petabytes of data and deliver measurable business impact.',
  keywords: ['Data Architect', 'Data Engineer', 'Machine Learning', 'Cloud Architecture', 'DataOps', 'Paris', 'France', 'Montreal', 'Canada', 'Sopra Steria', 'Azure', 'AWS', 'Databricks', 'Python', 'Spark', 'Enterprise Data'],
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
    title: 'Fallou TALL - Senior Data Architect & Lead Data Engineer',
    description: 'Senior Data Architect with 8+ years of experience leading enterprise transformations. I design cloud-native solutions that process petabytes of data and deliver measurable business impact.',
    url: 'https://falloutall.com',
    siteName: 'Fallou TALL',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Fallou TALL - Senior Data Architect & Lead Data Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fallou TALL - Senior Data Architect & Lead Data Engineer',
    description: 'Senior Data Architect with 8+ years of experience leading enterprise transformations. I design cloud-native solutions that process petabytes of data.',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fallou TALL',
    jobTitle: 'Senior Data Architect & Lead Data Engineer',
    description: 'Senior Data Architect with 8+ years of experience leading enterprise transformations. I design cloud-native solutions that process petabytes of data and deliver measurable business impact.',
    url: 'https://falloutall.com',
    image: 'https://falloutall.com/og-image.svg',
    sameAs: [
      'https://www.linkedin.com/in/cmftall',
      'https://www.github.com/cmftall'
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressCountry: 'France'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Montreal',
        addressCountry: 'Canada'
      }
    ],
    email: 'cmftall@gmail.com',
    telephone: '+33 7 67 07 01 79',
    worksFor: {
      '@type': 'Organization',
      name: 'Sopra Steria',
      url: 'https://www.soprasteria.fr'
    },
    knowsAbout: [
      'Data Architecture',
      'Cloud Platforms',
      'Machine Learning',
      'DataOps',
      'Azure Data Factory',
      'AWS Glue',
      'Databricks',
      'Python',
      'Apache Spark',
      'SQL',
      'Terraform',
      'Kubernetes',
      'Apache Kafka',
      'Snowflake',
      'Enterprise Data'
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'African Institute for Mathematical Sciences (AIMS)',
        location: 'Sénégal'
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Université Cheikh Anta Diop',
        location: 'Dakar, Sénégal'
      }
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Data Architect',
      description: 'Designing and implementing enterprise data architectures for large organizations',
      occupationLocation: {
        '@type': 'City',
        name: 'Paris, France'
      }
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <div className="min-h-screen bg-background">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Analytics />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}