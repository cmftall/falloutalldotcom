/**
 * Production-safe logging utility
 * 
 * - In development: logs to console
 * - In production: only errors are logged, others are sent to monitoring service if available
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug'

interface LogContext {
  [key: string]: any
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private isProduction = process.env.NODE_ENV === 'production'

  /**
   * Log informational messages (development only)
   */
  log(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.log(`[LOG] ${message}`, ...args)
    }
  }

  /**
   * Log debug messages (development only)
   */
  debug(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, ...args)
    }
  }

  /**
   * Log info messages (development only)
   */
  info(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, context || '')
    }
  }

  /**
   * Log warnings
   * - Development: console.warn
   * - Production: Sentry if available, otherwise silent
   */
  warn(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, context || '')
    } else {
      // In production, send to monitoring service if available
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        ;(window as any).Sentry.captureMessage(message, {
          level: 'warning',
          extra: context,
        })
      }
    }
  }

  /**
   * Log errors
   * - Always logged (critical for debugging)
   * - Sent to Sentry in production if available
   */
  error(message: string, error?: Error | any, context?: LogContext): void {
    // Always log errors (critical for debugging)
    console.error(`[ERROR] ${message}`, error || '', context || '')

    // In production, send to monitoring service if available
    if (this.isProduction && typeof window !== 'undefined') {
      if ((window as any).Sentry) {
        if (error instanceof Error) {
          ;(window as any).Sentry.captureException(error, {
            extra: { message, ...context },
          })
        } else {
          ;(window as any).Sentry.captureMessage(message, {
            level: 'error',
            extra: { error, ...context },
          })
        }
      }
    }
  }

  /**
   * Log performance metrics (development only)
   */
  performance(metric: string, value: number, unit: string = 'ms'): void {
    if (this.isDevelopment) {
      console.log(`[PERF] ${metric}: ${value}${unit}`)
    }
  }
}

// Export singleton instance
export const logger = new Logger()

// Export for convenience
export default logger

