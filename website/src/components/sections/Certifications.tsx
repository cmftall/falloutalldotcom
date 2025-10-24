'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/components/providers/I18nProvider'
import { ExternalLink, CheckCircle } from 'lucide-react'

export function Certifications() {
  const { t } = useI18n()
  
  return (
    <section id="certifications" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Compact Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
             {t('certifications.title')}
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <div className="flex items-center justify-between bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 ml-4 inline-flex items-center space-x-1 text-primary hover:text-primary/80 text-sm font-medium transition-colors group-hover:underline"
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