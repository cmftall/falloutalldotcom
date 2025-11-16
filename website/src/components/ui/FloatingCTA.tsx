'use client'

import { useState, useEffect } from 'react'
import { Calendar, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/components/providers/I18nProvider'
import { SITE_CONFIG } from '@/lib/constants'
import { trackEvent } from '@/lib/analytics'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    // Show after user scrolls down 300px
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true)
      } else if (window.scrollY <= 300) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border-2 border-accent/50 rounded-lg shadow-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm md:text-base font-semibold text-foreground mb-1">
              {(() => {
                try {
                  const title = t('hero.floatingCta.title')
                  if (typeof title === 'string' && title && !title.includes('floatingCta')) {
                    return title
                  }
                } catch {
                  // Fallback
                }
                return 'Ready to reduce data errors?'
              })()}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              {(() => {
                try {
                  const subtitle = t('hero.floatingCta.subtitle')
                  if (typeof subtitle === 'string' && subtitle && !subtitle.includes('floatingCta')) {
                    return subtitle
                  }
                } catch {
                  // Fallback
                }
                return 'Book a free strategy call - no commitment'
              })()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                trackEvent('cta_click', {
                  location: 'floating_cta',
                  cta_type: 'calendly',
                  button_text: (() => {
                    try {
                      const button = t('hero.floatingCta.button')
                      if (typeof button === 'string' && button && !button.includes('floatingCta')) {
                        return button
                      }
                } catch {
                  // Fallback
                }
                return 'Book Call'
              })()
            })
            const link = document.createElement('a')
            link.href = SITE_CONFIG.links.calendly
            link.target = '_blank'
            link.rel = 'noopener noreferrer'
            link.click()
          }}
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold shadow-lg"
        >
          <Calendar className="mr-2 h-4 w-4" />
          {(() => {
            try {
              const button = t('hero.floatingCta.button')
              if (typeof button === 'string' && button && !button.includes('floatingCta')) {
                return button
              }
            } catch {
              // Fallback
            }
                return 'Book Call'
              })()}
            </Button>
            <button
              onClick={() => {
                setIsDismissed(true)
                setIsVisible(false)
              }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

