'use client'

import { Mail, Linkedin, MapPin } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'
import { useI18n } from '@/components/providers/I18nProvider'

export function Footer() {
  const { t } = useI18n()

  // Scroll helper function with SSR check
  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    
    const element = document.querySelector(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-2">Fallou TALL</h3>
            <p className="text-sm text-muted-foreground">
              {t('hero.credential')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.navigationTitle')}</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#home')
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navigation.home')}
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#work')
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navigation.work')}
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#faq')
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navigation.faq')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#contact')
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navigation.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.connectTitle')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">{t('contact.locationText')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(t('contact.emailSubject'))}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/cmftall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 rounded-lg text-accent font-medium text-sm transition-all duration-200 group"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>{t('footer.linkedin')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              {t('footer.availability')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
