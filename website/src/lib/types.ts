// Type definitions for translation messages
export interface TranslationMessages {
  navigation: {
    home: string
    work: string
    faq: string
    contact: string
    hireMeCta: string
    caseStudies: string
  }
  common: {
    toggleTheme: string
  }
  error: {
    title: string
    message: string
    details: string
    tryAgain: string
    refreshPage: string
  }
  hero: {
    headline: string
    subheadline: string
    primaryCta: string
    secondaryCta: string
    credential: string
    availability: string
    projectOutcomes: string
    technicalInnovation: string
    credibilityIndicators: string[]
    professionalPositioning: string
    savingsCalculation: string
  }
  work: {
    title: string
    subtitle: string
    technicalInnovation: string
    businessImpactStatement?: string
    cta: {
      question: string
      button: string
    }
    sections: {
      keyAchievements: string
      keyResponsibilities: string
      businessImpact: string
      technicalInnovation: string
      technologies: string
    }
    projects: Record<string, ProjectData>
  }
  contact: {
    title: string
    subtitle: string
    value: string
    availability: string
    pricingTitle: string
    pricingStandard: string
    pricingComplex: string
    pricingProject: string
    processTitle: string
    processStep1: string
    processStep2: string
    processStep3: string
    processStep4: string
    service1: string
    service2: string
    service3: string
    primaryCta: string
    emailCta: string
    emailSubject: string
    rates: string
    email: string
    location: string
    locationText: string
    linkedin: string
  }
  faq: {
    title: string
    subtitle: string
    ctaText: string
    ctaButton: string
    items: FAQItem[]
  }
  workedWith: {
    title: string
    subtitle: string
    industries: {
      banking: string
      telecommunications: string
      consulting: string
      technology: string
    }
    industryPills: {
      bankingFinance: string
      telecommunications: string
      consulting: string
      technology: string
    }
  }
  footer: {
    description: string
    navigationTitle: string
    connectTitle: string
    copyright: string
    availability: string
  }
}

export interface FAQItem {
  question: string
  answer: string
}

export interface BusinessImpact {
  metricName: string
  percentage: number | string
  description: string
}

export interface ProjectData {
  company: string
  role: string
  duration: string
  durationNote?: string
  location: string
  focusArea: string
  description: string
  keyAchievements?: string[]
  keyResponsibilities?: string[]
  technologies: string[]
  businessImpact?: BusinessImpact[]
  technicalInnovation?: string[]
  industry: string
  ctaQuestion?: string
}

export interface ContactInfo {
  email: string
  location: string
  languages: string[]
  linkedin: string
}
