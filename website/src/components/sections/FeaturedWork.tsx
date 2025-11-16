'use client'

// Removed motion imports - using static layout for better performance
import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { logger } from '@/lib/logger'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Calendar, TrendingUp, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { openCalendly } from '@/lib/calendly'
import type { ProjectData, BusinessImpact } from '@/lib/types'

export function FeaturedWork() {
  const { t, locale } = useI18n()
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({})
  
  const toggleTestimonial = (projectId: string) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }
  
  // Safely get projects with multiple validation layers
  let projects: Record<string, ProjectData> = {}
  try {
    const projectsRaw = t('work.projects')
    if (projectsRaw && typeof projectsRaw === 'object' && !Array.isArray(projectsRaw) && projectsRaw !== null) {
      projects = projectsRaw as Record<string, ProjectData>
    }
  } catch (error) {
    logger.warn('Failed to load projects', { error })
  }

  // Validate projects object and keys
  const projectKeys = Object.keys(projects || {})
  
  // Always show the section header, even if no projects
  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-24 px-4">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6">
              {t('work.title')}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              {t('work.subtitle')}
            </p>
            
            {/* Business Impact Statement - Simplified */}
            <div className="bg-card border border-accent/20 rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
              <p className="text-sm md:text-base font-medium text-foreground">
                {t('work.technicalInnovation')}
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          {projectKeys.length > 0 ? (
            <div className="space-y-8 md:space-y-12 mt-8 md:mt-16 px-4">
            {projectKeys.map((projectId) => {
              if (!projectId) return null
              
              const project = projects[projectId]
              if (!project || typeof project !== 'object' || project === null || Array.isArray(project)) {
                return null
              }
              
              return (
                <div
                  key={projectId}
                  className="group"
                >
                  <Card className="bg-card border-2 border-border hover:border-accent/60 transition-colors overflow-hidden relative">
                    {/* Subtle accent line on left */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="p-4 md:p-8 relative z-10">
                      {/* Project Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                              {project.company}
                            </h3>
                            <Badge className="bg-accent/10 text-accent border-accent/30 text-xs">
                              {project.industry}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-2">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-accent" />
                              <span className="font-medium">{project.role}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-accent" />
                              <span className="font-mono">{project.duration}</span>
                            </div>
                          </div>
                          {project.durationNote && (
                            <div className="mt-2">
                              <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-medium px-3 py-1.5">
                                {project.durationNote}
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Value Summary - Simplified */}
                      {project.valueSummary && (
                        <div className="mb-4 p-3 md:p-4 bg-accent/5 border border-accent/20 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0 mt-0.5" />
                            <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">
                              {project.valueSummary}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Description - Use shortDescription if available, otherwise smart truncate */}
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                        {(() => {
                          // Prefer shortDescription if available
                          if (project.shortDescription) {
                            return project.shortDescription
                          }
                          
                          const desc = project.description || project.focusArea || ''
                          
                          // Smart truncation: find last sentence end before 150 chars
                          if (desc.length > 150) {
                            const truncated = desc.substring(0, 150)
                            const lastPeriod = truncated.lastIndexOf('.')
                            const lastExclamation = truncated.lastIndexOf('!')
                            const lastQuestion = truncated.lastIndexOf('?')
                            const lastSentenceEnd = Math.max(lastPeriod, lastExclamation, lastQuestion)
                            
                            if (lastSentenceEnd > 100) {
                              return desc.substring(0, lastSentenceEnd + 1)
                            }
                            // If no sentence end found, truncate at word boundary
                            const lastSpace = truncated.lastIndexOf(' ')
                            if (lastSpace > 100) {
                              return desc.substring(0, lastSpace) + '...'
                            }
                            return truncated + '...'
                          }
                          return desc
                        })()}
                      </p>

                      {/* Business Impact - Compact (2 metrics only) */}
                      {project.businessImpact && project.businessImpact.length > 0 && (
                        <div className="mb-4 flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm">
                          {Array.isArray(project.businessImpact) && project.businessImpact.slice(0, 2).map((impact: BusinessImpact, idx: number) => {
                            if (!impact || typeof impact !== 'object') return null
                            
                            // Handle Time To Insight specially
                            const isTimeToInsight = impact.metricName === 'Time To Insight'
                            const displayValue = isTimeToInsight 
                              ? 'Weeks → Days'
                              : (typeof impact.percentage === 'number' ? `${impact.percentage}%` : (impact.percentage || '—'))
                            
                            return (
                              <div key={idx} className="flex items-center space-x-1 md:space-x-2">
                                <span className="font-mono text-base md:text-lg font-bold text-accent">
                                  {displayValue}
                                </span>
                                <span className="text-muted-foreground">{impact.metricName || '—'}</span>
                              </div>
                            )
                          })}
                        </div>
                      )}

                      {/* Testimonial - Expand/Collapse for BNC only */}
                      {projectId === 'bnc-analytical-foundation' && project.testimonial && (
                        <div className="mb-4 pt-4 border-t border-border/30">
                          <div className="flex items-start space-x-2 md:space-x-3">
                            <div className="flex-shrink-0 text-xl md:text-2xl text-accent/60 leading-none">"</div>
                            <div className="flex-1">
                              {/* Testimonial text - short or full based on state */}
                              {project.testimonial.text && project.testimonial.text.length > 150 ? (
                                <>
                                  {/* Short version */}
                                  <p className="text-xs md:text-sm italic text-muted-foreground leading-relaxed mb-2">
                                    {!expandedTestimonials[projectId]
                                      ? project.testimonial.text.substring(0, 150).trim() + '...'
                                      : project.testimonial.text
                                    }
                                  </p>
                                  
                                  {/* Toggle button */}
                                  <button
                                    onClick={() => toggleTestimonial(projectId)}
                                    className="flex items-center gap-1 text-xs md:text-sm text-accent hover:text-accent/80 transition-colors mt-2 mb-2"
                                    aria-expanded={expandedTestimonials[projectId]}
                                    aria-label={expandedTestimonials[projectId]
                                      ? (locale === 'fr' ? 'Réduire le témoignage' : 'Show less')
                                      : (locale === 'fr' ? 'Lire le témoignage complet' : 'Read full testimonial')
                                    }
                                  >
                                    <span>
                                      {expandedTestimonials[projectId]
                                        ? (t('work.testimonial.showLess') || (locale === 'fr' ? 'Réduire' : 'Show less'))
                                        : (t('work.testimonial.readMore') || (locale === 'fr' ? 'Lire le témoignage complet' : 'Read full testimonial'))
                                      }
                                    </span>
                                    {expandedTestimonials[projectId] ? (
                                      <ChevronUp className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-300" aria-hidden="true" />
                                    ) : (
                                      <ChevronDown className="h-3 w-3 md:h-4 md:w-4 transition-transform duration-300" aria-hidden="true" />
                                    )}
                                  </button>
                                </>
                              ) : (
                                /* Full text if short enough */
                                <p className="text-xs md:text-sm italic text-muted-foreground leading-relaxed mb-2">
                                  {project.testimonial.text || (locale === 'fr' 
                                    ? "Fallou allie compétence technique, vision stratégique et leadership collaboratif - un atout majeur pour tout projet d'envergure."
                                    : "Fallou combines technical competence, strategic vision, and collaborative leadership - a major asset for any large-scale project.")}
                                </p>
                              )}
                              
                              {/* Author info */}
                              <p className="text-xs text-muted-foreground">
                                <span className="font-semibold text-foreground">{project.testimonial.author}</span>
                                {`, ${project.testimonial.role}, ${project.testimonial.company}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}


                      {/* CTA - Simplified - Direct to Calendly */}
                      <div className="pt-4 border-t border-border/50">
                        <Button
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm md:text-base py-5 md:py-6"
                          onClick={() => {
                            const buttonText = typeof t('work.cta.button') === 'string' ? t('work.cta.button') : 'Schedule Free Strategy Call'
                            openCalendly('work', buttonText, { project_id: projectId })
                          }}
                          aria-label={(() => {
                            const ctaButton = t('work.cta.button')
                            const buttonText = typeof ctaButton === 'string' ? ctaButton : 'Schedule Free Strategy Call'
                            return `${buttonText} for ${project.company} project`
                          })()}
                        >
                          {(() => {
                            const ctaButton = t('work.cta.button')
                            return typeof ctaButton === 'string' ? ctaButton : 'Schedule Free Strategy Call'
                          })()}
                          <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" aria-hidden="true" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
            </div>
          ) : (
            <div className="text-center py-12 mt-20">
              <p className="text-muted-foreground">No projects available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
