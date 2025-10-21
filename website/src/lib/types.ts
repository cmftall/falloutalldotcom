// Core types for the personal website

export interface Project {
  id: string
  company: string
  role: string
  description: string
  impact: string[]
  technologies: string[]
  duration: string
  imageUrl?: string
  featured: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  order: number
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
  published: boolean
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  yearsExperience: number
}

export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
  order: number
}

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  url?: string
  current: boolean
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  graduationDate: string
  gpa?: number
  description?: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  languages: string[]
  linkedin: string
  github?: string
  twitter?: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Animation types
export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
    }
  }
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>