// Performance monitoring utilities
'use client'

import { useEffect } from 'react'

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

// Core Web Vitals tracking
export function useWebVitals() {
  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV !== 'production') return

    // Track Largest Contentful Paint (LCP)
    const trackLCP = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', lastEntry.startTime)
        }
        
        // Send to analytics service
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals',
            event_label: 'Largest Contentful Paint',
            non_interaction: true,
          })
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] })
    }

    // Track First Input Delay (FID)
    const trackFID = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as any // Type assertion for FID-specific properties
          if (process.env.NODE_ENV === 'development') {
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
          }
          
          // Send to analytics service
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(fidEntry.processingStart - fidEntry.startTime),
              event_category: 'Web Vitals',
              event_label: 'First Input Delay',
              non_interaction: true,
            })
          }
        })
      }).observe({ entryTypes: ['first-input'] })
    }

    // Track Cumulative Layout Shift (CLS)
    const trackCLS = () => {
      let clsValue = 0
      const clsEntries: PerformanceEntry[] = []

      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          const clsEntry = entry as any // Type assertion for CLS-specific properties
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value
            clsEntries.push(entry)
          }
        })
      }).observe({ entryTypes: ['layout-shift'] })

      // Report CLS when page is hidden
      const reportCLS = () => {
        if (process.env.NODE_ENV === 'development') {
          console.log('CLS:', clsValue)
        }
        
        // Send to analytics service
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Web Vitals',
            event_label: 'Cumulative Layout Shift',
            non_interaction: true,
          })
        }
      }

      // Report CLS when page becomes hidden
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          reportCLS()
        }
      })
    }

    // Track First Contentful Paint (FCP)
    const trackFCP = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('FCP:', entry.startTime)
          }
          
          // Send to analytics service
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FCP',
              value: Math.round(entry.startTime),
              event_category: 'Web Vitals',
              event_label: 'First Contentful Paint',
              non_interaction: true,
            })
          }
        })
      }).observe({ entryTypes: ['paint'] })
    }

    // Initialize tracking
    if ('PerformanceObserver' in window) {
      trackLCP()
      trackFID()
      trackCLS()
      trackFCP()
    }
  }, [])
}

// Performance budget monitoring
export function checkPerformanceBudget() {
  if (typeof window === 'undefined') return

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  
  if (navigation) {
    const metrics = {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
    }

    if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metrics:', metrics)
  }

    // Check against performance budgets
    const budgets = {
      domContentLoaded: 1000, // 1 second
      loadComplete: 2000, // 2 seconds
      totalLoadTime: 3000, // 3 seconds
    }

    Object.entries(metrics).forEach(([metric, value]) => {
      const budget = budgets[metric as keyof typeof budgets]
      if (value > budget) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Performance budget exceeded for ${metric}: ${value}ms > ${budget}ms`)
        }
      }
    })
  }
}

// Resource timing analysis
export function analyzeResourceTiming() {
  if (typeof window === 'undefined') return

  const resources = performance.getEntriesByType('resource')
  
  const analysis = {
    totalResources: resources.length,
    totalSize: 0,
    slowResources: [] as PerformanceResourceTiming[],
    largeResources: [] as PerformanceResourceTiming[],
  }

  resources.forEach((resource) => {
    const resourceTiming = resource as PerformanceResourceTiming
    
    // Calculate resource size (approximate)
    const size = resourceTiming.transferSize || 0
    analysis.totalSize += size

    // Identify slow resources (>500ms)
    if (resourceTiming.duration > 500) {
      analysis.slowResources.push(resourceTiming)
    }

    // Identify large resources (>100KB)
    if (size > 100000) {
      analysis.largeResources.push(resourceTiming)
    }
  })

  if (process.env.NODE_ENV === 'development') {
    console.log('Resource Analysis:', analysis)
    
    // Log warnings for performance issues
    if (analysis.slowResources.length > 0) {
      console.warn(`Found ${analysis.slowResources.length} slow resources:`, analysis.slowResources)
    }
    
    if (analysis.largeResources.length > 0) {
      console.warn(`Found ${analysis.largeResources.length} large resources:`, analysis.largeResources)
    }
  }

  return analysis
}
