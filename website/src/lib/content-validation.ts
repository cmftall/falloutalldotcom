/**
 * Content Validation Utilities for Data Architect Branding
 * 
 * This file provides validation functions to ensure all content meets
 * the requirements for authenticity, completeness, and quality.
 */

import { 
  ProfessionalProfile, 
  ProjectPortfolio, 
  BusinessImpact, 
  TechnicalExpertise, 
  IndustryAuthority,
  ValidationRule,
  ValidationSchema,
  isProfessionalProfile,
  isProjectPortfolio,
  isBusinessImpact
} from '@/types/branding'

// ============================================================================
// Validation Rules
// ============================================================================

export const PROFESSIONAL_PROFILE_RULES: ValidationRule[] = [
  {
    field: 'name',
    type: 'required',
    message: 'Professional name is required'
  },
  {
    field: 'title',
    type: 'required',
    message: 'Professional title is required'
  },
  {
    field: 'experience_years',
    type: 'custom',
    message: 'Experience years must be a positive number'
  },
  {
    field: 'expertise_areas',
    type: 'custom',
    message: 'Must have at least 3 expertise areas'
  },
  {
    field: 'unique_positioning',
    type: 'max_length',
    value: 200,
    message: 'Unique positioning must be under 200 characters'
  }
]

export const PROJECT_PORTFOLIO_RULES: ValidationRule[] = [
  {
    field: 'id',
    type: 'required',
    message: 'Project ID is required'
  },
  {
    field: 'company',
    type: 'required',
    message: 'Company name is required'
  },
  {
    field: 'key_achievements',
    type: 'custom',
    message: 'Must have at least 2 key achievements'
  },
  {
    field: 'technologies',
    type: 'custom',
    message: 'Must have at least 3 technologies'
  },
  {
    field: 'business_impact',
    type: 'custom',
    message: 'Must have at least one business impact metric'
  }
]

export const BUSINESS_IMPACT_RULES: ValidationRule[] = [
  {
    field: 'metric_name',
    type: 'required',
    message: 'Metric name is required'
  },
  {
    field: 'percentage',
    type: 'custom',
    message: 'Percentage must be a positive number'
  },
  {
    field: 'description',
    type: 'required',
    message: 'Impact description is required'
  }
]

export const TECHNICAL_EXPERTISE_RULES: ValidationRule[] = [
  {
    field: 'category',
    type: 'required',
    message: 'Skill category is required'
  },
  {
    field: 'skills',
    type: 'custom',
    message: 'Must have at least 1 skill'
  },
  {
    field: 'proficiency_level',
    type: 'custom',
    message: 'Proficiency level must be Expert, Advanced, or Intermediate'
  },
  {
    field: 'years_experience',
    type: 'custom',
    message: 'Years of experience must be non-negative'
  }
]

export const INDUSTRY_AUTHORITY_RULES: ValidationRule[] = [
  {
    field: 'content_type',
    type: 'required',
    message: 'Content type is required'
  },
  {
    field: 'title',
    type: 'max_length',
    value: 100,
    message: 'Title must be under 100 characters'
  },
  {
    field: 'key_insights',
    type: 'custom',
    message: 'Must have at least 1 key insight'
  },
  {
    field: 'target_audience',
    type: 'custom',
    message: 'Must have at least 1 target audience'
  }
]

// ============================================================================
// Validation Functions
// ============================================================================

export function validateProfessionalProfile(profile: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!isProfessionalProfile(profile)) {
    errors.push('Invalid professional profile structure')
    return { isValid: false, errors }
  }

  // Validate required fields
  if (!profile.name || profile.name.trim() === '') {
    errors.push('Professional name is required')
  }

  if (!profile.title || profile.title.trim() === '') {
    errors.push('Professional title is required')
  }

  if (typeof profile.experience_years !== 'number' || profile.experience_years <= 0) {
    errors.push('Experience years must be a positive number')
  }

  if (!Array.isArray(profile.expertise_areas) || profile.expertise_areas.length < 3) {
    errors.push('Must have at least 3 expertise areas')
  }

  if (!profile.unique_positioning || profile.unique_positioning.length > 200) {
    errors.push('Unique positioning must be under 200 characters')
  }

  return { isValid: errors.length === 0, errors }
}

export function validateProjectPortfolio(project: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!isProjectPortfolio(project)) {
    errors.push('Invalid project portfolio structure')
    return { isValid: false, errors }
  }

  // Validate required fields
  if (!project.id || project.id.trim() === '') {
    errors.push('Project ID is required')
  }

  if (!project.company || project.company.trim() === '') {
    errors.push('Company name is required')
  }

  if (!Array.isArray(project.key_achievements) || project.key_achievements.length < 2) {
    errors.push('Must have at least 2 key achievements')
  }

  if (!Array.isArray(project.technologies) || project.technologies.length < 3) {
    errors.push('Must have at least 3 technologies')
  }

  if (!Array.isArray(project.business_impact) || project.business_impact.length === 0) {
    errors.push('Must have at least one business impact metric')
  }

  // Validate business impact metrics
  project.business_impact?.forEach((impact: any, index: number) => {
    if (!isBusinessImpact(impact)) {
      errors.push(`Business impact ${index + 1} has invalid structure`)
    } else {
      if (typeof impact.percentage !== 'number' || impact.percentage <= 0) {
        errors.push(`Business impact ${index + 1} percentage must be positive`)
      }
    }
  })

  return { isValid: errors.length === 0, errors }
}

export function validateBusinessImpact(impact: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!isBusinessImpact(impact)) {
    errors.push('Invalid business impact structure')
    return { isValid: false, errors }
  }

  if (!impact.metric_name || impact.metric_name.trim() === '') {
    errors.push('Metric name is required')
  }

  if (typeof impact.percentage !== 'number' || impact.percentage <= 0) {
    errors.push('Percentage must be a positive number')
  }

  if (!impact.description || impact.description.trim() === '') {
    errors.push('Impact description is required')
  }

  return { isValid: errors.length === 0, errors }
}

