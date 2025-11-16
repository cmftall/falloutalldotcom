'use client'

import { useEffect } from 'react'
import { useI18n } from './I18nProvider'

/**
 * Client component that dynamically updates the HTML lang attribute
 * based on the current locale from I18nProvider.
 */
export function LangAttribute() {
  // Hooks must be called unconditionally
  const i18n = useI18n()
  let locale: 'en' | 'fr' = i18n?.locale ?? 'en'
  // Extra safety: fallback from pathname if somehow missing
  if (!locale && typeof window !== 'undefined') {
    const pathname = window.location.pathname
    locale = pathname.startsWith('/fr') ? 'fr' : 'en'
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

