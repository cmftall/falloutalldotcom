'use client'

import { Button } from '@/components/ui/Button'
import { useI18n } from '@/components/providers/I18nProvider'
import { ArrowRight, Target, Zap, TrendingUp } from 'lucide-react'
import { useImagePath } from '@/lib/image-utils'
import { trackEvent } from '@/lib/analytics'
import { logger } from '@/lib/logger'

export function Hero() {
  const { t } = useI18n() as any
  // Use absolute path from root - static files are served from /public/ which maps to root
  // In production with static export, ensure path works with locale routes
  const imagePath = useImagePath('/fallou-tall-photo.jpg')
  
  // Get locale-aware path if needed
  const getImageSrc = () => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      // If on locale route, try relative path first, then absolute
      if (pathname.startsWith('/en/') || pathname.startsWith('/fr/')) {
        const locale = pathname.split('/')[1]
        // Try relative path first (works if image is copied to locale folder)
        return `/${locale}/fallou-tall-photo.jpg`
      }
    }
    // Default to absolute path from root
    return imagePath
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Minimal Background Pattern - Much more subtle */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric Layout - Photo on right, content on left */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* LEFT: Content - Takes more space */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              {/* Credential Badge */}
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-muted-foreground">
                <span className="text-accent">●</span>
                <span>{t('hero.credential')}</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-primary">
                {t('hero.headline')}
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('hero.subheadline')}
              </p>

              {/* Impact Metrics - Enhanced visibility */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-3 pb-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-foreground">{t('hero.metrics.errorReduction')}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                  <Target className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-foreground">{t('hero.metrics.annualValue')}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                  <Zap className="h-3 w-3 md:h-4 md:w-4 text-accent flex-shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-foreground">{t('hero.metrics.international')}</span>
                </div>
              </div>

              {/* Single Primary CTA - Direct to Calendly */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transition-colors group"
                  onClick={() => {
                    trackEvent('cta_click', {
                      location: 'hero',
                      cta_type: 'calendly',
                      button_text: t('hero.primaryCta')
                    })
                    const link = document.createElement('a')
                    link.href = 'https://calendly.com/falloutall'
                    link.target = '_blank'
                    link.rel = 'noopener noreferrer'
                    link.click()
                  }}
                >
                  {t('hero.primaryCta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Testimonial - Visible in Hero */}
              {t('hero.testimonial') && typeof t('hero.testimonial') === 'object' && (
                <div className="pt-8 border-t border-border/30 mt-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 text-3xl text-accent/60 leading-none">"</div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base italic text-muted-foreground leading-relaxed mb-3">
                        {t('hero.testimonial.text')}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{t('hero.testimonial.author')}</span>
                        {`, ${t('hero.testimonial.role')}, ${t('hero.testimonial.company')}`}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: Photo - Premium Design */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-full max-w-md lg:max-w-lg group">
                {/* Layered shadow system for depth */}
                <div className="absolute -inset-2 bg-gradient-to-br from-accent/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                
                {/* Photo container - Premium styling */}
                <div className="relative bg-card border border-border/60 rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:border-accent/30"
                  style={{
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  {/* Vignette effect - more sophisticated */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none z-10" />
                  
                  {/* Image with optimized loading */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={getImageSrc()}
                      alt={t('hero.imageAlt') || 'Fallou Tall - Data Consultant'}
                      width={500}
                      height={625}
                      className="w-full h-auto object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.02]"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget
                        // Try multiple fallback paths for static export compatibility
                        if (typeof window !== 'undefined') {
                          const currentPath = window.location.pathname
                          const absolutePath = '/fallou-tall-photo.jpg'
                          
                          // Try absolute path from root (should work on most servers)
                          const fallback1 = `${window.location.origin}${absolutePath}`
                          
                          // If on locale route, also try relative path
                          if (currentPath.startsWith('/en/') || currentPath.startsWith('/fr/')) {
                            const locale = currentPath.split('/')[1]
                            const relativePath = `/${locale}${absolutePath}`
                            const fallback2 = `${window.location.origin}${relativePath}`
                            
                            logger.error('Failed to load profile image', new Error('Image load failed'), {
                              attemptedPath: target.src,
                              windowOrigin: window.location.origin,
                              currentPath: currentPath,
                              fallback1: fallback1,
                              fallback2: fallback2
                            })
                            
                            // Try absolute path first (most common case)
                            if (target.src !== fallback1 && !target.dataset.triedFallback1) {
                              target.dataset.triedFallback1 = 'true'
                              target.src = fallback1
                              return
                            }
                            // Then try relative path (if image copied to locale folder)
                            if (target.src !== fallback2 && !target.dataset.triedFallback2) {
                              target.dataset.triedFallback2 = 'true'
                              target.src = fallback2
                              return
                            }
                          } else {
                            logger.error('Failed to load profile image', new Error('Image load failed'), {
                              attemptedPath: target.src,
                              windowOrigin: window.location.origin,
                              currentPath: currentPath,
                              fallback: fallback1
                            })
                            if (target.src !== fallback1 && !target.dataset.triedFallback) {
                              target.dataset.triedFallback = 'true'
                              target.src = fallback1
                            }
                          }
                        } else {
                          logger.error('Failed to load profile image', new Error('Image load failed'), {
                            attemptedPath: imagePath
                          })
                        }
                      }}
                    />
                  </div>
                  
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent shine-sweep" />
                  </div>
                  
                  {/* Credibility indicator - subtle badge */}
                  <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm border border-accent/20 rounded-full px-3 py-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-accent">{t('hero.credential')}</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent dot - decorative element */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 shadow-lg shadow-accent/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

