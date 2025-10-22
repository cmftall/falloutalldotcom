import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Development configuration
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Disable ESLint during build to avoid configuration issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Security headers for production (compatible with static export)
  async headers() {
    // Only apply headers in production and when not using static export
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_USE_HEADERS === 'true') {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()',
            },
            {
              key: 'Content-Security-Policy',
              value: [
                "default-src 'self'",
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://plausible.io",
                "style-src 'self' 'unsafe-inline'",
                "img-src 'self' data: blob: https:",
                "font-src 'self'",
                "connect-src 'self' https://www.google-analytics.com https://plausible.io",
                "frame-ancestors 'none'",
              ].join('; '),
            },
          ],
        },
      ]
    }
    return []
  },
}

// Production configuration for static export
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'
  nextConfig.trailingSlash = true
  nextConfig.distDir = 'out'
  nextConfig.assetPrefix = ''
}

export default nextConfig