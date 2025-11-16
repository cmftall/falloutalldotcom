'use client'

import { Button } from '@/components/ui/Button'
import { useI18n } from '@/components/providers/I18nProvider'
import { ArrowRight, Zap, TrendingUp, Clock, Shield } from 'lucide-react'
import { useImagePath } from '@/lib/image-utils'
import { openCalendly } from '@/lib/calendly'
import { logger } from '@/lib/logger'

export function Hero() {
  const { t } = useI18n()
  // Use absolute path from root - static files are served from /public/ which maps to root
  // In production with static export, ensure path works with locale routes
  const imagePath = useImagePath('/fallou-tall-photo.jpg')
  
  // Get locale-aware path if needed
  // With Next.js static export, files in public/ are copied to root of out/
  // So /fallou-tall-photo.jpg should work from any route
  const getImageSrc = () => {
    // Always use absolute path from root - Next.js static export serves public files from root
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* LEFT: Content - Takes more space */}
            <div className="lg:col-span-7">
              {/* Credential Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-accent mb-6">
                <span className="text-accent">●</span>
                <span>{t('hero.credential')}</span>
              </div>

              {/* Headline - Aligned with image top */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-primary mb-6">
                {t('hero.headline')}
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                {t('hero.subheadline')}
              </p>

              {/* Impact Metrics - Enhanced visibility with readable mobile sizes */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4 mb-6" role="list" aria-label="Key achievements">
                <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-3 py-1.5 md:py-1.5 bg-accent/10 border border-accent/20 rounded-full" role="listitem">
                  <TrendingUp className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs md:text-sm lg:text-base font-semibold text-foreground leading-tight">{t('hero.metrics.errorReduction')}</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-3 py-1.5 md:py-1.5 bg-accent/10 border border-accent/20 rounded-full" role="listitem">
                  <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs md:text-sm lg:text-base font-semibold text-foreground leading-tight">{t('hero.metrics.timeToInsight')}</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-3 py-1.5 md:py-1.5 bg-accent/10 border border-accent/20 rounded-full" role="listitem">
                  <Shield className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs md:text-sm lg:text-base font-semibold text-foreground leading-tight whitespace-nowrap">{t('hero.metrics.zeroDowntime')}</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-3 py-1.5 md:py-1.5 bg-accent/10 border border-accent/20 rounded-full" role="listitem">
                  <Zap className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs md:text-sm lg:text-base font-semibold text-foreground leading-tight">{t('hero.metrics.international')}</span>
                </div>
              </div>

              {/* Single Primary CTA - Direct to Calendly (Before testimonial for better conversion) */}
              <div className="mb-6">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold transition-colors shadow-lg hover:shadow-xl group"
                  onClick={() => {
                    const buttonText = typeof t('hero.primaryCta') === 'string' ? t('hero.primaryCta') : 'Get Your Free Strategy Call'
                    openCalendly('hero', buttonText)
                  }}
                  aria-label={typeof t('hero.primaryCta') === 'string' ? t('hero.primaryCta') : 'Schedule a free strategy call'}
                >
                  {t('hero.primaryCta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </div>

              {/* Testimonial - Below CTA as social proof (less distracting) */}
              {t('hero.testimonial') && typeof t('hero.testimonial') === 'object' && (
                <div className="pt-2">
                  <div className="bg-card/50 border border-accent/20 rounded-lg p-3 md:p-4">
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 text-xl md:text-2xl text-accent/60 leading-none">"</div>
                      <div className="flex-1">
                        <p className="text-xs md:text-sm italic text-muted-foreground leading-relaxed mb-2">
                          {t('hero.testimonial.text')}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">{t('hero.testimonial.author')}</span>
                          {`, ${t('hero.testimonial.role')}, ${t('hero.testimonial.company')}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: Photo - Premium Design - Aligned with headline start */}
            {/* Padding-top matches credential badge (text-sm line-height ~1.5rem) + mb-6 (1.5rem) = 3rem */}
            {/* This aligns the image top edge with the headline baseline */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last lg:sticky lg:top-24 lg:self-start lg:pt-12">
              <div className="relative w-full max-w-md lg:max-w-lg group">
                {/* Simplified shadow - Single layer */}
                <div className="absolute -inset-1 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                
                {/* Photo container - Simplified styling */}
                <div className="relative bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 ease-out group-hover:border-accent/40"
                  style={{
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Single subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none z-10" />
                  
                  {/* Image with optimized loading - Fixed aspect ratio to prevent layout shift */}
                  {/* Using 4:3 ratio (1024x768) to match actual image dimensions */}
                  <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                    {/* Placeholder/Skeleton while image loads */}
                    <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted animate-pulse" aria-hidden="true" />
                    
                    {/* Modern image formats with fallback */}
                    <picture>
                      {/* AVIF - Best compression, modern browsers */}
                      <source
                        srcSet={`${getImageSrc().replace('.jpg', '.avif')}`}
                        type="image/avif"
                      />
                      {/* WebP - Good compression, wide support */}
                      <source
                        srcSet={`${getImageSrc().replace('.jpg', '.webp')}`}
                        type="image/webp"
                      />
                      {/* JPEG fallback - Universal support */}
                      <img
                        src={getImageSrc()}
                        alt={t('hero.imageAlt') || 'Fallou Tall - Data Consultant'}
                        width={1024}
                        height={768}
                        className="w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.02] relative z-10"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        style={{ aspectRatio: '4/3' }}
                        onLoad={(e) => {
                          // Hide placeholder when image loads
                          const container = e.currentTarget.closest('[style*="aspect-ratio"]') as HTMLElement
                          if (container) {
                            const placeholder = container.querySelector('.animate-pulse') as HTMLElement
                            if (placeholder) {
                              placeholder.style.opacity = '0'
                              placeholder.style.transition = 'opacity 0.3s ease-out'
                            }
                          }
                        }}
                        onError={(e) => {
                          // Handle JPEG load failure - try absolute path fallback
                          const target = e.currentTarget
                          if (typeof window !== 'undefined' && !target.dataset.triedFallback) {
                            const fallback = `${window.location.origin}/fallou-tall-photo.jpg`
                            if (target.src !== fallback) {
                              target.dataset.triedFallback = 'true'
                              target.src = fallback
                            }
                          }
                        }}
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

