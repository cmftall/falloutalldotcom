'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, TrendingUp, Users, Target, Briefcase, Award } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function FeaturedWork() {
  const { t } = useI18n()
  const projects = t('work.projects') as any

  if (!projects || typeof projects !== 'object') {
    return null
  }

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Premium Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <Briefcase className="h-6 w-6 text-accent" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                {t('work.title')}
              </h2>
              <Briefcase className="h-6 w-6 text-accent" />
              <div className="h-px w-12 bg-accent" />
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              {t('work.subtitle')}
            </p>
            
            {/* Business Impact Statement - Premium Card */}
            <div className="bg-card border border-accent/20 rounded-lg p-6 max-w-4xl mx-auto shadow-sm relative overflow-hidden">
              {/* Gold corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent opacity-30" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent opacity-30" />
              
              <p className="text-base font-medium text-primary relative z-10">
                {t('work.technicalInnovation')}
              </p>
            </div>
          </motion.div>

          {/* Premium Case Studies Grid */}
          <div className="space-y-12">
            {Object.keys(projects).map((projectId, index) => {
              const project = projects[projectId]
              return (
                <motion.div
                  key={projectId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-card border border-border hover:border-accent/50 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden relative">
                    {/* Gold accent line on left */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                    
                    <div className="p-8 relative z-10">
                      {/* Project Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                              {project.company}
                            </h3>
                            <Badge className="bg-accent/10 text-accent border-accent/30 text-xs">
                              {project.industry}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
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
                            <p className="text-xs text-muted-foreground italic mt-1">
                              {project.durationNote}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Focus Area Badge */}
                      <div className="mb-6">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/5 border border-accent/20 rounded-full">
                          <Target className="h-4 w-4 text-accent" />
                          <span className="text-sm font-semibold text-accent">{project.focusArea}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Business Impact - Premium Metrics */}
                      {project.businessImpact && project.businessImpact.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-4 flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-accent" />
                            <span>Business Impact</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project.businessImpact.map((impact: any, idx: number) => (
                              <div 
                                key={idx} 
                                className="bg-accent/5 border border-accent/20 rounded-lg p-4 hover:bg-accent/10 transition-colors group/metric"
                              >
                                <div className="flex items-baseline space-x-2 mb-2">
                                  <span className="font-mono text-3xl font-bold text-accent">
                                    {impact.percentage || impact.metricName}%
                                  </span>
                                  <Award className="h-5 w-5 text-accent opacity-70 group-hover/metric:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-sm font-semibold text-primary mb-1">
                                  {impact.metricName}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {impact.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.keyAchievements.map((achievement: string, idx: number) => (
                            <li key={idx} className="flex items-start space-x-3 group/item">
                              <span className="text-accent font-bold text-lg group-hover/item:scale-110 transition-transform">✓</span>
                              <span className="text-sm text-foreground leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technical Innovation */}
                      {project.technicalInnovation && project.technicalInnovation.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-3">
                            Technical Innovation
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technicalInnovation.map((tech: string, idx: number) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="text-xs bg-secondary/50 text-secondary-foreground border-border hover:border-accent/50 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wide text-primary mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, idx: number) => (
                            <Badge 
                              key={idx} 
                              className="bg-primary/10 text-primary border border-primary/20 text-xs hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
