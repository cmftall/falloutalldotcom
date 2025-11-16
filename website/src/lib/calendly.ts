// Calendly utility functions
'use client'

import { trackEvent } from '@/lib/analytics'
import { SITE_CONFIG } from '@/lib/constants'

/**
 * Opens Calendly booking page in a new tab
 * @param location - Location identifier for tracking (e.g., 'hero', 'work', 'faq', 'contact', 'header', 'floating_cta')
 * @param buttonText - Optional button text for tracking
 * @param additionalParams - Optional additional tracking parameters
 */
export function openCalendly(
  location: string,
  buttonText?: string,
  additionalParams?: Record<string, any>
) {
  // Track the CTA click
  trackEvent('cta_click', {
    location,
    cta_type: 'calendly',
    button_text: buttonText,
    ...additionalParams
  })

  // Open Calendly in new tab
  const link = document.createElement('a')
  link.href = SITE_CONFIG.links.calendly
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.click()
}

