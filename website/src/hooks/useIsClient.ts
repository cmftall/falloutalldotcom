// Hook to check if code is running on the client side
'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to determine if the component is mounted on the client side.
 * Useful for components that need to access window, document, or other browser APIs.
 * 
 * @returns {boolean} True if running on client, false during SSR
 * 
 * @example
 * ```tsx
 * const isClient = useIsClient()
 * 
 * if (!isClient) return null
 * 
 * // Safe to use window/document here
 * const width = window.innerWidth
 * ```
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

