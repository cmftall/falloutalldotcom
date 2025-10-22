import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground text-lg">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Or try one of these pages:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/#about" className="text-sm text-primary hover:underline">
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#work" className="text-sm text-primary hover:underline">
              Work
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#expertise" className="text-sm text-primary hover:underline">
              Expertise
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#contact" className="text-sm text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}