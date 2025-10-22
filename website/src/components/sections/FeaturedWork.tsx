'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Calendar } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function FeaturedWork() {
  const { t } = useI18n()

  return (
    <section id="work" className="py-24 bg-muted/30">
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
              {t('work.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('work.subtitle')}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'sopra-steria',
                duration: '2025 - Present',
                technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Terraform', 'Snowflake']
              },
              {
                id: 'bnc',
                duration: '2021 - 2025',
                technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Snowflake', 'Spark', 'SQL']
              },
              {
                id: 'onepoint',
                duration: '2024 - 2025',
                technologies: ['Azure', 'AWS', 'Databricks', 'Python', 'Snowflake', 'Spark', 'SQL', 'GitHub Actions']
              },
              {
                id: 'orange-ivory',
                duration: '2020 - 2021',
                technologies: ['Hadoop', 'Scala', 'Spark', 'Flume', 'Pig', 'Sqoop', 'Oozie']
              },
              {
                id: 'orange-senegal',
                duration: '2019 - 2020',
                technologies: ['Hadoop', 'Scala', 'Spark', 'Python', 'Scikit-Learn', 'Tableau']
              }
            ].map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Project Header */}
                  <div className="relative p-8 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                          {t(`work.projects.${project.id}.company`)}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {t(`work.projects.${project.id}.role`)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-card-foreground leading-relaxed mb-4">
                      {t(`work.projects.${project.id}.description`)}
                    </p>

                    {/* Impact */}
                    <div className="bg-gradient-to-r from-muted to-muted/50 rounded-lg p-4 mb-6">
                      <p className="text-sm font-medium text-card-foreground">
                        {t(`work.projects.${project.id}.impact`)}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <CardContent className="pt-0 pb-8 px-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
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