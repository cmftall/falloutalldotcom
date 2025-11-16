'use client'

import { Card } from '@/components/ui/Card'
import { ChevronDown, ChevronUp, ArrowDown } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

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
    <section id="faq" className="py-20 md:py-32 bg-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 px-4">
            <div className="inline-flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-accent" />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                {t('faq.title')}
              </h2>
              <div className="h-px w-8 md:w-12 bg-accent" />
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 md:space-y-4 px-4">
            {faqs.map((faq: FAQItem, index: number) => {
              const isOpen = openIndex === index
              
              return (
                <div
                  key={index}
                >
                  <Card 
                    className="bg-background border border-border hover:border-accent/50 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-4 md:p-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      aria-label={`${isOpen ? 'Hide' : 'Show'} answer for: ${faq.question}`}
                    >
                      <h3 id={`faq-question-${index}`} className="font-serif text-base md:text-lg lg:text-xl font-bold text-primary pr-4 md:pr-8 group-hover:text-accent transition-colors">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-accent transition-transform" />
                        ) : (
                          <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        )}
                      </div>
                    </button>
                    
                    <div
                      id={`faq-answer-${index}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="px-4 md:px-6 pb-4 md:pb-6">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* CTA after FAQ - Direct to Calendly */}
          <div className="mt-12 md:mt-16 text-center px-4">
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
              {t('faq.ctaText')}
            </p>
            <button
              onClick={() => {
                trackEvent('cta_click', {
                  location: 'faq',
                  cta_type: 'calendly',
                  button_text: t('faq.ctaButton')
                })
                const link = document.createElement('a')
                link.href = 'https://calendly.com/falloutall'
                link.target = '_blank'
                link.rel = 'noopener noreferrer'
                link.click()
              }}
              className="inline-flex items-center space-x-2 px-5 md:px-6 py-2.5 md:py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
              aria-label={t('faq.ctaButton') as string}
            >
              <span>{t('faq.ctaButton')}</span>
              <ArrowDown className="h-3 w-3 md:h-4 md:w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

