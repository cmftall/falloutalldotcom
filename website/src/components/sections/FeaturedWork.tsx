'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { MetricsGrid } from '@/components/ui/MetricsCard'
import { Badge } from '@/components/ui/Badge'
import { Calendar, TrendingUp, DollarSign, Users, Target, Award } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function FeaturedWork() {
  const { t } = useI18n()
  const projects = t('work.projects') as any

  if (!projects || typeof projects !== 'object') {
    return null
  }

  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('work.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              {t('work.subtitle')}
            </p>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
              {t('work.businessImpact')}
            </p>
            
            {/* Business Impact Statement */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                {t('work.technicalInnovation')}
              </p>
            </div>
          </motion.div>

          {/* Enhanced Projects Grid with Business Impact Focus */}
          <div className="space-y-16">
            {Object.keys(projects).map((projectId, index) => {
              const project = projects[projectId]
              return (
                <motion.div
                  key={projectId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="p-8">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                              {project.company}
                            </h3>
                            <Badge variant="secondary" className="text-sm">
                              {project.industry}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>{project.role}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Target className="h-4 w-4" />
                              <span>{project.focusArea}</span>
                            </div>
                          </div>
                          <p className="text-card-foreground leading-relaxed text-lg">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-blue-500" />
                          {t('work.sections.keyAchievements')}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {Array.isArray(project.keyAchievements) && project.keyAchievements.map((achievement: string, achievementIndex: number) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-card-foreground text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Business Impact Metrics */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                          {t('work.sections.businessImpact')}
                        </h4>
                        <MetricsGrid metrics={project.businessImpact} columns={3} />
                      </div>

                      {/* Technical Innovation */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-purple-500" />
                          {t('work.sections.technicalInnovation')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(project.technicalInnovation) && project.technicalInnovation.map((innovation: string, innovationIndex: number) => (
                            <Badge key={innovationIndex} variant="outline" className="text-sm">
                              {innovation}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                          <DollarSign className="w-5 h-5 mr-2 text-blue-500" />
                          {t('work.sections.technologies')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(project.technologies) && project.technologies.map((tech: string, techIndex: number) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
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