// Runtime environment variable validation
'use client'

/**
 * Validates critical environment variables and logs warnings in development
 * Does not throw errors to avoid breaking the site, but logs clear warnings
 */
export function validateEnvironmentVariables() {
  if (typeof window === 'undefined') return // Server-side, skip validation

  const missing: string[] = []
  const warnings: string[] = []

  // Critical for analytics - warn but don't block
  if (!process.env.NEXT_PUBLIC_GA_TRACKING_ID && process.env.NODE_ENV === 'production') {
    warnings.push('NEXT_PUBLIC_GA_TRACKING_ID is missing - Google Analytics will not work')
  }

  if (!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && process.env.NODE_ENV === 'production') {
    warnings.push('NEXT_PUBLIC_PLAUSIBLE_DOMAIN is missing - Plausible Analytics will not work')
  }

  // Critical for error monitoring - warn but don't block
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.NODE_ENV === 'production') {
    warnings.push('NEXT_PUBLIC_SENTRY_DSN is missing - Error monitoring will not work (errors only logged to console)')
  }

  // Log warnings in development and production console
  if (warnings.length > 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️  Environment Variable Warnings:')
      warnings.forEach(warning => console.warn(`  - ${warning}`))
    } else {
      // In production, only log if Sentry is available to track these
      console.warn('Production environment validation:', { warnings, missing })
    }
  }

  return {
    isValid: missing.length === 0,
    missing,
    warnings
  }
}

/**
 * Validates environment on mount - call this in root component
 */
export function useEnvironmentValidation() {
  if (typeof window === 'undefined') return

  // Run validation once on mount
  if (typeof window !== 'undefined') {
    validateEnvironmentVariables()
  }
}


