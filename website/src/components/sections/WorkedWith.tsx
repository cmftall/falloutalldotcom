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
    <section className="py-20 bg-card border-y border-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Gold "Trusted By" Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-accent">
                Trusted By
              </h2>
              <div className="h-px w-12 bg-accent" />
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Proven results across enterprise organizations
            </p>
          </motion.div>

          {/* Logos Grid - Premium B&W Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="relative w-full h-20 flex items-center justify-center p-4">
                  {/* Premium Placeholder with Gold Accent on Hover */}
                  <div className="relative w-full h-full bg-background border border-border rounded-lg flex items-center justify-center group-hover:border-accent transition-all duration-300 group-hover:shadow-lg">
                    {/* Gold corner accent */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <span className="text-xs md:text-sm font-semibold text-center text-primary px-2 font-serif">
                      {company.name}
                    </span>
                  </div>
                  {/* Uncomment when logos are added:
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-500 p-4"
                  />
                  */}
                </div>
                <span className="text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {company.industry}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Industry Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-4 py-2 bg-background border border-accent/20 text-primary rounded-full hover:border-accent hover:shadow-sm transition-all duration-300">
                Banking & Finance
              </span>
              <span className="px-4 py-2 bg-background border border-accent/20 text-primary rounded-full hover:border-accent hover:shadow-sm transition-all duration-300">
                Telecommunications
              </span>
              <span className="px-4 py-2 bg-background border border-accent/20 text-primary rounded-full hover:border-accent hover:shadow-sm transition-all duration-300">
                Consulting
              </span>
              <span className="px-4 py-2 bg-background border border-accent/20 text-primary rounded-full hover:border-accent hover:shadow-sm transition-all duration-300">
                Technology
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

