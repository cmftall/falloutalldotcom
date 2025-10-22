'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { useI18n } from '@/components/providers/I18nProvider'
import { 
  Star, 
  Target, 
  Users, 
  TrendingUp, 
  Award,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Quote,
  Zap
} from 'lucide-react'

export function PersonalBrand() {
  const { t } = useI18n()

  return (
    <section id="personal-brand" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
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
              {t('personalBrand.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('personalBrand.subtitle')}
            </p>
          </motion.div>

          {/* Unique Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {t('personalBrand.uniquePositioning.title')}
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
                    {t('personalBrand.uniquePositioning.description')}
                  </p>
                  
                  {/* Differentiators */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(() => {
                      const differentiators = t('personalBrand.uniquePositioning.differentiators')
                      if (Array.isArray(differentiators)) {
                        return differentiators.map((differentiator: string, index: number) => (
                          <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                            <span className="text-white font-medium">{differentiator}</span>
                          </div>
                        ))
                      }
                      return null
                    })()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                  <Users className="w-8 h-8 mr-3 text-blue-500" />
                  {t('personalBrand.personalStory.title')}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('personalBrand.personalStory.description')}
                </p>
                
                <div className="space-y-4">
                  {(() => {
                    const journey = t('personalBrand.personalStory.journey')
                    if (Array.isArray(journey)) {
                      return journey.map((step: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-4"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-foreground font-medium">{step}</p>
                        </motion.div>
                      ))
                    }
                    return null
                  })()}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8">
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <p className="text-lg text-foreground font-medium italic mb-4">
                      "Technical innovation combined with measurable business impact across enterprise-scale data transformations"
                    </p>
                    <div className="flex justify-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Unique Selling Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              {t('personalBrand.uniqueSellingPoints.title')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(() => {
                const points = t('personalBrand.uniqueSellingPoints.points')
                if (Array.isArray(points)) {
                  return points.map((point: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Card className="h-full bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Lightbulb className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {point}
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

          {/* Competitive Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8 text-foreground flex items-center justify-center">
                  <Target className="w-6 h-6 mr-3 text-green-500" />
                  {t('personalBrand.competitiveAdvantage.title')}
                </h3>
                <p className="text-lg text-muted-foreground text-center mb-8 max-w-4xl mx-auto">
                  {t('personalBrand.competitiveAdvantage.description')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(() => {
                    const advantages = t('personalBrand.competitiveAdvantage.advantages')
                    if (Array.isArray(advantages)) {
                      return advantages.map((advantage: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-foreground font-medium">{advantage}</p>
                        </motion.div>
                      ))
                    }
                    return null
                  })()}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how my unique approach to data architecture can help solve your most challenging problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300 flex items-center justify-center group">
                    <Award className="w-4 h-4 mr-2" />
                    View Case Studies
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
