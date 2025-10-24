'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/components/providers/I18nProvider'
import { GraduationCap } from 'lucide-react'

export function Education() {
  const { t } = useI18n()
  
  return (
    <section id="education" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Compact Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
           <h2 className="text-3xl font-bold text-foreground mb-3">
             {t('education.title')}
           </h2>
           <p className="text-lg text-muted-foreground">
             {t('education.subtitle')}
           </p>
          </motion.div>

          {/* Compact Education List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              'aims-masters-bigdata',
              'ucad-masters-applied'
            ].map((eduId, index) => (
              <div
                key={eduId}
                className="flex items-center gap-3 bg-muted/30 rounded-lg px-6 py-4 hover:bg-muted/50 transition-colors"
              >
                <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {t(`education.degrees.${eduId}.degree`)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`education.degrees.${eduId}.institution`)} • {t(`education.degrees.${eduId}.year`)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}