'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from './Button'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    setIsMounted(true)
    
    let ticking = false
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.pageYOffset > 300) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Don't render on server
  if (!isMounted) return null

  const scrollToTop = () => {
    if (typeof window === 'undefined') return
    
    // Account for sticky header
    const headerOffset = 80
    window.scrollTo({
      top: headerOffset,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-36 right-4 md:bottom-8 md:right-8 z-40 transition-all duration-300 opacity-100 scale-100 translate-y-0"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full w-12 h-12 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      )}
    </>
  )
}

