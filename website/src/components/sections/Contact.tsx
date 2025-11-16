'use client'

// Removed motion imports - using static layout for better performance
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Linkedin, CheckCircle, Calendar } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { CONTACT_INFO } from '@/lib/constants'
import { openCalendly } from '@/lib/calendly'

export function Contact() {
  const { t } = useI18n()

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 relative overflow-hidden bg-background"
    >

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 mb-6 md:mb-8">
              {t('contact.subtitle')}
            </p>
            
            {/* Primary CTA - IMMEDIATELY VISIBLE */}
            <div className="mb-6 md:mb-8 px-4">
              <Button
                size="lg"
                className="w-full md:w-auto text-base md:text-xl px-8 md:px-12 py-5 md:py-7 font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg"
                onClick={() => {
                  const buttonText = typeof t('contact.primaryCta') === 'string' ? t('contact.primaryCta') : 'Schedule Free Strategy Call'
                  openCalendly('contact', buttonText)
                }}
                aria-label={typeof t('contact.primaryCta') === 'string' ? t('contact.primaryCta') : 'Schedule a free strategy call'}
              >
                <Calendar className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                {t('contact.primaryCta')}
              </Button>
              
              {/* Guarantee - Visible below CTA */}
              <div className="mt-4 text-center">
                <p className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium text-foreground">{t('contact.guarantee')}</span>
                </p>
              </div>
            </div>

            {/* Availability Badge - More Visible */}
            {(() => {
              const availability = t('contact.availability')
              if (availability && typeof availability === 'string' && availability.trim() !== '') {
                return (
                  <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center space-x-2 bg-red-500/10 border-2 border-red-500/30 rounded-full px-4 md:px-6 py-2 md:py-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-xs md:text-sm font-bold text-red-600 dark:text-red-400">{availability}</span>
                    </div>
                  </div>
                )
              }
              return null
            })()}
          </div>

          {/* Simplified: Value + Process Combined - More Compact */}
          <div className="mb-8 md:mb-10 bg-card border border-border/50 rounded-lg p-4 md:p-6">
            <p className="text-sm md:text-base text-center mb-4 md:mb-5 text-foreground font-medium">
              {t('contact.value')}
            </p>
            
            {/* Services - Inline Compact */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-5 md:mb-6 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" aria-hidden="true" />
                <span>{t('contact.service1')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" aria-hidden="true" />
                <span>{t('contact.service2')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" aria-hidden="true" />
                <span>{t('contact.service3')}</span>
              </div>
            </div>
            
            {/* Process - Compact 2x2 Grid */}
            <div className="border-t border-border/50 pt-4 md:pt-5">
              <h3 className="text-sm md:text-base font-serif font-bold text-primary mb-3 md:mb-4 text-center">
                {t('contact.processTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-2.5 md:gap-3 max-w-xl mx-auto">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <span className="text-accent font-bold text-xs">1</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{t('contact.processStep1')}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <span className="text-accent font-bold text-xs">2</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{t('contact.processStep2')}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <span className="text-accent font-bold text-xs">3</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{t('contact.processStep3')}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <span className="text-accent font-bold text-xs">4</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{t('contact.processStep4')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="border-t border-border pt-8 md:pt-12 text-center px-4">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground font-inter">
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 text-accent" aria-hidden="true" />
                <span>{t('contact.locationText')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 md:h-4 md:w-4 text-accent" aria-hidden="true" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(t('contact.emailSubject'))}`} 
                  className="text-primary hover:underline transition-colors break-all"
                  aria-label={`Send email to ${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-3 w-3 md:h-4 md:w-4 text-accent" aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/cmftall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline transition-colors"
                  aria-label={`Visit ${t('contact.linkedin')} profile`}
                >
                  {t('contact.linkedin')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

