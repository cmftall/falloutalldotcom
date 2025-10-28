'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Linkedin, CheckCircle, TrendingUp, Calendar } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function Contact() {
  const { t } = useI18n()

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Gold Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

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
              className="relative text-xl px-10 py-6 font-serif font-semibold shadow-xl rounded-full overflow-hidden group bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => window.open('https://calendly.com/falloutall', '_blank')}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Calendar className="mr-3 h-6 w-6" />
                {t('contact.primaryCta')}
              </span>
            </Button>
            <div>
              <Button
                size="lg"
                variant="secondary"
                className="relative text-lg px-8 py-5 font-serif font-semibold shadow-lg rounded-full overflow-hidden group"
                onClick={() => window.open('mailto:cmftall@gmail.com?subject=Consulting Inquiry', '_blank')}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  {t('contact.emailCta')}
                </span>
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
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="font-mono font-semibold">{t('contact.rates')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Paris & Montreal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a 
                  href="mailto:cmftall@gmail.com" 
                  className="text-primary hover:underline transition-colors"
                >
                  cmftall@gmail.com
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
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
    </section>
  )
}

