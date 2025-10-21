import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'sophisticated-xs': ['0.75rem', { lineHeight: '1rem' }],
        'sophisticated-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'sophisticated-base': ['1rem', { lineHeight: '1.6rem' }],
        'sophisticated-lg': ['1.125rem', { lineHeight: '1.8rem' }],
        'sophisticated-xl': ['1.25rem', { lineHeight: '1.8rem' }],
        'sophisticated-2xl': ['1.5rem', { lineHeight: '2.2rem' }],
        'sophisticated-3xl': ['1.875rem', { lineHeight: '2.4rem' }],
        'sophisticated-4xl': ['2.25rem', { lineHeight: '2.6rem' }],
        'sophisticated-5xl': ['3rem', { lineHeight: '1.1' }],
        'sophisticated-6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        'sophisticated-sm': '0.375rem',
        'sophisticated-md': '0.5rem',
        'sophisticated-lg': '0.75rem',
        'sophisticated-xl': '1rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideInFromBottom: 'slideInFromBottom 0.6s ease-out',
      },
    },
  },
  plugins: [],
}

export default config