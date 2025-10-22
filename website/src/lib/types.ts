// Re-export types from locale.ts for convenience
export type { LanguageSource, LanguagePreference } from './locale'

// Define Locale type locally
export type Locale = 'en' | 'fr'

// Import for internal use
import type { LanguageSource } from './locale'

// Navigation types
export interface NavItem {
  label: string
  href: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  languages: string[]
  linkedin: string
  github: string
}

// Additional types for internationalization
export type ContentNamespace = 
  | 'navigation'
  | 'hero'
  | 'about'
  | 'expertise'
  | 'education'
  | 'certifications'
  | 'contact'
  | 'footer'
  | 'common'

export interface TranslationKey {
  namespace: ContentNamespace
  key: string
}

export interface TranslationOptions {
  fallback?: string
  variables?: Record<string, string | number>
}

// Language selector component props
export interface LanguageSelectorProps {
  currentLocale: string
  availableLocales: string[]
  onLanguageChange: (locale: string) => void
  disabled?: boolean
  className?: string
}

// Translation hook return type
export interface UseTranslationReturn {
  locale: string
  t: (key: string, namespace?: ContentNamespace, options?: TranslationOptions) => string
  changeLanguage: (locale: string) => Promise<void>
  isLoading: boolean
  error: string | null
}

// Language detection result
export interface LanguageDetectionResult {
  detectedLocale: string
  source: LanguageSource
  confidence: 'high' | 'medium' | 'low'
}

// Error types
export class TranslationError extends Error {
  constructor(
    message: string,
    public key: string,
    public namespace: ContentNamespace,
    public locale: string
  ) {
    super(message)
    this.name = 'TranslationError'
  }
}

export class LanguageDetectionError extends Error {
  constructor(
    message: string,
    public detectedLanguage: string,
    public supportedLanguages: string[]
  ) {
    super(message)
    this.name = 'LanguageDetectionError'
  }
}