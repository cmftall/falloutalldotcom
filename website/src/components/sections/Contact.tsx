'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Linkedin, CheckCircle, TrendingUp, Calendar } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants'

export function Contact() {
  const { t } = useI18n()

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-background"
    >

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                {t('contact.title')}
              </h2>
              <div className="h-px w-12 bg-accent" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Availability Badge */}
          {(() => {
            const availability = t('contact.availability')
            return availability && typeof availability === 'string' && availability.trim() !== ''
          })() && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-accent">{t('contact.availability')}</span>
              </div>
            </motion.div>
          )}

          {/* Value Proposition Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-accent/20 rounded-xl p-8 mb-12 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <p className="text-lg text-center mb-8 text-foreground font-medium">
              {t('contact.value')}
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110 text-accent" />
                <span className="text-sm text-foreground">{t('contact.service1')}</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110 text-accent" />
                <span className="text-sm text-foreground">{t('contact.service2')}</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110 text-accent" />
                <span className="text-sm text-foreground">{t('contact.service3')}</span>
              </div>
            </div>
          </motion.div>

          {/* How I Work Process */}
          {(() => {
            const processTitle = t('contact.processTitle')
            return processTitle && typeof processTitle === 'string' && processTitle.trim() !== ''
          })() && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card border border-accent/20 rounded-xl p-8 mb-12 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-bold text-primary mb-6 text-center">
                {t('contact.processTitle')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">1</span>
                  </div>
                  <p className="text-sm text-foreground pt-1">{t('contact.processStep1')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">2</span>
                  </div>
                  <p className="text-sm text-foreground pt-1">{t('contact.processStep2')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">3</span>
                  </div>
                  <p className="text-sm text-foreground pt-1">{t('contact.processStep3')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">4</span>
                  </div>
                  <p className="text-sm text-foreground pt-1">{t('contact.processStep4')}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Pricing Details */}
          {t('contact.pricingTitle') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-accent/20 rounded-xl p-8 mb-12 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-bold text-primary mb-6 text-center">
                {t('contact.pricingTitle')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <p className="text-sm text-foreground">{t('contact.pricingStandard')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <p className="text-sm text-foreground">{t('contact.pricingComplex')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                  <p className="text-sm text-foreground">{t('contact.pricingProject')}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12 space-y-4"
          >
            <Button
              size="lg"
              className="text-xl px-10 py-6 font-serif font-semibold rounded-lg group bg-accent text-accent-foreground hover:bg-accent/90"
              style={{
                boxShadow: '0 10px 15px -3px rgba(212, 175, 55, 0.4), 0 4px 6px -2px rgba(212, 175, 55, 0.2)'
              }}
              onClick={() => {
                const link = document.createElement('a')
                link.href = SITE_CONFIG.links.calendly
                link.target = '_blank'
                link.rel = 'noopener noreferrer'
                link.click()
              }}
            >
              <Calendar className="mr-3 h-6 w-6" />
              {t('contact.primaryCta')}
            </Button>
            <div>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-5 font-serif font-semibold"
                onClick={() => {
                  window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(t('contact.emailSubject'))}`
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('contact.emailCta')}
              </Button>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-accent/20 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground font-inter">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{t('contact.locationText')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(t('contact.emailSubject'))}`} 
                  className="text-primary hover:underline transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-accent" />
                <a
                  href="https://www.linkedin.com/in/cmftall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline transition-colors"
                >
                  {t('contact.linkedin')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

