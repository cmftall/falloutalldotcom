import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button'
    return (
      <Comp
        className={cn(
          'sophisticated-button',
          {
            'sophisticated-button-primary': variant === 'default',
            'sophisticated-button-secondary': variant === 'secondary',
            'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg transition-all duration-200': variant === 'destructive',
            'border-2 border-border bg-background hover:bg-accent/5 hover:border-accent/50 shadow-sm hover:shadow-md transition-all duration-200': variant === 'outline',
            'hover:bg-accent/10 hover:text-accent transition-colors duration-200': variant === 'ghost',
            'text-primary underline-offset-4 hover:underline transition-colors duration-200': variant === 'link',
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-12 rounded-lg px-8': size === 'lg',
            'h-10 w-10 rounded-md': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }