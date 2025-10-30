'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { useI18n } from '@/components/providers/I18nProvider'
import { SITE_CONFIG } from '@/lib/constants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useI18n()
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      const headerOffset = 80 // Height of sticky header + padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    const locale = pathname.startsWith('/fr') ? 'fr' : 'en'
    router.push(`/${locale}#home`)
    // Small delay to ensure route change before scrolling
    setTimeout(() => {
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
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
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
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '#home', key: 'home' },
              { href: '#work', key: 'work' },
              { href: '#faq', key: 'faq' },
              { href: '#contact', key: 'contact' }
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {t(`navigation.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Desktop Actions - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg font-medium transition-colors duration-200"
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
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Only visible on mobile when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="flex flex-col space-y-2 py-4">
              {[
                { href: '#home', key: 'home' },
                { href: '#work', key: 'work' },
                { href: '#faq', key: 'faq' },
                { href: '#contact', key: 'contact' }
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t(`navigation.${item.key}`)}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t('navigation.contact')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}