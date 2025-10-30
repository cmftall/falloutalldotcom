'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Locale, detectLocale, setLocale, getTranslation } from '@/lib/i18n'

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
    if (process.env.NODE_ENV === 'development') {
      console.log('I18nProvider initialized:', {
        locale,
        hasMessages: !!messages,
        hasNavigation: !!messages?.navigation,
        sampleKey: messages?.navigation?.home
      })
    }
  }, [locale, messages])

  const handleSetLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale)
    setLocale(newLocale)
    
    // Update URL to reflect new locale
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
    router.push(newPath)
  }

  const t = (key: string): any => {
    try {
      if (!messages || typeof messages !== 'object') {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`No messages available for key "${key}"`)
        }
        return key
      }
      const result = getTranslation(messages, key)
      if (result === key && process.env.NODE_ENV === 'development') {
        console.warn(`Translation not found for key "${key}"`, {
          messagesKeys: Object.keys(messages || {}),
          keyPath: key.split('.'),
          navigationExists: !!messages?.navigation
        })
      }
      return result
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error(`Translation error for key "${key}":`, error)
      }
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
