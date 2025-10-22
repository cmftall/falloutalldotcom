// Custom i18n implementation for static export compatibility
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
export async function loadMessages(locale: Locale) {
  try {
    const messages = await import(`../messages/${locale}.json`)
    return messages.default
  } catch (error) {
    console.warn(`Failed to load messages for locale ${locale}:`, error)
    try {
      const fallback = await import(`../messages/${defaultLocale}.json`)
      return fallback.default
    } catch (fallbackError) {
      console.error('Failed to load fallback messages:', fallbackError)
      return {}
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
export function getTranslation(messages: any, key: string): any {
  const keys = key.split('.')
  
  let result = messages
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k]
    } else {
      return key // Return key if translation not found
    }
  }
  
  return result // Return the actual result (string, object, array, etc.)
}