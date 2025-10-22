/**
 * API Contracts for Website Internationalization
 * 
 * This file defines the TypeScript interfaces and types for the internationalization
 * feature. These contracts ensure type safety and consistency across the application.
 */

// ============================================================================
// Core Types
// ============================================================================

export type SupportedLocale = 'en' | 'fr';

export type LanguageSource = 'detected' | 'manual';

export type ContentNamespace = 
  | 'navigation'
  | 'hero'
  | 'about'
  | 'expertise'
  | 'education'
  | 'certifications'
  | 'contact'
  | 'footer'
  | 'common';

// ============================================================================
// Language Preference Entity
// ============================================================================

export interface LanguagePreference {
  /** Language code (e.g., 'en', 'fr') */
  locale: SupportedLocale;
  
  /** How the preference was set */
  source: LanguageSource;
  
  /** When preference was last updated (Unix timestamp) */
  timestamp: number;
  
  /** Whether to persist across sessions */
  persistent: boolean;
}

// ============================================================================
// Translation Content Entity
// ============================================================================

export interface TranslationContent {
  /** Content category */
  namespace: ContentNamespace;
  
  /** Language code */
  locale: SupportedLocale;
  
  /** Translation key-value pairs */
  translations: Record<string, string>;
  
  /** Fallback text if translation missing */
  fallback?: string;
}

// ============================================================================
// Language Detection Entity
// ============================================================================

export interface LanguageDetection {
  /** Primary language from navigator.language */
  primary: string;
  
  /** Array of preferred languages */
  languages: string[];
  
  /** Default language if none supported */
  fallback: SupportedLocale;
  
  /** When detection occurred (Unix timestamp) */
  timestamp: number;
}

// ============================================================================
// API Response Types
// ============================================================================

export interface LanguageDetectionResponse {
  success: boolean;
  data: {
    detectedLocale: SupportedLocale;
    source: LanguageSource;
    confidence: 'high' | 'medium' | 'low';
  };
  error?: string;
}

export interface TranslationResponse {
  success: boolean;
  data: {
    locale: SupportedLocale;
    namespace: ContentNamespace;
    translations: Record<string, string>;
  };
  error?: string;
}

export interface LanguageChangeResponse {
  success: boolean;
  data: {
    previousLocale: SupportedLocale;
    newLocale: SupportedLocale;
    timestamp: number;
  };
  error?: string;
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface LanguageSelectorProps {
  /** Current selected language */
  currentLocale: SupportedLocale;
  
  /** Available languages */
  availableLocales: SupportedLocale[];
  
  /** Callback when language changes */
  onLanguageChange: (locale: SupportedLocale) => void;
  
  /** Whether selector is disabled */
  disabled?: boolean;
  
  /** Custom CSS classes */
  className?: string;
}

export interface TranslationProviderProps {
  /** Initial language */
  initialLocale: SupportedLocale;
  
  /** Available languages */
  supportedLocales: SupportedLocale[];
  
  /** Children components */
  children: React.ReactNode;
}

// ============================================================================
// Hook Return Types
// ============================================================================

export interface UseTranslationReturn {
  /** Current language */
  locale: SupportedLocale;
  
  /** Translation function */
  t: (key: string, namespace?: ContentNamespace) => string;
  
  /** Change language function */
  changeLanguage: (locale: SupportedLocale) => Promise<void>;
  
  /** Loading state */
  isLoading: boolean;
  
  /** Error state */
  error: string | null;
}

export interface UseLanguageDetectionReturn {
  /** Detected language */
  detectedLocale: SupportedLocale;
  
  /** Detection confidence */
  confidence: 'high' | 'medium' | 'low';
  
  /** Detection source */
  source: LanguageSource;
  
  /** Detection error */
  error: string | null;
}

// ============================================================================
// Configuration Types
// ============================================================================

export interface I18nConfig {
  /** Default language */
  defaultLocale: SupportedLocale;
  
  /** Supported languages */
  supportedLocales: SupportedLocale[];
  
  /** Fallback language */
  fallbackLocale: SupportedLocale;
  
  /** Translation file paths */
  translationPaths: Record<SupportedLocale, string>;
  
  /** Storage key for language preference */
  storageKey: string;
  
  /** Whether to persist language preference */
  persistPreference: boolean;
}

// ============================================================================
// Error Types
// ============================================================================

export class TranslationError extends Error {
  constructor(
    message: string,
    public key: string,
    public namespace: ContentNamespace,
    public locale: SupportedLocale
  ) {
    super(message);
    this.name = 'TranslationError';
  }
}

export class LanguageDetectionError extends Error {
  constructor(
    message: string,
    public detectedLanguage: string,
    public supportedLanguages: SupportedLocale[]
  ) {
    super(message);
    this.name = 'LanguageDetectionError';
  }
}

// ============================================================================
// Utility Types
// ============================================================================

export type TranslationKey<T extends ContentNamespace> = 
  T extends 'navigation' ? 
    | 'home' | 'about' | 'expertise' | 'education' | 'certifications' | 'contact' :
  T extends 'hero' ?
    | 'title' | 'subtitle' | 'primaryCta' | 'secondaryCta' | 'credential' :
  T extends 'about' ?
    | 'title' | 'description' | 'highlights' | 'quote' :
  T extends 'expertise' ?
    | 'title' | 'subtitle' | 'categories' :
  T extends 'education' ?
    | 'title' | 'subtitle' | 'education' :
  T extends 'certifications' ?
    | 'title' | 'subtitle' | 'certifications' :
  T extends 'contact' ?
    | 'title' | 'subtitle' | 'form' | 'info' :
  T extends 'footer' ?
    | 'copyright' | 'links' | 'social' :
  T extends 'common' ?
    | 'loading' | 'error' | 'retry' | 'close' | 'open' :
  string;

export type TranslationFunction = <T extends ContentNamespace>(
  key: TranslationKey<T>,
  namespace: T,
  options?: {
    fallback?: string;
    variables?: Record<string, string | number>;
  }
) => string;
