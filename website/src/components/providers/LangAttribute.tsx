'use client'

import { useEffect } from 'react'
import { useI18n } from './I18nProvider'

/**
 * Client component that dynamically updates the HTML lang attribute
 * based on the current locale from I18nProvider.
 */
export function LangAttribute() {
  let locale: 'en' | 'fr' = 'en'
  
  try {
    // Only try to use I18n if we're inside the provider
    const i18n = useI18n()
    locale = i18n.locale
  } catch {
    // Fallback if I18nProvider is not available yet (shouldn't happen but safe)
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      locale = pathname.startsWith('/fr') ? 'fr' : 'en'
    }
  }

  useEffect(() => {
    // Update html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  // This component doesn't render anything
  return null
}

