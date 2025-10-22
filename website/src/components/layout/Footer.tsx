'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { useI18n } from '@/components/providers/I18nProvider'
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useI18n()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FT</span>
              </div>
              <span className="font-bold text-lg">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {SITE_CONFIG.description}
            </p>
          </div>

                 {/* Quick Links */}
                 <div className="space-y-4">
                   <h3 className="font-semibold">{t('contact.quickLinks')}</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { href: '#home', key: 'home', label: 'Home' },
                { href: '#work', key: 'about', label: 'About' },
                { href: '#expertise', key: 'expertise', label: 'Expertise' },
                { href: '#education', key: 'education', label: 'Education' },
                { href: '#certifications', key: 'certifications', label: 'Certifications' },
                { href: '#contact', key: 'contact', label: 'Contact' }
              ].map((item) => (
                       <Link
                         key={item.href}
                         href={item.href}
                         className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                       >
                         {t(`navigation.${item.key}`)}
                       </Link>
              ))}
            </nav>
          </div>

                 {/* Contact */}
                 <div className="space-y-4">
                   <h3 className="font-semibold">{t('contact.title')}</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{CONTACT_INFO.location}</p>
              <p className="text-sm text-muted-foreground">{CONTACT_INFO.email}</p>
              <p className="text-sm text-muted-foreground">{CONTACT_INFO.phone}</p>
            </div>
            <div className="flex space-x-4">
                     <Link
                       href={CONTACT_INFO.linkedin}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-primary transition-colors"
                       aria-label="LinkedIn"
                     >
                       <Linkedin className="h-5 w-5" />
                     </Link>
                     <Link
                       href={CONTACT_INFO.github || '#'}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-primary transition-colors"
                       aria-label="GitHub"
                     >
                       <Github className="h-5 w-5" />
                     </Link>
                     <Link
                       href={`mailto:${CONTACT_INFO.email}`}
                       className="text-muted-foreground hover:text-primary transition-colors"
                       aria-label="Email"
                     >
                       <Mail className="h-5 w-5" />
                     </Link>
            </div>
          </div>
        </div>

               <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                          {t('footer.copyright')}
                        </p>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <LanguageSelector size="sm" variant="ghost" />
                          <p className="text-sm text-muted-foreground">
                            {t('footer.builtWith')}
                          </p>
                        </div>
               </div>
      </div>
    </footer>
  )
}