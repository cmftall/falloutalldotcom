import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Analytics } from '@/components/Analytics'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { loadMessages } from '@/lib/i18n'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default async function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await loadMessages('en')

  return (
    <I18nProvider initialLocale="en" initialMessages={messages}>
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
    </I18nProvider>
  )
}
