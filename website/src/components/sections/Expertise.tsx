'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { EXPERTISE_CONTENT } from '@/lib/constants'
import { 
  Cloud, 
  Code, 
  Brain, 
  Database, 
  BarChart3, 
  Settings 
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
  return (
    <section id="expertise" className="py-24 bg-background">
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
              {EXPERTISE_CONTENT.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {EXPERTISE_CONTENT.subtitle}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERTISE_CONTENT.categories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Cloud
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <CardContent className="p-8">
                      {/* Category Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 group/skill"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover/skill:scale-150 transition-transform duration-200" />
                            <span className="text-card-foreground font-medium group-hover/skill:text-primary transition-colors">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary to-primary/80 border-0 text-primary-foreground">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">8+</div>
                    <div className="text-primary-foreground/80">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">30+</div>
                    <div className="text-primary-foreground/80">Technologies Mastered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">7</div>
                    <div className="text-primary-foreground/80">Enterprise Projects</div>
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