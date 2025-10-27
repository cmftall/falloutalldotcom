// Error monitoring utilities (console-based for now)
'use client'

interface ErrorInfo {
  message: string
  stack?: string
  componentStack?: string
  timestamp: number
  userAgent: string
  url: string
}

// Simple error logging (no external service)
export function logError(error: Error, errorInfo?: any) {
  const errorData: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo?.componentStack,
    timestamp: Date.now(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'unknown',
  }

  console.error('Error caught:', errorData)
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

// Simple logging utilities
export function logInfo(message: string, context?: Record<string, any>) {
  console.info('Info:', message, context)
}

export function logWarning(message: string, context?: Record<string, any>) {
  console.warn('Warning:', message, context)
}

export function setUserContext(user: { id?: string; email?: string; username?: string }) {
  console.info('User context set:', user)
}

export function setTag(key: string, value: string) {
  console.info('Tag set:', key, value)
}

export function setContext(key: string, context: Record<string, any>) {
  console.info('Context set:', key, context)
}
