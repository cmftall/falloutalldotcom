'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useI18n } from '@/components/providers/I18nProvider'

export function WorkedWith() {
  const { t } = useI18n()

  // Company logos - replace with actual logo files in /public/logos/
  const companies = [
    {
      name: 'National Bank of Canada',
      logo: '/logos/bnc.png', // User needs to add actual logo
      industry: 'Banking',
      alt: 'National Bank of Canada logo'
    },
    {
      name: 'Orange',
      logo: '/logos/orange.png', // User needs to add actual logo
      industry: 'Telecommunications',
      alt: 'Orange logo'
    },
    {
      name: 'Onepoint',
      logo: '/logos/onepoint.png', // User needs to add actual logo
      industry: 'Consulting',
      alt: 'Onepoint logo'
    },
    {
      name: 'Sopra Steria',
      logo: '/logos/sopra-steria.png', // User needs to add actual logo
      industry: 'Technology',
      alt: 'Sopra Steria logo'
    }
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Delivering measurable results across industries
            </p>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center group"
              >
                <div className="relative w-full h-24 mb-2 flex items-center justify-center">
                  {/* Placeholder until user adds actual logos */}
                  <div className="w-32 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105">
                    <span className="text-xs font-semibold text-center text-gray-600 dark:text-gray-300 px-2">
                      {company.name}
                    </span>
                  </div>
                  {/* Uncomment when logos are added:
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  */}
                </div>
                <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {company.industry}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Industry Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="inline-flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-background rounded-full">Banking</span>
              <span className="px-3 py-1 bg-background rounded-full">Telecommunications</span>
              <span className="px-3 py-1 bg-background rounded-full">Consulting</span>
              <span className="px-3 py-1 bg-background rounded-full">Technology</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

