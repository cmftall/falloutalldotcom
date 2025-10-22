'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { useI18n } from '@/components/providers/I18nProvider'
import { ExternalLink, Award, Building } from 'lucide-react'

export function Certifications() {
  const { t } = useI18n()
  
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
             {t('certifications.title')}
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             {t('certifications.subtitle')}
           </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'azure-data-engineer',
                name: 'Azure Data Engineer Associate',
                issuer: 'Microsoft',
                url: 'https://learn.microsoft.com/en-us/certifications/azure-data-engineer/'
              },
              {
                id: 'gcp-data-engineer',
                name: 'Google Cloud Professional Data Engineer',
                issuer: 'Google',
                url: 'https://cloud.google.com/certification/data-engineer'
              },
              {
                id: 'databricks-developer',
                name: 'Databricks Certified Associate Developer for Apache Spark',
                issuer: 'Databricks',
                url: 'https://www.databricks.com/learn/certification/apache-spark-developer-associate'
              },
              {
                id: 'deep-learning',
                name: 'Deep Learning Specialization',
                issuer: 'deeplearning.ai',
                url: 'https://www.coursera.org/specializations/deep-learning'
              },
              {
                id: 'databricks-developer-essentials',
                name: 'Databricks Developer Essentials',
                issuer: 'Databricks',
                url: 'https://www.databricks.com/learn/certification/developer-essentials'
              },
              {
                id: 'databricks-developer-foundations',
                name: 'Databricks Developer Foundations',
                issuer: 'Databricks',
                url: 'https://www.databricks.com/learn/certification/developer-foundations'
              },
              {
                id: 'deeplearning-ai-data-engineering',
                name: 'DeepLearning.AI Data Engineering Professional Certificate',
                issuer: 'DeepLearning.AI',
                url: 'https://www.coursera.org/professional-certificates/data-engineering'
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                        <Award className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                          {cert.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                      </div>
                    </div>

                    {cert.url && (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                             <span>{t('certifications.viewDetails')}</span>
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    )}
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}