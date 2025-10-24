'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/components/providers/I18nProvider'
import { MessageSquare, Clock, Users, Mail } from 'lucide-react'

export function Testimonials() {
  const { t } = useI18n()
  
  // Testimonials are being collected - transparent placeholder
  const pendingTestimonials = [
    {
      name: 'Former Manager at BNC',
      role: 'Director of Data Architecture',
      status: 'Requested December 2024',
      company: 'Major Canadian Bank'
    },
    {
      name: 'Engineer I Mentored at BNC',
      role: 'Senior Data Engineer',
      status: 'Requested December 2024',
      company: 'Major Canadian Bank'
    },
    {
      name: 'Team Member I Promoted',
      role: 'Lead Data Engineer',
      status: 'Requested December 2024',
      company: 'Major Canadian Bank'
    }
  ]
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <MessageSquare className="h-8 w-8 text-blue-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Testimonials
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Real feedback from colleagues and managers I've worked with
            </p>
            
            {/* Transparency Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-full text-yellow-800 dark:text-yellow-200 text-sm font-medium">
              <Clock className="h-4 w-4" />
              <span>Currently collecting testimonials</span>
            </div>
          </motion.div>

          {/* Pending Testimonials Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {pendingTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-dashed border-blue-300 dark:border-blue-700"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {testimonial.role}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {testimonial.company}
                </p>
                <div className="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
                  <Mail className="h-3 w-3" />
                  <span>{testimonial.status}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why This Matters - Transparency Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
              <span>📝</span>
              <span>Why am I showing this?</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              I believe in <strong>radical transparency</strong>. Rather than hiding this section until testimonials arrive, 
              I'm showing you exactly who I've asked and when. This way, you know:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>These are <strong>real people</strong> I've worked with, not fabricated quotes</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>I'm actively collecting <strong>verifiable feedback</strong></span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>When testimonials appear here, you'll know they're <strong>authentic</strong></span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Expected timeline: Testimonials typically arrive within 2-4 weeks. Check back soon or connect with me on LinkedIn to verify my work history.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

