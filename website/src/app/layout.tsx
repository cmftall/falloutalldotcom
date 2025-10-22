import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { Analytics } from '@/components/Analytics'
import { ErrorBoundary } from '@/components/ErrorBoundary'

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            {children}
            <Analytics />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}