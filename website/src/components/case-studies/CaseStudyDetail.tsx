'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Testimonial } from '@/components/ui/Testimonial'
import { Calendar, Users, Target, TrendingUp, Award, ArrowRight, Euro, Zap, ArrowLeft, Building2 } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import type { ProjectData, BusinessImpact } from '@/lib/types'
import Link from 'next/link'

interface CaseStudyDetailProps {
  project: ProjectData
  locale: 'en' | 'fr'
}

export function CaseStudyDetail({ project, locale }: CaseStudyDetailProps) {
  const { t } = useI18n()
  
  return (
    <article className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            href={`/${locale}/case-studies`}
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{locale === 'fr' ? "Retour aux Études de Cas" : "Back to Case Studies"}</span>
          </Link>
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <Building2 className="h-10 w-10 text-accent" />
              <div className="flex-1">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-3">
                  {project.company}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="font-medium">{project.role}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="font-mono">{project.duration}</span>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/30">
                    {project.industry}
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Value Summary - Prominent */}
            {project.valueSummary && (
              <div className="p-6 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-2 border-accent/30 rounded-xl mb-8">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-xl font-semibold text-foreground leading-relaxed">
                    {project.valueSummary}
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Focus Area */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/5 border border-accent/20 rounded-full">
              <Target className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">{project.focusArea}</span>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              {locale === 'fr' ? "Vue d'Ensemble du Projet" : "Project Overview"}
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                {locale === 'fr' ? "Défis Clés" : "Key Challenges"}
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <Card key={idx} className="p-6 border-2 border-border">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">{idx + 1}</span>
                      </div>
                      <p className="text-foreground leading-relaxed">{challenge}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                {locale === 'fr' ? "Témoignage Client" : "Client Testimonial"}
              </h2>
              <Testimonial testimonial={project.testimonial} />
            </div>
          )}
          
          {/* Business Impact Metrics */}
          {project.businessImpact && project.businessImpact.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-accent" />
                <span>{locale === 'fr' ? "Impact Business" : "Business Impact"}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.businessImpact.map((impact: BusinessImpact, idx: number) => {
                  if (!impact || typeof impact !== 'object') return null
                  
                  const getMetricIcon = () => {
                    const metricName = (impact.metricName || '').toLowerCase()
                    if (metricName.includes('error') || metricName.includes('réduction')) {
                      return <Target className="h-8 w-8 text-accent" />
                    } else if (metricName.includes('efficiency') || metricName.includes('efficacité') || metricName.includes('speed') || metricName.includes('vitesse')) {
                      return <Zap className="h-8 w-8 text-accent" />
                    } else if (metricName.includes('value') || metricName.includes('valeur') || metricName.includes('savings') || metricName.includes('économies')) {
                      return <Euro className="h-8 w-8 text-accent" />
                    } else {
                      return <Award className="h-8 w-8 text-accent" />
                    }
                  }
                  
                  return (
                    <Card 
                      key={idx} 
                      className="bg-gradient-to-br from-accent/15 to-accent/5 border-2 border-accent/40 p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-baseline space-x-2 mb-2">
                            <span className="font-mono text-5xl font-bold text-accent">
                              {typeof impact.percentage === 'number' ? `${impact.percentage}%` : (impact.percentage || '—')}
                            </span>
                          </div>
                          <p className="text-lg font-bold text-primary mb-3">
                            {impact.metricName || '—'}
                          </p>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          {getMetricIcon()}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {impact.description || ''}
                      </p>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}
          
          {/* Key Achievements */}
          {project.keyAchievements && project.keyAchievements.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                {locale === 'fr' ? "Réalisations Clés" : "Key Achievements"}
              </h2>
              <ul className="space-y-3">
                {project.keyAchievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-accent font-bold text-lg">✓</span>
                    <span className="text-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Technical Innovation */}
          {project.technicalInnovation && project.technicalInnovation.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                {locale === 'fr' ? "Innovation Technique" : "Technical Innovation"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technicalInnovation.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="text-sm bg-secondary/50 text-secondary-foreground border-border"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                {locale === 'fr' ? "Technologies & Outils" : "Technologies & Tools"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    className="bg-primary/10 text-primary border border-primary/20 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* CTA */}
          <div className="pt-8 border-t border-border">
            <Card className="bg-accent/5 border-2 border-accent/20 p-8">
              <p className="text-lg text-center text-foreground mb-6 font-medium">
                {locale === 'fr' 
                  ? "Vous voulez des résultats similaires pour vos systèmes de données ?"
                  : "Want similar results for your data systems?"
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold group"
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      window.location.href = `/${locale}#contact`
                    }
                  }}
                >
                  {locale === 'fr' ? "Réserver un Appel Stratégique Gratuit" : "Schedule Free Strategy Call"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href={`/${locale}#work`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold"
                  >
                    {locale === 'fr' ? "Voir Tous les Projets" : "View All Projects"}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </article>
  )
}

