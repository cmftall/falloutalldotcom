'use client'

import { useEffect } from 'react'
import { initGoogleAnalytics, initPlausible, trackWebVitals } from '@/lib/analytics'
import { initErrorTracking } from '@/lib/error-monitoring'

export function Analytics() {
  useEffect(() => {
    // Initialize error tracking in all environments
    initErrorTracking()

    // Only initialize analytics in production
    if (process.env.NODE_ENV !== 'production') return

    // Initialize Google Analytics if tracking ID is provided
    const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID
    if (gaTrackingId) {
      initGoogleAnalytics(gaTrackingId)
    }

    // Initialize Plausible if domain is provided
    const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
    if (plausibleDomain) {
      initPlausible(plausibleDomain)
    }

    // Track Core Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(trackWebVitals)
        onINP(trackWebVitals)
        onFCP(trackWebVitals)
        onLCP(trackWebVitals)
        onTTFB(trackWebVitals)
      })
    }
  }, [])

  return null
}
