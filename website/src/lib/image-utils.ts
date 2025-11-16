/**
 * Utilities for handling images in static export with locale routing
 * Ensures correct image paths regardless of current route
 */

/**
 * Get the correct image path that works with static export and locale routing
 * Handles both absolute paths (from root) and ensures compatibility with trailing slashes
 */
export function getImagePath(path: string): string {
  // If path starts with http/https, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // Ensure path starts with / for absolute path from root
  if (!path.startsWith('/')) {
    return `/${path}`
  }

  // Return absolute path - works with static export
  // Even with /en/ or /fr/ routes, /image.jpg resolves to root
  return path
}

/**
 * Client-side hook to get image path with maximum compatibility
 * Returns absolute path from root that works with static export
 * Uses base path to ensure correct resolution in all environments
 */
export function useImagePath(path: string): string {
  // In browser, ensure absolute path from root
  if (typeof window !== 'undefined') {
    // If already absolute, return as-is
    if (path.startsWith('/')) {
      return path
    }
    // Make absolute
    return `/${path}`
  }
  
  // Server-side: return absolute path
  return getImagePath(path)
}

