'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Detect browser language
    if (typeof window === 'undefined') return

    // Check localStorage first (user preference)
    const storedLocale = localStorage.getItem('locale')
    if (storedLocale === 'fr' || storedLocale === 'en') {
      router.replace(`/${storedLocale}`)
      return
    }

    // Detect from browser language
    const browserLang = navigator.language.split('-')[0].toLowerCase()
    const detectedLocale = browserLang === 'fr' ? 'fr' : 'en'
    
    router.replace(`/${detectedLocale}`)
  }, [router])

  // Show loading state while detecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}