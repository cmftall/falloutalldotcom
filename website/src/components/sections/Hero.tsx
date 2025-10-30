'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useI18n } from '@/components/providers/I18nProvider'
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Hero() {
  const { t } = useI18n()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Animated counter hook - memoized for performance
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!hasMounted) return
      
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [end, duration])

    return count
  }

  // Counters for animated metrics
  const savingsCount = useCounter(200, 2000)
  const errorCount = useCounter(30, 2000)
  const pipelinesCount = useCounter(100, 2000)

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>


      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Photo - 40% */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 flex justify-center lg:justify-start"
            >
              <div className="relative group">
                {/* Enhanced Shadow Behind Photo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 blur-2xl" />
                
                {/* Photo Container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Subtle Border with Depth */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent/30 shadow-lg" />
                  
                  {/* Photo */}
                  <Image
                    src="/fallou-tall-photo.jpg"
                    alt="Fallou Tall - Data Architect Consultant"
                    width={384}
                    height={384}
                    className="relative rounded-full object-cover shadow-2xl transition-all duration-300 group-hover:scale-[1.02]"
                    priority
                    quality={90}
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    style={{
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  
                  {/* Inner Glow on Hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Availability Badge */}
                {(() => {
                  const availability = t('hero.availability')
                  return availability && typeof availability === 'string' && availability.trim() !== ''
                })() && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: 'spring' }}
                    className="absolute -bottom-2 right-0 bg-card border-2 border-accent rounded-full px-4 py-2 shadow-xl"
                    style={{
                      boxShadow: '0 10px 15px -3px rgba(212, 175, 55, 0.3), 0 4px 6px -2px rgba(212, 175, 55, 0.2)'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-primary">{t('hero.availability')}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* RIGHT: Content - 60% */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Credential Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground"
              >
                <span className="text-accent">●</span>
                <span>{t('hero.credential')}</span>
              </motion.div>

              {/* Headline - Crimson Pro Serif */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-primary"
              >
                {t('hero.headline')}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                {t('hero.subheadline')}
              </motion.p>

              {/* Animated Impact Metrics - Gold */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
              >
                {/* Savings */}
                <div className="group">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-mono text-4xl md:text-5xl font-bold text-accent">
                      €{savingsCount}K+
                    </span>
                    <TrendingUp className="h-6 w-6 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mt-2">€200K+ Annual Value Delivered</p>
                </div>

                {/* Error Reduction */}
                <div className="group">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-mono text-4xl md:text-5xl font-bold text-accent">
                      {errorCount}%
                    </span>
                    <Target className="h-6 w-6 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mt-2">30% Error Reduction Achieved</p>
                </div>

                {/* Pipelines */}
                <div className="group">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-mono text-4xl md:text-5xl font-bold text-accent">
                      {pipelinesCount}+
                    </span>
                    <Zap className="h-6 w-6 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mt-2">100+ Pipelines in Production</p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.primaryCta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 group"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.secondaryCta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
