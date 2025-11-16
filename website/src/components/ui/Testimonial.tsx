'use client'

import { Quote } from 'lucide-react'
import type { Testimonial as TestimonialType } from '@/lib/types'

interface TestimonialProps {
  testimonial: TestimonialType
  className?: string
}

export function Testimonial({ testimonial, className = '' }: TestimonialProps) {
  return (
    <div className={`bg-card border-2 border-accent/20 rounded-xl p-8 relative overflow-hidden ${className}`}>
      {/* Quote icon decoration */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote className="h-16 w-16 text-accent" />
      </div>
      
      {/* Testimonial text */}
      <div className="relative z-10">
        <p className="text-lg text-foreground leading-relaxed mb-6 italic">
          "{testimonial.text}"
        </p>
        
        {/* Author info */}
        <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
          <div className="flex-1">
            <p className="font-semibold text-primary text-base">
              {testimonial.author}
            </p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
            </p>
            <p className="text-sm text-muted-foreground">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

