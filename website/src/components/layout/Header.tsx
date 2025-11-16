'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { useI18n } from '@/components/providers/I18nProvider'
import { SITE_CONFIG } from '@/lib/constants'
import { openCalendly } from '@/lib/calendly'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const { t } = useI18n()
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Detect active section based on scroll position
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const sections = ['home', 'work', 'faq', 'contact']
    const headerOffset = 100 // Offset for sticky header

    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerOffset

      // Find the section currently in viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }

      // If scrolled to top, set home as active
      if (window.scrollY < 100) {
        setActiveSection('home')
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            ].map((item) => {
              const isActive = activeSection === item.key
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(`navigation.${item.key}`)}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </button>
              )
            })}
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
              ].map((item) => {
                const isActive = activeSection === item.key
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 text-sm font-medium transition-colors text-left focus:outline-none focus:ring-2 focus:ring-accent/50 rounded ${
                      isActive
                        ? 'text-foreground bg-accent/10 border-l-2 border-accent'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-label={`Navigate to ${t(`navigation.${item.key}`)} section`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {t(`navigation.${item.key}`)}
                  </button>
                )
              })}
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