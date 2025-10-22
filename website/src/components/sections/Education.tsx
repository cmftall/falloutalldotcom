'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { useI18n } from '@/components/providers/I18nProvider'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export function Education() {
  const { t } = useI18n()
  
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
             {t('education.title')}
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             {t('education.subtitle')}
           </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {[
              'aims-masters-bigdata',
              'ucad-masters-applied',
              'ucad-bachelors'
            ].map((eduId, index) => (
              <motion.div
                key={eduId}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                              {t(`education.degrees.${eduId}.degree`)}
                            </h3>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span className="font-medium">{t(`education.degrees.${eduId}.institution`)}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{t(`education.degrees.${eduId}.location`)} • {t(`education.degrees.${eduId}.duration`)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(`education.degrees.${eduId}.description`)}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white">
                          {t(`education.degrees.${eduId}.year`)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t('education.continuousLearning.title')}</h3>
                <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  {t('education.continuousLearning.description')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}