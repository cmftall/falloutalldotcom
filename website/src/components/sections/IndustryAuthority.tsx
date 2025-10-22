'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useI18n } from '@/components/providers/I18nProvider'
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Users, 
  Calendar,
  ExternalLink,
  Quote,
  Lightbulb,
  Star
} from 'lucide-react'

export function IndustryAuthority() {
  const { t } = useI18n()

  return (
    <section id="industry-authority" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('industryAuthority.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('industryAuthority.subtitle')}
            </p>
          </motion.div>

          {/* Thought Leadership Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-blue-500" />
                {t('industryAuthority.thoughtLeadership.title')}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {t('industryAuthority.thoughtLeadership.description')}
              </p>
              
              {/* Thought Leadership Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(() => {
                  const content = t('industryAuthority.thoughtLeadership.content')
                  if (Array.isArray(content)) {
                    return content.map((item: any, index: number) => (
                      <Card key={index} className="bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <Badge variant="secondary" className="text-xs">
                              {item.type}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 mr-1" />
                              {item.publicationDate}
                            </div>
                          </div>
                          
                          <h4 className="text-lg font-bold text-foreground mb-3">
                            {item.title}
                          </h4>
                          
                          <p className="text-muted-foreground text-sm mb-4">
                            {item.description}
                          </p>
                          
                          <div className="space-y-2">
                            <h5 className="text-sm font-semibold text-foreground">Key Insights:</h5>
                            <ul className="space-y-1">
                              {item.keyInsights?.map((insight: string, insightIndex: number) => (
                                <li key={insightIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                  <Lightbulb className="w-3 h-3 mt-1 text-yellow-500 flex-shrink-0" />
                                  <span>{insight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                              <div className="flex space-x-2">
                                {item.targetAudience?.map((audience: string, audienceIndex: number) => (
                                  <Badge key={audienceIndex} variant="outline" className="text-xs">
                                    {audience}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  }
                  return null
                })()}
              </div>
            </div>
          </motion.div>

          {/* Professional Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground flex items-center justify-center">
              <Award className="w-6 h-6 mr-3 text-yellow-500" />
              {t('industryAuthority.professionalRecognition.title')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                const achievements = t('industryAuthority.professionalRecognition.achievements')
                if (Array.isArray(achievements)) {
                  return achievements.map((achievement: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-foreground font-medium group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                            {achievement}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                }
                return null
              })()}
            </div>
          </motion.div>

          {/* Industry Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground flex items-center justify-center">
              <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
              {t('industryAuthority.industryInsights.title')}
            </h3>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8">
              <p className="text-lg text-muted-foreground mb-8 text-center">
                {t('industryAuthority.industryInsights.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(() => {
                  const insights = t('industryAuthority.industryInsights.insights')
                  if (Array.isArray(insights)) {
                    return insights.map((insight: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-foreground font-medium">{insight}</p>
                      </motion.div>
                    ))
                  }
                  return null
                })()}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how my industry expertise can help transform your data architecture challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                    <Users className="w-4 h-4 mr-2" />
                    Schedule Discussion
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Case Studies
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
