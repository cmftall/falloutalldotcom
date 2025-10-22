'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useI18n } from '@/components/providers/I18nProvider'
import { 
  Cloud, 
  Code, 
  Brain, 
  Database, 
  BarChart3, 
  Settings,
  Award,
  Clock,
  TrendingUp,
  CheckCircle
} from 'lucide-react'

const iconMap = {
  Cloud,
  Code,
  Brain,
  Database,
  BarChart: BarChart3,
  Settings
}

export function Expertise() {
  const { t } = useI18n()
  
  return (
    <section id="expertise" className="py-24 bg-background">
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
             {t('expertise.title')}
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
             {t('expertise.subtitle')}
           </p>
           <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
             {t('expertise.technicalDepth')}
           </p>
           
           {/* Architectural Thinking Statement */}
           <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-6 max-w-4xl mx-auto">
             <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
               {t('expertise.architecturalThinking')}
             </p>
           </div>
          </motion.div>

          {/* Technical Methodologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Advanced Methodologies & Patterns
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {(() => {
                const methodologies = t('expertise.methodologies')
                if (Array.isArray(methodologies)) {
                  return methodologies.map((methodology: string, index: number) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium">
                      {methodology}
                    </Badge>
                  ))
                }
                return null
              })()}
            </div>
          </motion.div>

          {/* Enhanced Skills Grid with Proficiency Levels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                key: 'cloudPlatforms',
                icon: 'Cloud',
                name: t('expertise.categories.cloudPlatforms.name'),
                skills: t('expertise.categories.cloudPlatforms.skills').split(','),
                proficiency: t('expertise.categories.cloudPlatforms.proficiency'),
                yearsExperience: t('expertise.categories.cloudPlatforms.yearsExperience'),
                methodologies: Array.isArray(t('expertise.categories.cloudPlatforms.methodologies')) 
                  ? t('expertise.categories.cloudPlatforms.methodologies') 
                  : []
              },
              {
                key: 'dataEngineering',
                icon: 'Code',
                name: t('expertise.categories.dataEngineering.name'),
                skills: t('expertise.categories.dataEngineering.skills').split(','),
                proficiency: t('expertise.categories.dataEngineering.proficiency'),
                yearsExperience: t('expertise.categories.dataEngineering.yearsExperience'),
                methodologies: Array.isArray(t('expertise.categories.dataEngineering.methodologies')) 
                  ? t('expertise.categories.dataEngineering.methodologies') 
                  : []
              },
              {
                key: 'machineLearning',
                icon: 'Brain',
                name: t('expertise.categories.machineLearning.name'),
                skills: t('expertise.categories.machineLearning.skills').split(','),
                proficiency: t('expertise.categories.machineLearning.proficiency'),
                yearsExperience: t('expertise.categories.machineLearning.yearsExperience'),
                methodologies: Array.isArray(t('expertise.categories.machineLearning.methodologies')) 
                  ? t('expertise.categories.machineLearning.methodologies') 
                  : []
              },
              {
                key: 'databases',
                icon: 'Database',
                name: t('expertise.categories.databases.name'),
                skills: t('expertise.categories.databases.skills').split(','),
                proficiency: t('expertise.categories.databases.proficiency'),
                yearsExperience: t('expertise.categories.databases.yearsExperience'),
                methodologies: Array.isArray(t('expertise.categories.databases.methodologies')) 
                  ? t('expertise.categories.databases.methodologies') 
                  : []
              },
              {
                key: 'visualization',
                icon: 'BarChart',
                name: t('expertise.categories.visualization.name'),
                skills: t('expertise.categories.visualization.skills').split(','),
                proficiency: t('expertise.categories.visualization.proficiency'),
                yearsExperience: t('expertise.categories.visualization.yearsExperience'),
                methodologies: Array.isArray(t('expertise.categories.visualization.methodologies')) 
                  ? t('expertise.categories.visualization.methodologies') 
                  : []
              },
              {
                key: 'devops',
                icon: 'Settings',
                name: t('expertise.categories.devops.name'),
                skills: t('expertise.categories.devops.skills').split(','),
                proficiency: t('expertise.categories.devops.proficiency'),
                yearsExperience: t('expertise.categories.devops.yearsExperience'),
                methodologies: Array.isArray(t('expertise.categories.devops.methodologies')) 
                  ? t('expertise.categories.devops.methodologies') 
                  : []
              }
            ].map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Cloud
              const getProficiencyColor = (proficiency: string) => {
                switch (proficiency) {
                  case 'Expert': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20'
                  case 'Advanced': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20'
                  default: return 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/20'
                }
              }
              
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <CardContent className="p-8">
                      {/* Enhanced Category Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                              {category.name}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className={`text-xs ${getProficiencyColor(category.proficiency)}`}>
                                {category.proficiency}
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="w-3 h-3 mr-1" />
                                {category.yearsExperience} years
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Skills List with Enhanced Styling */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Core Technologies
                        </h4>
                        {category.skills.map((skill: string, skillIndex: number) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 group/skill"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 group-hover/skill:scale-110 transition-transform duration-200" />
                            <span className="text-card-foreground font-medium group-hover/skill:text-primary transition-colors">
                              {skill.trim()}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Methodologies Section */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Methodologies & Patterns
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(() => {
                            const methodologies = category.methodologies
                            if (Array.isArray(methodologies)) {
                              return methodologies.map((methodology: string, methodIndex: number) => (
                                <Badge key={methodIndex} variant="outline" className="text-xs">
                                  {methodology}
                                </Badge>
                              ))
                            }
                            return null
                          })()}
                        </div>
                      </div>
                    </CardContent>

                    {/* Enhanced Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Enhanced Summary Stats with Technical Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <Award className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold mb-2">8+</div>
                    <div className="text-primary-foreground/80">{t('stats.yearsExperience')}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <TrendingUp className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold mb-2">30+</div>
                    <div className="text-primary-foreground/80">{t('stats.technologiesMastered')}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Code className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold mb-2">7</div>
                    <div className="text-primary-foreground/80">{t('stats.enterpriseProjects')}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <div className="text-primary-foreground/80">Expertise Areas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}