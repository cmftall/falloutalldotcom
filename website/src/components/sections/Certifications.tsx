'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/components/providers/I18nProvider'
import { ExternalLink, Award } from 'lucide-react'

export function Certifications() {
  const { t } = useI18n()
  
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Premium Section Header with Gold Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <Award className="h-6 w-6 text-accent" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                {t('certifications.title')}
              </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t('certifications.subtitle')}
            </p>
          </motion.div>

          {/* Compact Certifications Row - Only verifiable professional certifications */}
          <div className="space-y-4">
            {[
              {
                id: 'azure-data-engineer',
                name: 'Azure Data Engineer Associate',
                issuer: 'Microsoft',
                year: '2023',
                url: 'https://learn.microsoft.com/en-us/certifications/azure-data-engineer/',
              },
              {
                id: 'gcp-data-engineer',
                name: 'Google Cloud Professional Data Engineer',
                issuer: 'Google',
                year: '2022',
                url: 'https://cloud.google.com/certification/data-engineer',
              },
              {
                id: 'databricks-developer',
                name: 'Databricks Certified Associate Developer for Apache Spark',
                issuer: 'Databricks',
                year: '2021',
                url: 'https://www.databricks.com/learn/certification/apache-spark-developer-associate',
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center justify-between bg-card rounded-lg p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-border group-hover:border-accent/50 relative overflow-hidden">
                  {/* Gold accent line on left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  <div className="flex items-center space-x-4 flex-1 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Award className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-primary group-hover:text-accent transition-colors truncate">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} <span className="text-accent">•</span> {cert.year}
                      </p>
                    </div>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 ml-4 inline-flex items-center space-x-1 text-accent hover:text-accent/80 text-sm font-semibold transition-colors relative z-10"
                    >
                      <span className="hidden sm:inline">Verify</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}