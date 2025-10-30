'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { ChevronDown, ChevronUp, ArrowDown } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { useState } from 'react'

import type { FAQItem } from '@/lib/types'

export function FAQ() {
  const { t } = useI18n()
  const [openIndex, setOpenIndex] = useState<number | null>(null) // Start with all closed
  const faqs = t('faq.items') as FAQItem[]

  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate FAQ schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq: FAQItem) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-24 bg-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                {t('faq.title')}
              </h2>
              <div className="h-px w-12 bg-accent" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq: FAQItem, index: number) => {
              const isOpen = openIndex === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="bg-background border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      aria-label={`${isOpen ? 'Hide' : 'Show'} answer for: ${faq.question}`}
                    >
                      <h3 id={`faq-question-${index}`} className="font-serif text-lg md:text-xl font-bold text-primary pr-8 group-hover:text-accent transition-colors">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-accent transition-transform" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        )}
                      </div>
                    </button>
                    
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* CTA after FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              {t('faq.ctaText')}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
              aria-label={t('faq.ctaButton') as string}
            >
              <span>{t('faq.ctaButton')}</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

