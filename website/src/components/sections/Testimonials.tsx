'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function Testimonials() {
  const { t } = useI18n()
  const testimonials = t('testimonials.testimonials') as any[]

  if (!testimonials || !Array.isArray(testimonials)) {
    return null
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4 mx-auto">
                    <Quote className="h-6 w-6 text-accent" />
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-center mb-6">
                    <p className="text-base text-foreground leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  
                  {/* Author */}
                  <div className="text-center">
                    <div className="font-semibold text-primary text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-accent font-medium mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
