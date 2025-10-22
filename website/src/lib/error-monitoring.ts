// Error monitoring utilities for production with Sentry integration
'use client'

import * as Sentry from '@sentry/nextjs'

interface ErrorInfo {
  message: string
  stack?: string
  componentStack?: string
  timestamp: number
  userAgent: string
  url: string
}

// Enhanced error logging service with Sentry
export function logError(error: Error, errorInfo?: any) {
  if (process.env.NODE_ENV !== 'production') {
    console.error('Error caught:', error, errorInfo)
    return
  }

  const errorData: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo?.componentStack,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    url: window.location.href,
  }

  // Send to Sentry
  Sentry.captureException(error, {
    extra: errorData as Record<string, any>,
    tags: {
      component: errorInfo?.componentName || 'unknown',
    },
  })
  
  // Also log to console for debugging
  console.error('Production Error:', errorData)
}

// Track unhandled promise rejections
export function trackUnhandledRejections() {
  if (typeof window === 'undefined') return

  window.addEventListener('unhandledrejection', (event) => {
    logError(new Error(event.reason), { type: 'unhandledrejection' })
  })
}

// Track uncaught errors
export function trackUncaughtErrors() {
  if (typeof window === 'undefined') return

  window.addEventListener('error', (event) => {
    logError(event.error, { type: 'uncaught' })
  })
}

// Initialize error tracking
export function initErrorTracking() {
  trackUnhandledRejections()
  trackUncaughtErrors()
}

// Additional Sentry utilities
export function logInfo(message: string, context?: Record<string, any>) {
  console.info('Info:', message, context)
  Sentry.addBreadcrumb({
    message,
    level: 'info',
    data: context,
  })
}

export function logWarning(message: string, context?: Record<string, any>) {
  console.warn('Warning:', message, context)
  Sentry.addBreadcrumb({
    message,
    level: 'warning',
    data: context,
  })
}

export function setUserContext(user: { id?: string; email?: string; username?: string }) {
  Sentry.setUser(user)
}

export function setTag(key: string, value: string) {
  Sentry.setTag(key, value)
}

export function setContext(key: string, context: Record<string, any>) {
  Sentry.setContext(key, context)
}
