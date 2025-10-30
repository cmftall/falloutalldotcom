// Custom i18n implementation for static export compatibility
import type { TranslationMessages } from './types'

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
export async function loadMessages(locale: Locale): Promise<TranslationMessages> {
  try {
    const messages = await import(`../messages/${locale}.json`)
    const loaded = messages.default || messages
    // Ensure we have a valid messages object
    if (!loaded || typeof loaded !== 'object') {
      throw new Error(`Invalid messages structure for locale ${locale}`)
    }
    if (process.env.NODE_ENV === 'development') {
      console.log(`Loaded messages for ${locale}:`, {
        hasNavigation: !!loaded.navigation,
        keys: Object.keys(loaded).slice(0, 5)
      })
    }
    return loaded as TranslationMessages
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Failed to load messages for locale ${locale}:`, error)
    }
    try {
      const fallback = await import(`../messages/${defaultLocale}.json`)
      const fallbackMessages = fallback.default || fallback
      if (process.env.NODE_ENV === 'development') {
        console.log(`Using fallback messages for ${locale}`)
      }
      return fallbackMessages as TranslationMessages
    } catch (fallbackError) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to load fallback messages:', fallbackError)
      }
      return {} as TranslationMessages
    }
  }
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