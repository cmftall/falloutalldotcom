'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
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
  CheckCircle,
  ChevronDown,
  ChevronUp
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
  const [showAdvanced, setShowAdvanced] = useState(false)
  
  return (
    <section id="expertise" className="py-24 bg-background">
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                {t('expertise.title')}
              </h2>
              <div className="h-px w-12 bg-accent" />
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              {t('expertise.subtitle')}
            </p>
            
            {/* Architectural Thinking Statement - Premium Card */}
            <div className="bg-card border border-accent/20 rounded-lg p-6 max-w-4xl mx-auto shadow-sm relative overflow-hidden">
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent opacity-30" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent opacity-30" />
              
              <p className="text-base font-medium text-primary relative z-10">
                {t('expertise.architecturalThinking')}
              </p>
            </div>
          </motion.div>


          {/* Core Expertise Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  key: 'dataEngineering',
                  icon: 'Code',
                  tier: 'core',
                  name: t('expertise.tiers.core.categories.dataEngineering.name'),
                  skills: t('expertise.tiers.core.categories.dataEngineering.skills').split(','),
                  proficiency: t('expertise.tiers.core.categories.dataEngineering.proficiency'),
                  yearsExperience: t('expertise.tiers.core.categories.dataEngineering.yearsExperience'),
                  methodologies: Array.isArray(t('expertise.tiers.core.categories.dataEngineering.methodologies')) 
                    ? t('expertise.tiers.core.categories.dataEngineering.methodologies') 
                    : []
                },
                {
                  key: 'databases',
                  icon: 'Database',
                  tier: 'core',
                  name: t('expertise.tiers.core.categories.databases.name'),
                  skills: t('expertise.tiers.core.categories.databases.skills').split(','),
                  proficiency: t('expertise.tiers.core.categories.databases.proficiency'),
                  yearsExperience: t('expertise.tiers.core.categories.databases.yearsExperience'),
                  methodologies: Array.isArray(t('expertise.tiers.core.categories.databases.methodologies')) 
                    ? t('expertise.tiers.core.categories.databases.methodologies') 
                    : []
                },
                {
                  key: 'cloudPlatforms',
                  icon: 'Cloud',
                  tier: 'core',
                  name: t('expertise.tiers.core.categories.cloudPlatforms.name'),
                  skills: t('expertise.tiers.core.categories.cloudPlatforms.skills').split(','),
                  proficiency: t('expertise.tiers.core.categories.cloudPlatforms.proficiency'),
                  yearsExperience: t('expertise.tiers.core.categories.cloudPlatforms.yearsExperience'),
                  methodologies: Array.isArray(t('expertise.tiers.core.categories.cloudPlatforms.methodologies')) 
                    ? t('expertise.tiers.core.categories.cloudPlatforms.methodologies') 
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

                    </CardContent>

                    {/* Enhanced Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
                  </Card>
                </motion.div>
              )
            })}
            </div>
          </motion.div>

          {/* Toggle Button for Advanced Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {showAdvanced ? (
                <>
                  <ChevronUp className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Hide Advanced Skills
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  View Full Tech Stack (ML, DevOps, Visualization)
                </>
              )}
            </Button>
          </motion.div>

          {/* Advanced Skills Tier - Collapsible */}
          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 overflow-hidden"
              >

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  key: 'machineLearning',
                  icon: 'Brain',
                  tier: 'advanced',
                  name: t('expertise.tiers.advanced.categories.machineLearning.name'),
                  skills: t('expertise.tiers.advanced.categories.machineLearning.skills').split(','),
                  proficiency: t('expertise.tiers.advanced.categories.machineLearning.proficiency'),
                  yearsExperience: t('expertise.tiers.advanced.categories.machineLearning.yearsExperience'),
                  methodologies: Array.isArray(t('expertise.tiers.advanced.categories.machineLearning.methodologies')) 
                    ? t('expertise.tiers.advanced.categories.machineLearning.methodologies') 
                    : []
                },
                {
                  key: 'devops',
                  icon: 'Settings',
                  tier: 'advanced',
                  name: t('expertise.tiers.advanced.categories.devops.name'),
                  skills: t('expertise.tiers.advanced.categories.devops.skills').split(','),
                  proficiency: t('expertise.tiers.advanced.categories.devops.proficiency'),
                  yearsExperience: t('expertise.tiers.advanced.categories.devops.yearsExperience'),
                  methodologies: Array.isArray(t('expertise.tiers.advanced.categories.devops.methodologies')) 
                    ? t('expertise.tiers.advanced.categories.devops.methodologies') 
                    : []
                },
                {
                  key: 'visualization',
                  icon: 'BarChart',
                  tier: 'advanced',
                  name: t('expertise.tiers.advanced.categories.visualization.name'),
                  skills: t('expertise.tiers.advanced.categories.visualization.skills').split(','),
                  proficiency: t('expertise.tiers.advanced.categories.visualization.proficiency'),
                  yearsExperience: t('expertise.tiers.advanced.categories.visualization.yearsExperience'),
                  methodologies: Array.isArray(t('expertise.tiers.advanced.categories.visualization.methodologies')) 
                    ? t('expertise.tiers.advanced.categories.visualization.methodologies') 
                    : []
                }
              ].map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Cloud
              const getProficiencyColor = (proficiency: string) => {
                switch (proficiency) {
                  case 'Expert': return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20'
                  case 'Advanced': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20'
                  case 'Avancé': return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20'
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

                    </CardContent>

                    {/* Enhanced Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
                  </Card>
                </motion.div>
              )
            })}
            </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}