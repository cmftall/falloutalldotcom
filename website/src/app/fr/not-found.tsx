import { I18nProvider } from '@/components/providers/I18nProvider'
import { NotFoundContent } from '@/components/NotFoundContent'
import { loadMessages } from '@/lib/i18n'

export default async function NotFound() {
  const messages = await loadMessages('fr')

  return (
    <I18nProvider initialLocale="fr" initialMessages={messages}>
      <NotFoundContent locale="fr" />
    </I18nProvider>
  )
}