export function validateTechnicalExpertise(expertise: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!expertise.category || expertise.category.trim() === '') {
    errors.push('Skill category is required')
  }

  if (!Array.isArray(expertise.skills) || expertise.skills.length < 1) {
    errors.push('Must have at least 1 skill')
  }

  const validProficiencyLevels = ['Expert', 'Advanced', 'Intermediate']
  if (!validProficiencyLevels.includes(expertise.proficiency_level)) {
    errors.push('Proficiency level must be Expert, Advanced, or Intermediate')
  }

  if (typeof expertise.years_experience !== 'number' || expertise.years_experience < 0) {
    errors.push('Years of experience must be non-negative')
  }

  return { isValid: errors.length === 0, errors }
}

export function validateIndustryAuthority(authority: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!authority.content_type || authority.content_type.trim() === '') {
    errors.push('Content type is required')
  }

  if (!authority.title || authority.title.length > 100) {
    errors.push('Title must be under 100 characters')
  }

  if (!Array.isArray(authority.key_insights) || authority.key_insights.length < 1) {
    errors.push('Must have at least 1 key insight')
  }

  if (!Array.isArray(authority.target_audience) || authority.target_audience.length < 1) {
    errors.push('Must have at least 1 target audience')
  }

  return { isValid: errors.length === 0, errors }
}

// ============================================================================
// Content Authenticity Validation
// ============================================================================

export function validateContentAuthenticity(content: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  // Check for fictional content indicators
  const fictionalIndicators = [
    'example',
    'sample',
    'demo',
    'test data',
    'placeholder',
    'lorem ipsum',
    'fake',
    'mock'
  ]

  const contentString = JSON.stringify(content).toLowerCase()
  
  fictionalIndicators.forEach(indicator => {
    if (contentString.includes(indicator)) {
      errors.push(`Content contains fictional indicator: "${indicator}"`)
    }
  })

  return { isValid: errors.length === 0, errors }
}

export function validateMetricsAuthenticity(metrics: BusinessImpact[]): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  metrics.forEach((metric, index) => {
    // Check for unrealistic percentages
    if (metric.percentage > 1000) {
      errors.push(`Metric ${index + 1} has unrealistic percentage: ${metric.percentage}%`)
    }
    
    // Check for round numbers that might be fictional
    if (metric.percentage % 10 === 0 && metric.percentage > 50) {
      errors.push(`Metric ${index + 1} has suspiciously round percentage: ${metric.percentage}%`)
    }
  })

  return { isValid: errors.length === 0, errors }
}

// ============================================================================
// Comprehensive Validation
// ============================================================================

export function validateAllContent(content: {
  profile?: ProfessionalProfile;
  projects?: ProjectPortfolio[];
  expertise?: TechnicalExpertise[];
  authority?: IndustryAuthority[];
}): { isValid: boolean; errors: string[] } {
  const allErrors: string[] = []

  // Validate professional profile
  if (content.profile) {
    const profileValidation = validateProfessionalProfile(content.profile)
    if (!profileValidation.isValid) {
      allErrors.push(...profileValidation.errors.map(err => `Profile: ${err}`))
    }
  }

  // Validate projects
  if (content.projects) {
    content.projects.forEach((project, index) => {
      const projectValidation = validateProjectPortfolio(project)
      if (!projectValidation.isValid) {
        allErrors.push(...projectValidation.errors.map(err => `Project ${index + 1}: ${err}`))
      }
      
      // Validate business impact metrics
      const metricsValidation = validateMetricsAuthenticity(project.business_impact)
      if (!metricsValidation.isValid) {
        allErrors.push(...metricsValidation.errors.map(err => `Project ${index + 1} ${err}`))
      }
    })
  }

  // Validate technical expertise
  if (content.expertise) {
    content.expertise.forEach((exp, index) => {
      const expertiseValidation = validateTechnicalExpertise(exp)
      if (!expertiseValidation.isValid) {
        allErrors.push(...expertiseValidation.errors.map(err => `Expertise ${index + 1}: ${err}`))
      }
    })
  }

  // Validate industry authority
  if (content.authority) {
    content.authority.forEach((auth, index) => {
      const authorityValidation = validateIndustryAuthority(auth)
      if (!authorityValidation.isValid) {
        allErrors.push(...authorityValidation.errors.map(err => `Authority ${index + 1}: ${err}`))
      }
    })
  }

  // Validate content authenticity
  const authenticityValidation = validateContentAuthenticity(content)
  if (!authenticityValidation.isValid) {
    allErrors.push(...authenticityValidation.errors.map(err => `Authenticity: ${err}`))
  }

  return { isValid: allErrors.length === 0, errors: allErrors }
}

// ============================================================================
// Export Validation Schemas
// ============================================================================

export const VALIDATION_SCHEMAS: Record<string, ValidationSchema> = {
  professionalProfile: {
    entity: 'ProfessionalProfile',
    rules: PROFESSIONAL_PROFILE_RULES
  },
  projectPortfolio: {
    entity: 'ProjectPortfolio',
    rules: PROJECT_PORTFOLIO_RULES
  },
  businessImpact: {
    entity: 'BusinessImpact',
    rules: BUSINESS_IMPACT_RULES
  },
  technicalExpertise: {
    entity: 'TechnicalExpertise',
    rules: TECHNICAL_EXPERTISE_RULES
  },
  industryAuthority: {
    entity: 'IndustryAuthority',
    rules: INDUSTRY_AUTHORITY_RULES
  }
}

