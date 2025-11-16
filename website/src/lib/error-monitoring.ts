// Error monitoring utilities (console-based for now)
'use client'

import { logger } from './logger'

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

  // Always log errors (critical for debugging)
  logger.error('Error caught', new Error(errorData.message), errorData)
  
  // In production, send to Sentry if configured
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && (window as any).Sentry) {
    (window as any).Sentry.captureException(errorData)
  }
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

// Simple logging utilities (deprecated - use logger instead)
export function logInfo(message: string, context?: Record<string, any>) {
  logger.info(message, context)
}

export function logWarning(message: string, context?: Record<string, any>) {
  logger.warn(message, context)
}

export function setUserContext(user: { id?: string; email?: string; username?: string }) {
  logger.debug('User context set', user)
}

export function setTag(key: string, value: string) {
  logger.debug('Tag set', { key, value })
}

export function setContext(key: string, context: Record<string, any>) {
  logger.debug('Context set', { key, ...context })
}
