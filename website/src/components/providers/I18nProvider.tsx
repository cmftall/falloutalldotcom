'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Locale, detectLocale, setLocale, getTranslation } from '@/lib/i18n'

interface I18nContextType {
  locale: Locale
  messages: any
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
  initialLocale: Locale
  initialMessages: any
}

export function I18nProvider({ children, initialLocale, initialMessages }: I18nProviderProps) {
  const [locale, setCurrentLocale] = useState<Locale>(initialLocale)
  const [messages] = useState(initialMessages)
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

  const handleSetLocale = (newLocale: Locale) => {
    setCurrentLocale(newLocale)
    setLocale(newLocale)
    
    // Update URL to reflect new locale
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
    router.push(newPath)
  }

  const t = (key: string) => {
    return getTranslation(messages, key)
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
