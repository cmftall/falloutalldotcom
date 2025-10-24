'use client'

import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function WorkedWith() {
  const { t } = useI18n()

  // Company data - text-based premium design (no logos needed)
  const companies = [
    {
      name: 'National Bank of Canada',
      short: 'BNC',
      industry: 'Banking',
      location: 'Montreal'
    },
    {
      name: 'Orange',
      short: 'ORANGE',
      industry: 'Telecommunications',
      location: 'Paris'
    },
    {
      name: 'Onepoint',
      short: 'ONEPOINT',
      industry: 'Consulting',
      location: 'Paris'
    },
    {
      name: 'Sopra Steria',
      short: 'SOPRA STERIA',
      industry: 'Technology',
      location: 'Paris'
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

                 {/* Companies Grid - Premium Text-Based Design */}
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                 >
                   {companies.map((company, index) => (
                     <motion.div
                       key={company.name}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.5, delay: index * 0.1 }}
                       viewport={{ once: true }}
                       className="group"
                     >
                       <div className="relative bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden h-full">
                         {/* Gold corner accents on hover */}
                         <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                         <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                         <div className="relative z-10">
                           {/* Company Icon */}
                           <div className="flex items-center justify-center mb-4">
                             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                               <Building2 className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                             </div>
                           </div>

                           {/* Company Short Name */}
                           <h3 className="font-mono text-lg font-bold text-center text-primary mb-2 tracking-tight">
                             {company.short}
                           </h3>

                           {/* Industry Tag */}
                           <div className="text-center mb-2">
                             <span className="inline-block text-xs font-medium text-accent px-3 py-1 bg-accent/10 rounded-full">
                               {company.industry}
                             </span>
                           </div>

                           {/* Location */}
                           <p className="text-xs text-center text-muted-foreground">
                             {company.location}
                           </p>
                         </div>
                       </div>
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

