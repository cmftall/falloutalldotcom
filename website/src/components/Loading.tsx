// Loading components for better UX
import { Loader2 } from 'lucide-react'

export function LoadingSpinner({ size = 'default', className = '' }: { size?: 'sm' | 'default' | 'lg'; className?: string }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    default: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  )
}

export function LoadingCard({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-muted rounded-lg ${className}`}>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-muted-foreground/20 rounded"></div>
          <div className="h-3 bg-muted-foreground/20 rounded w-5/6"></div>
        </div>
        <div className="h-8 bg-muted-foreground/20 rounded w-1/3"></div>
      </div>
    </div>
  )
}

export function LoadingSection({ className = '' }: { className?: string }) {
  return (
    <div className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header skeleton */}
          <div className="text-center space-y-4">
            <div className="h-8 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
          </div>
          
          {/* Content skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function LoadingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header skeleton */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="h-8 bg-muted rounded w-32"></div>
            <div className="hidden md:flex space-x-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded w-16"></div>
              ))}
            </div>
            <div className="h-8 bg-muted rounded w-24"></div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <main className="flex-1">
        <LoadingSection />
        <LoadingSection className="bg-muted/30" />
        <LoadingSection />
      </main>

      {/* Footer skeleton */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="h-6 bg-muted rounded w-48 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-64 mx-auto"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
