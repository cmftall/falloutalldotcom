import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image optimization configuration
  // Images MUST be unoptimized for static export (output: 'export')
  images: {
    unoptimized: true, // Required for static export - Next.js Image API not available in static builds
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Ensure proper loading for Vercel deployment
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Note: ESLint configuration is in eslint.config.mjs
  // Next.js 16 handles ESLint automatically during builds
  // Note: Headers are not applied with static export (output: 'export')
  // For static hosting (Vercel/Netlify), configure headers via _headers file or platform settings
  // async headers() {
  //   // Headers disabled for static export compatibility
  //   // Configure security headers via platform-specific methods:
  //   // - Vercel: vercel.json or platform settings
  //   // - Netlify: _headers file in public directory
  //   return []
  // },
}

// Production configuration for static export
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'
  nextConfig.trailingSlash = true
  nextConfig.distDir = 'out'
  nextConfig.assetPrefix = ''
}

export default nextConfig