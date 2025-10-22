import { locales, type Locale } from './i18n'

export type LanguageSource = 'detected' | 'manual'

export interface LanguagePreference {
  locale: Locale
  source: LanguageSource
  timestamp: number
  persistent: boolean
}

/**
 * Detect the user's preferred language from browser settings
 * Falls back to English if no supported language is detected
 */
export const detectLanguage = (): Locale => {
  if (typeof window === 'undefined') return 'en'
  
  try {
    // Get primary language from navigator.language
    const primary = navigator.language.split('-')[0]
    
    // Check if primary language is supported
    if (locales.includes(primary as Locale)) {
      return primary as Locale
    }
    
    // Check navigator.languages array for fallback
    for (const lang of navigator.languages) {
      const code = lang.split('-')[0]
      if (locales.includes(code as Locale)) {
        return code as Locale
      }
    }
  } catch (error) {
    console.warn('Language detection failed:', error)
  }
  
  // Default fallback to English
  return 'en'
}

/**
 * Save language preference to localStorage
 */
export const saveLanguagePreference = (locale: Locale, source: LanguageSource = 'manual'): void => {
  if (typeof window === 'undefined') return
  
  try {
    const preference: LanguagePreference = {
      locale,
      source,
      timestamp: Date.now(),
      persistent: true
    }
    
    localStorage.setItem('language-preference', JSON.stringify(preference))
  } catch (error) {
    console.warn('Failed to save language preference:', error)
  }
}

/**
 * Load language preference from localStorage
 */
export const loadLanguagePreference = (): Locale | null => {
  if (typeof window === 'undefined') return null
  
  try {
    const stored = localStorage.getItem('language-preference')
    if (!stored) return null
    
    const preference: LanguagePreference = JSON.parse(stored)
    
    // Validate the stored preference
    if (locales.includes(preference.locale)) {
      return preference.locale
    }
  } catch (error) {
    console.warn('Failed to load language preference:', error)
  }
  
  return null
}

/**
 * Get the best available language for the user
 * Priority: stored preference > detected language > fallback
 */
export const getBestLanguage = (): Locale => {
  // Try to load stored preference first
  const stored = loadLanguagePreference()
  if (stored) return stored
  
  // Fall back to browser detection
  return detectLanguage()
}

/**
 * Check if a language is supported
 */
export const isSupportedLanguage = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale)
}

/**
 * Get all supported locales
 */
export const getSupportedLocales = (): readonly Locale[] => {
  return locales
}
