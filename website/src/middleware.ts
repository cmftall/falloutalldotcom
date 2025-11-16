/**
 * Custom middleware for locale routing (replacing next-intl for consistency)
 * 
 * NOTE: Next.js 16 deprecates the 'middleware' file convention in favor of 'proxy'.
 * However, for static exports (output: 'export'), middleware does not execute at runtime.
 * This file is kept for:
 * 1. Development server routing (when running `npm run dev`)
 * 2. Future migration to server-side rendering if needed
 * 
 * The deprecation warning can be safely ignored for static exports.
 * If migrating to SSR, consider updating to the new 'proxy' convention.
 * 
 * See: https://nextjs.org/docs/messages/middleware-to-proxy
 */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'fr']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Check if locale is already in the path
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return pathname.split('/')[1]
  }

  // Try to detect from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const browserLocale = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
    if (locales.includes(browserLocale)) {
      return browserLocale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // Has a file extension
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If no locale in pathname, redirect to default locale or detected locale
  if (!pathnameHasLocale && pathname === '/') {
    const locale = getLocale(request)
    const redirectUrl = new URL(`/${locale}`, request.url)
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*'],
}
