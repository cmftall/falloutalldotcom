'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Linkedin, CheckCircle, TrendingUp } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - Consulting Focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {t('contact.subtitle')}
            </p>
            
            {/* Value Proposition */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <p className="text-lg text-foreground font-medium mb-6">
                {t('contact.value')}
              </p>
              
              {/* Services List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{t('contact.service1')}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{t('contact.service2')}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{t('contact.service3')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-xl"
              onClick={() => window.open('mailto:cmftall@gmail.com?subject=Consulting Inquiry', '_blank')}
            >
              <Mail className="mr-2 h-6 w-6" />
              {t('contact.primaryCta')}
            </Button>
          </motion.div>

          {/* Contact Details - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-muted/50 rounded-lg p-6 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>{t('contact.rates')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris & Montreal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:cmftall@gmail.com" className="hover:text-primary transition-colors">
                  cmftall@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <a 
                  href="https://www.linkedin.com/in/cmftall" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}