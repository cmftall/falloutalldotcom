'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Linkedin, CheckCircle, TrendingUp } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function Contact() {
  const { t } = useI18n()

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: '#2d3748', // Explicit Navy Blue (HSL 222 47% 30%)
        color: '#ffffff'
      }}
    >
      {/* Gold Top Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1" 
        style={{ backgroundColor: '#D4AF37' }} // Explicit Gold
      />

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
              <div className="h-px w-12" style={{ backgroundColor: '#D4AF37' }} />
              <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: '#ffffff' }}>
                {t('contact.title')}
              </h2>
              <div className="h-px w-12" style={{ backgroundColor: '#D4AF37' }} />
            </div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Value Proposition Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg p-8 mb-12"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.3)' // Gold border
            }}
          >
            <p className="text-lg text-center mb-8 text-white/90 font-medium">
              {t('contact.value')}
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: '#D4AF37' }} />
                <span className="text-sm text-white/90">{t('contact.service1')}</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: '#D4AF37' }} />
                <span className="text-sm text-white/90">{t('contact.service2')}</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1 transition-transform group-hover:scale-110" style={{ color: '#D4AF37' }} />
                <span className="text-sm text-white/90">{t('contact.service3')}</span>
              </div>
            </div>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Button
              size="lg"
              className="relative text-xl px-10 py-6 font-serif font-semibold shadow-xl rounded-full overflow-hidden group"
              style={{
                backgroundColor: '#D4AF37', // Gold
                color: '#2d3748' // Navy text
              }}
              onClick={() => window.open('mailto:cmftall@gmail.com?subject=Consulting Inquiry', '_blank')}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Mail className="mr-3 h-6 w-6" />
                {t('contact.primaryCta')}
              </span>
            </Button>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg p-6 text-center shadow-sm"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80 font-inter">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" style={{ color: '#D4AF37' }} />
                <span className="font-mono font-semibold">{t('contact.rates')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" style={{ color: '#D4AF37' }} />
                <span>Paris & Montreal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" style={{ color: '#D4AF37' }} />
                <a 
                  href="mailto:cmftall@gmail.com" 
                  className="hover:underline transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  cmftall@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" style={{ color: '#D4AF37' }} />
                <a
                  href="https://www.linkedin.com/in/cmftall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold Bottom Border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1" 
        style={{ backgroundColor: '#D4AF37' }} 
      />
    </section>
  )
}

