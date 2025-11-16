'use client'

import { Badge } from '@/components/ui/Badge'
import { useI18n } from '@/components/providers/I18nProvider'
import { Award, ExternalLink } from 'lucide-react'
import type { Certification } from '@/lib/types'
import { CONTACT_INFO } from '@/lib/constants'

export function Certifications() {
  const { t } = useI18n()

  // Safely get certifications
  let certifications: Certification[] = []
  try {
    const certsRaw = t('certifications.items')
    if (Array.isArray(certsRaw)) {
      certifications = certsRaw as Certification[]
    }
  } catch {
    // Fallback to empty array
  }

  if (certifications.length === 0) {
    return null
  }

  // Group Databricks certifications
  const databricksCerts = certifications.filter(c => c.issuer === 'Databricks')
  const otherCerts = certifications.filter(c => c.issuer !== 'Databricks')
  
  // Format Databricks: show as "3x Databricks Certified" if 3+, otherwise list individually
  const showDatabricksGrouped = databricksCerts.length >= 3

  return (
    <section id="certifications" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6">
              {t('certifications.title')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('certifications.subtitle')}
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
            {/* Other Certifications */}
            {otherCerts.map((cert, idx) => (
              <Badge
                key={`${cert.issuer}-${idx}`}
                className="bg-accent/10 hover:bg-accent/20 border-accent/20 hover:border-accent/40 rounded-lg px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-200 group cursor-default"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <Award className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="text-foreground font-bold">{cert.name}</span>
                    <span className="text-xs md:text-sm text-muted-foreground">{cert.issuer}</span>
                  </div>
                </div>
              </Badge>
            ))}

            {/* Databricks Certifications */}
            {showDatabricksGrouped ? (
              <Badge
                className="bg-accent/10 hover:bg-accent/20 border-accent/20 hover:border-accent/40 rounded-lg px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-200 group cursor-default"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <Award className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                  <div className="flex flex-col items-start">
                    <span className="text-foreground font-bold">3x Databricks Certified</span>
                    <span className="text-xs md:text-sm text-muted-foreground">Databricks</span>
                  </div>
                </div>
              </Badge>
            ) : (
              databricksCerts.map((cert, idx) => (
                <Badge
                  key={`databricks-${idx}`}
                  className="bg-accent/10 hover:bg-accent/20 border-accent/20 hover:border-accent/40 rounded-lg px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-200 group cursor-default"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <Award className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                    <div className="flex flex-col items-start">
                      <span className="text-foreground font-bold">{cert.name}</span>
                      <span className="text-xs md:text-sm text-muted-foreground">{cert.issuer}</span>
                    </div>
                  </div>
                </Badge>
              ))
            )}
          </div>

          {/* Optional LinkedIn Link */}
          <div className="text-center mt-8 md:mt-12">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-accent transition-colors"
            >
              <span>{t('certifications.viewDetails') || 'View all certifications'}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

