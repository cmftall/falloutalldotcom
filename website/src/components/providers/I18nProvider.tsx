'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Locale, detectLocale, setLocale, getTranslation } from '@/lib/i18n'
import { logger } from '@/lib/logger'

import type { TranslationMessages } from '@/lib/types'

interface I18nContextType {
  locale: Locale
  messages: TranslationMessages
  setLocale: (locale: Locale) => void
  t: (key: string) => any
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
  initialLocale: Locale
  initialMessages: TranslationMessages
}

export function I18nProvider({ children, initialLocale, initialMessages }: I18nProviderProps) {
  const [locale, setCurrentLocale] = useState<Locale>(initialLocale)
  const [messages] = useState<TranslationMessages>(initialMessages)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Detect locale on client side
    const detectedLocale = detectLocale()
    if (detectedLocale !== locale) {
      setCurrentLocale(detectedLocale)
      setLocale(detectedLocale)
    }
  }, [locale])

  // Debug: Log messages in development
  useEffect(() => {
    logger.debug('I18nProvider initialized', {
      locale,
      hasMessages: !!messages,
      hasNavigation: !!messages?.navigation,
      sampleKey: messages?.navigation?.home
    })
  }, [locale, messages])

  const handleSetLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale)
    setLocale(newLocale)
    
    // Update URL to reflect new locale
    // Handle both /en/... and /fr/... paths, as well as root paths
    let newPath: string
    if (pathname.match(/^\/[a-z]{2}(\/|$)/)) {
      // Path already has locale prefix
      newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
    } else {
      // Path doesn't have locale prefix, add it
      newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`
    }
    router.push(newPath)
  }

  const t = (key: string): any => {
    try {
      if (!messages || typeof messages !== 'object') {
        logger.warn(`No messages available for key "${key}"`)
        return key
      }
      const result = getTranslation(messages, key)
      if (result === key) {
        logger.warn(`Translation not found for key "${key}"`, {
          messagesKeys: Object.keys(messages || {}),
          keyPath: key.split('.'),
          navigationExists: !!messages?.navigation
        })
      }
      return result
    } catch (error) {
      logger.error(`Translation error for key "${key}"`, error instanceof Error ? error : new Error(String(error)))
      return key
    }
  }

  return (
    <I18nContext.Provider value={{ locale, messages, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
