'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { useI18n } from '@/components/providers/I18nProvider'
import { SITE_CONFIG } from '@/lib/constants'
import { openCalendly } from '@/lib/calendly'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useI18n()
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const headerOffset = 80 // Height of sticky header + padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Focus management: focus the target element after scroll
      setTimeout(() => {
        element.focus({ preventScroll: true })
      }, 500)
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (typeof window === 'undefined') return
    
    const locale = pathname.startsWith('/fr') ? 'fr' : 'en'
    router.push(`/${locale}#home`)
    // Small delay to ensure route change before scrolling
    setTimeout(() => {
      if (typeof document === 'undefined') return
      const element = document.getElementById('home')
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group"
            aria-label="Go to home"
          >
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">FT</span>
            </div>
            <span className="font-bold text-lg text-foreground">{SITE_CONFIG.name}</span>
          </button>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { href: '#home', key: 'home' },
              { href: '#work', key: 'work' },
              { href: '#faq', key: 'faq' },
              { href: '#contact', key: 'contact' }
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(`navigation.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Desktop Actions - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSelector />
            <Button
              onClick={() => {
                const buttonText = typeof t('navigation.hireMeCta') === 'string' ? t('navigation.hireMeCta') : 'Hire Me'
                openCalendly('header', buttonText)
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2.5 rounded-lg font-medium transition-colors shadow-md"
              aria-label={typeof t('navigation.hireMeCta') === 'string' ? t('navigation.hireMeCta') : 'Hire Me'}
            >
              {t('navigation.hireMeCta')}
            </Button>
          </div>

          {/* Mobile Actions - Only visible on mobile */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSelector size="sm" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Only visible on mobile when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="flex flex-col space-y-2 py-4" role="navigation" aria-label="Main navigation">
              {[
                { href: '#home', key: 'home' },
                { href: '#work', key: 'work' },
                { href: '#faq', key: 'faq' },
                { href: '#contact', key: 'contact' }
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left focus:outline-none focus:ring-2 focus:ring-accent/50 rounded"
                  aria-label={`Navigate to ${t(`navigation.${item.key}`)} section`}
                >
                  {t(`navigation.${item.key}`)}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button
                  onClick={() => {
                    const buttonText = typeof t('navigation.hireMeCta') === 'string' ? t('navigation.hireMeCta') : 'Hire Me'
                    openCalendly('header_mobile', buttonText)
                  }}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  aria-label={typeof t('navigation.hireMeCta') === 'string' ? t('navigation.hireMeCta') : 'Hire Me'}
                >
                  {t('navigation.hireMeCta')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}