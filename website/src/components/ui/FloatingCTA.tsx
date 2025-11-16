'use client'

import { useState, useEffect } from 'react'
import { Calendar, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/components/providers/I18nProvider'
import { openCalendly } from '@/lib/calendly'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const { t } = useI18n()

  // Helper function to safely get translations with fallback
  const getTranslation = (key: string, fallback: string): string => {
    try {
      const value = t(key)
      if (typeof value === 'string' && value && !value.includes(key.split('.').pop() || '')) {
        return value
      }
    } catch {
      // Fallback
    }
    return fallback
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Show after user scrolls down 600px (less intrusive)
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 600 && !isDismissed) {
            setIsVisible(true)
          } else if (window.scrollY <= 600) {
            setIsVisible(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  // Handle Escape key to dismiss
  useEffect(() => {
    if (typeof window === 'undefined' || !isVisible) return
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDismissed(true)
        setIsVisible(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isVisible])

  if (!isVisible || isDismissed) return null

  const title = getTranslation('hero.floatingCta.title', 'Ready to reduce data errors?')
  const subtitle = getTranslation('hero.floatingCta.subtitle', 'Book a free strategy call - no commitment')
  const buttonText = getTranslation('hero.floatingCta.button', 'Book Call')

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card/95 backdrop-blur-sm border border-accent/30 rounded-lg shadow-lg p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm md:text-base font-semibold text-foreground mb-1">
              {title}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                openCalendly('floating_cta', buttonText)
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold shadow-lg"
              aria-label={buttonText}
            >
              <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
              {buttonText}
            </Button>
            <button
              onClick={() => {
                setIsDismissed(true)
                setIsVisible(false)
              }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss floating call-to-action"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

