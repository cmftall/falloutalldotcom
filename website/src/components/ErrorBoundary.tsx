'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { logError } from '@/lib/error-monitoring'
import { useI18n } from '@/components/providers/I18nProvider'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service
    logError(error, errorInfo)
    // Always log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught error:', error)
      console.error('Error info:', errorInfo)
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  // Use i18n if available, otherwise fallback to English
  let t: (key: string) => string
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t: i18nT } = useI18n()
    t = i18nT
  } catch {
    // Fallback translations if i18n context is not available
    const fallbacks: Record<string, string> = {
      'error.title': 'Something went wrong',
      'error.message': "We're sorry, but something unexpected happened. Please try refreshing the page.",
      'error.details': 'Error Details',
      'error.tryAgain': 'Try Again',
      'error.refreshPage': 'Refresh Page'
    }
    t = (key: string) => fallbacks[key] || key
  }

  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-destructive" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">{t('error.title')}</h2>
          <p className="text-muted-foreground">
            {t('error.message')}
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="text-left bg-muted p-4 rounded-lg">
            <summary className="cursor-pointer font-medium text-sm">{t('error.details')}</summary>
            <pre className="mt-2 text-xs text-muted-foreground whitespace-pre-wrap">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}

        <div className="flex gap-4 justify-center">
          <Button onClick={resetError} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            {t('error.tryAgain')}
          </Button>
          <Button onClick={() => window.location.reload()}>
            {t('error.refreshPage')}
          </Button>
        </div>
      </div>
    </div>
  )
}
