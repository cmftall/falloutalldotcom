// Custom i18n implementation for static export compatibility
import type { TranslationMessages } from './types'
import enMessages from '../../messages/en.json'
import frMessages from '../../messages/fr.json'

export type Locale = 'en' | 'fr'

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'fr']

// Language detection utilities
export function detectLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  
  const stored = localStorage.getItem('locale') as Locale
  if (stored && locales.includes(stored)) return stored
  
  const browserLang = navigator.language.split('-')[0]
  if (browserLang === 'fr') return 'fr'
  
  return defaultLocale
}

export function setLocale(locale: Locale) {
  if (typeof window === 'undefined') return
  localStorage.setItem('locale', locale)
}

// Translation loading
const MESSAGES_BY_LOCALE: Record<Locale, TranslationMessages> = {
  en: enMessages as unknown as TranslationMessages,
  fr: frMessages as unknown as TranslationMessages,
}

export async function loadMessages(locale: Locale): Promise<TranslationMessages> {
  const selected = MESSAGES_BY_LOCALE[locale] || MESSAGES_BY_LOCALE[defaultLocale]
  // Use dynamic import to avoid SSR issues
  if (typeof window !== 'undefined') {
    const { logger } = await import('./logger')
    logger.debug(`Loaded messages for ${locale}`, {
      hasNavigation: !!selected?.navigation,
      keys: selected ? Object.keys(selected).slice(0, 5) : [],
    })
  }
  return selected
}

// Translation hook for client components
export function useTranslations() {
  if (typeof window === 'undefined') {
    return () => ''
  }
  
  // This will be replaced by the actual implementation
  return (key: string) => key
}

// Server-side translation function
export function getTranslation(messages: TranslationMessages | any, key: string): any {
  if (!messages || typeof messages !== 'object') {
    return key
  }
  
  const keys = key.split('.')
  
  let result = messages
  for (const k of keys) {
    if (result && typeof result === 'object' && result !== null && k in result) {
      result = result[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  // Return undefined if result is null to help catch errors
  if (result === null) {
    return key
  }
  
  return result // Return the actual result (string, object, array, etc.)
}