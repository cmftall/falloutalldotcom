'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/components/providers/I18nProvider'
import { ArrowRight, ChevronDown, Award, Users, TrendingUp, Target, Zap } from 'lucide-react'

export function Hero() {
  const { t } = useI18n()

  // Real metrics from your actual experience
  const impactMetrics = [
    { 
      metric: '30%', 
      label: 'Error Reduction', 
      icon: Target,
      description: 'Through innovative PySpark frameworks at BNC'
    },
    { 
      metric: '25%', 
      label: 'Efficiency Gain', 
      icon: TrendingUp,
      description: 'Across analytical pipelines'
    },
    { 
      metric: '7+', 
      label: 'Team Size', 
      icon: Users,
      description: 'Engineers led successfully'
    },
    { 
      metric: 'Fortune 500', 
      label: 'Clients', 
      icon: Award,
      description: 'Enterprise transformations delivered'
    }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Credential Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-200">
                {t('hero.credential')}
              </span>
            </div>
          </motion.div>

          {/* Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
          >
            <span className="text-white">{t('hero.headline')}</span>
          </motion.h1>

          {/* Impact-Focused Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t('hero.subheadline')}
            </p>

            {/* Real Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2">
                    <metric.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{metric.metric}</div>
                  <div className="text-sm text-blue-200 font-medium">{metric.label}</div>
                  <div className="text-xs text-blue-300 mt-1">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Clear CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              variant="default"
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const workSection = document.getElementById('work')
                workSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('hero.primaryCta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-blue-400 text-blue-200 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('hero.secondaryCta')}
              <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-blue-300 hover:text-white transition-colors duration-300 cursor-pointer group mx-auto"
              onClick={() => {
                const workSection = document.getElementById('work')
                workSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              aria-label="Scroll to see results"
            >
              <span className="text-sm mb-2 group-hover:text-white transition-colors">See the results</span>
              <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}