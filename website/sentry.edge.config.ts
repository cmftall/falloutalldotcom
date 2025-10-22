import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Set tracesSampleRate to 1.0 to capture 100% of the transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  // Set environment
  environment: process.env.NODE_ENV,
  
  // Set release
  release: process.env.VERCEL_GIT_COMMIT_SHA || 'development',
  
  // Filter out non-errors
  beforeSend(event, hint) {
    // Filter out non-errors in production
    if (process.env.NODE_ENV === 'production' && event.level !== 'error') {
      return null
    }
    return event
  },
})
