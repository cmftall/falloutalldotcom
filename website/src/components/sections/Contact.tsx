'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, MapPin, Linkedin, CheckCircle, Award } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gold Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Premium Header with Gold Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <Award className="h-6 w-6 text-accent" />
              <div className="h-px w-12 bg-accent" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Value Proposition Card with Gold Border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card/10 backdrop-blur-sm border border-accent/30 rounded-lg p-8 mb-12"
          >
            <p className="text-lg text-center mb-8 text-primary-foreground/90 font-medium">
              {t('contact.value')}
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-primary-foreground/90">{t('contact.service1')}</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-primary-foreground/90">{t('contact.service2')}</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-primary-foreground/90">{t('contact.service3')}</span>
              </div>
            </div>
          </motion.div>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-300 group relative overflow-hidden"
              onClick={() => window.open('mailto:cmftall@gmail.com?subject=Consulting Inquiry - Data Architecture', '_blank')}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              <span>{t('contact.primaryCta')}</span>
              <span className="ml-3 font-mono text-sm opacity-90">€700-1800/day</span>
            </Button>
          </motion.div>

          {/* Contact Details - Elegant List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-primary-foreground/70"
          >
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Mail className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
              <a href="mailto:cmftall@gmail.com" className="hover:text-accent transition-colors font-medium">
                cmftall@gmail.com
              </a>
            </div>
            
            <div className="hidden md:block w-px h-4 bg-accent/30" />
            
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Linkedin className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
              <a 
                href="https://www.linkedin.com/in/cmftall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors font-medium"
              >
                LinkedIn
              </a>
            </div>
            
            <div className="hidden md:block w-px h-4 bg-accent/30" />
            
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="font-medium">Paris & Montreal</span>
            </div>
          </motion.div>

          {/* Availability Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-xs text-primary-foreground/50 italic">
              Currently accepting select consulting engagements for Q1 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gold Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
    </section>
  )
}
