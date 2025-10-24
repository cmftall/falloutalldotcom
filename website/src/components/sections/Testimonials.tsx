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
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Premium Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <MessageSquare className="h-6 w-6 text-accent" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                Testimonials
              </h2>
              <MessageSquare className="h-6 w-6 text-accent" />
              <div className="h-px w-8 bg-accent" />
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
              Real feedback from colleagues and managers I've worked with
            </p>
            
            {/* Premium Transparency Badge */}
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
              <Clock className="h-4 w-4" />
              <span>Currently Collecting Testimonials</span>
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
                className="bg-card rounded-lg p-6 shadow-sm border border-dashed border-accent/30 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2 font-medium">
                  {testimonial.role}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {testimonial.company}
                </p>
                <div className="flex items-center space-x-1 text-xs text-accent font-medium">
                  <Mail className="h-3 w-3" />
                  <span>{testimonial.status}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Transparency Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card border border-accent/20 rounded-lg p-8 relative overflow-hidden"
          >
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent opacity-30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent opacity-30" />
            
            <div className="relative z-10">
              <h3 className="font-serif text-xl font-bold text-primary mb-4 flex items-center space-x-2">
                <span className="text-2xl">📝</span>
                <span>Why am I showing this?</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I believe in <strong className="text-accent">radical transparency</strong>. Rather than hiding this section until testimonials arrive, 
                I'm showing you exactly who I've asked and when. This way, you know:
              </p>
              <ul className="space-y-3 text-sm text-foreground mb-4">
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>These are <strong>real people</strong> I've worked with, not fabricated quotes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>I'm actively collecting <strong>verifiable feedback</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>When testimonials appear here, you'll know they're <strong>authentic</strong></span>
                </li>
              </ul>
              <div className="pt-4 border-t border-accent/20">
                <p className="text-xs text-muted-foreground italic">
                  <strong className="text-accent">Timeline:</strong> Testimonials typically arrive within 2-4 weeks. Connect with me on LinkedIn to verify my work history.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

