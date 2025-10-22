/**
 * TypeScript Interfaces for Data Architect Branding Enhancement
 * 
 * This file defines the TypeScript interfaces for the enhanced data architect
 * branding feature, ensuring type safety and consistency across the application.
 */

// ============================================================================
// Core Entity Interfaces
// ============================================================================

export interface ProfessionalProfile {
  name: string;
  title: string;
  location: string;
  experience_years: number;
  expertise_areas: string[];
  unique_positioning: string;
  credibility_indicators: string[];
}

export interface BusinessImpact {
  metric_name: string;
  percentage: number;
  description: string;
}

export interface ProjectPortfolio {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  focus_area: string;
  key_achievements: string[];
  technologies: string[];
  business_impact: BusinessImpact[];
  technical_innovation: string[];
  industry: string;
  featured?: boolean;
}

export interface TechnicalExpertise {
  category: string;
  skills: string[];
  proficiency_level: 'Expert' | 'Advanced' | 'Intermediate';
  years_experience: number;
  certifications: string[];
  methodologies: string[];
}

export interface IndustryAuthority {
  content_type: string;
  title: string;
  description: string;
  key_insights: string[];
  target_audience: ('technical' | 'business')[];
  publication_date: string;
  recognition: string[];
}

// ============================================================================
// Content Management Interfaces
// ============================================================================

export interface ContentSection {
  id: string;
  title: string;
  subtitle?: string;
  content: ContentBlock[];
  priority: number;
  target_audience: ('technical' | 'business')[];
  display_order: number;
}

export interface ContentBlock {
  type: 'text' | 'metrics' | 'technologies' | 'achievements' | 'cta';
  content: string;
  metadata?: Record<string, any>;
  emphasis?: 'high' | 'medium' | 'low';
}

export interface CallToAction {
  id: string;
  text: string;
  url: string;
  type: 'primary' | 'secondary' | 'tertiary';
  target_audience: ('technical' | 'business')[];
  placement: 'hero' | 'project' | 'expertise' | 'contact';
}

// ============================================================================
// Translation and Localization Interfaces
// ============================================================================

export interface TranslationKey {
  key: string;
  value: string;
  context?: string;
  variables?: Record<string, string>;
}

export interface LocalizedContent {
  locale: 'en' | 'fr';
  content: Record<string, TranslationKey>;
  last_updated: string;
}

// ============================================================================
// Performance and Analytics Interfaces
// ============================================================================

export interface PerformanceMetrics {
  core_web_vitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
  lighthouse_scores: {
    performance: number;
    accessibility: number;
    best_practices: number;
    seo: number;
  };
  bundle_size: {
    main: number;
    total: number;
  };
}

export interface AnalyticsEvent {
  event_type: 'page_view' | 'cta_click' | 'project_view' | 'contact_form';
  properties: Record<string, any>;
  timestamp: string;
  user_agent: string;
  session_id: string;
}

// ============================================================================
// Configuration Interfaces
// ============================================================================

export interface SiteConfiguration {
  name: string;
  description: string;
  url: string;
  default_locale: 'en' | 'fr';
  supported_locales: ('en' | 'fr')[];
  theme: {
    primary_color: string;
    secondary_color: string;
    accent_color: string;
  };
  seo: {
    title_template: string;
    description_template: string;
    keywords: string[];
  };
}

export interface FeatureFlags {
  enable_analytics: boolean;
  enable_error_tracking: boolean;
  enable_performance_monitoring: boolean;
  enable_a11y_testing: boolean;
  enable_lighthouse_ci: boolean;
}

// ============================================================================
// Validation Schemas
// ============================================================================

export interface ValidationRule {
  field: string;
  type: 'required' | 'min_length' | 'max_length' | 'pattern' | 'custom';
  value?: any;
  message: string;
}

export interface ValidationSchema {
  entity: string;
  rules: ValidationRule[];
}

// ============================================================================
// Error Handling Interfaces
// ============================================================================

export interface ErrorContext {
  component: string;
  action: string;
  user_id?: string;
  session_id?: string;
  timestamp: string;
  user_agent: string;
  url: string;
}

export interface ErrorReport {
  id: string;
  error: Error;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  resolved: boolean;
  created_at: string;
  resolved_at?: string;
}

// ============================================================================
// Type Guards
// ============================================================================

export function isProfessionalProfile(obj: any): obj is ProfessionalProfile {
  return (
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.experience_years === 'number' &&
    Array.isArray(obj.expertise_areas)
  );
}

export function isProjectPortfolio(obj: any): obj is ProjectPortfolio {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.company === 'string' &&
    Array.isArray(obj.key_achievements) &&
    Array.isArray(obj.technologies)
  );
}

export function isBusinessImpact(obj: any): obj is BusinessImpact {
  return (
    typeof obj === 'object' &&
    typeof obj.metric_name === 'string' &&
    typeof obj.percentage === 'number' &&
    typeof obj.description === 'string'
  );
}

// ============================================================================
// Utility Types
// ============================================================================

export type Locale = 'en' | 'fr';
export type ProficiencyLevel = 'Expert' | 'Advanced' | 'Intermediate';
export type CTAType = 'primary' | 'secondary' | 'tertiary';
export type ContentBlockType = 'text' | 'metrics' | 'technologies' | 'achievements' | 'cta';
export type TargetAudience = 'technical' | 'business';
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

