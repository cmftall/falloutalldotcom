import { ErrorBoundary } from '@/components/ErrorBoundary'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { LangAttribute } from '@/components/providers/LangAttribute'
import { loadMessages } from '@/lib/i18n'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  alternates: {
    languages: {
      'fr': 'https://falloutall.com/fr',
      'en': 'https://falloutall.com/en',
      'x-default': 'https://falloutall.com/en',
    },
  },
}

export default async function FrLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await loadMessages('fr')
  
  // Validate messages were loaded
  if (!messages || typeof messages !== 'object' || Object.keys(messages).length === 0) {
    console.error('Failed to load French messages')
  }

  return (
    <I18nProvider initialLocale="fr" initialMessages={messages}>
      <ErrorBoundary>
        <LangAttribute />
        <div className="min-h-screen bg-background">
          <Header />
          <main className="flex-1">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </I18nProvider>
  )
}
