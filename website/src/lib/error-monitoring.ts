// Error monitoring utilities for production
'use client'

interface ErrorInfo {
  message: string
  stack?: string
  componentStack?: string
  timestamp: number
  userAgent: string
  url: string
}

// Simple error logging service (replace with Sentry, LogRocket, etc. in production)
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

  // Send to your error monitoring service
  // Example: Sentry.captureException(error, { extra: errorData })
  
  // For now, log to console in production (replace with actual service)
  console.error('Production Error:', errorData)
  
  // You could also send to a custom endpoint
  // fetch('/api/errors', { method: 'POST', body: JSON.stringify(errorData) })
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
