'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Download, CheckCircle, FileText } from 'lucide-react'
import { useState } from 'react'

export function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    console.log('Email submitted:', email)
    setSubmitted(true)
    
    // Simulate download
    setTimeout(() => {
      window.open('/downloads/data-architecture-audit-checklist.pdf', '_blank')
    }, 500)
  }

  if (submitted) {
    return (
      <section className="py-20 bg-accent/5 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-accent/30 rounded-lg p-8 shadow-xl"
            >
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                Check Your Email!
              </h3>
              <p className="text-base text-muted-foreground mb-6">
                Your Data Architecture Audit Checklist is on its way. Check your inbox in the next few minutes.
              </p>
              <Button
                onClick={() => window.location.href = '#contact'}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Book a Discovery Call
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-accent/5 border-y border-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Visual + Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Icon Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                <Download className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">FREE DOWNLOAD</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                10-Point Data Architecture Audit Checklist
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                The same framework I use to identify €100K+ savings opportunities for enterprise clients.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-6">
                {[
                  'Identify data quality issues costing you €50K-200K/year',
                  'Assess your architecture against enterprise best practices',
                  'Discover quick wins for immediate ROI improvement',
                  'Get actionable recommendations for each area'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Battle-tested framework
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Used across 50+ enterprise assessments
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Email Capture Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border-2 border-accent/30 rounded-lg p-8 shadow-xl relative overflow-hidden">
                {/* Gold corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent opacity-20" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent opacity-20" />

                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3 text-center">
                    Download Your Free Checklist
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 text-center">
                    No spam. Unsubscribe anytime. Instant PDF delivery.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background text-foreground"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Get My Free Checklist
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Join 500+ data leaders getting insights weekly
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  🔒 Your email is safe. I hate spam as much as you do.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

