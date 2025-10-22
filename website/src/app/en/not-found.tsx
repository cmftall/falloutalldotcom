import { I18nProvider } from '@/components/providers/I18nProvider'
import { NotFoundContent } from '@/components/NotFoundContent'
import { loadMessages } from '@/lib/i18n'

export default async function NotFound() {
  const messages = await loadMessages('en')

  return (
    <I18nProvider initialLocale="en" initialMessages={messages}>
      <NotFoundContent locale="en" />
    </I18nProvider>
  )
}
