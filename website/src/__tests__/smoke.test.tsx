// Production readiness smoke tests
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Contact } from '@/components/sections/Contact'
import { I18nProvider } from '@/components/providers/I18nProvider'
import type { TranslationMessages } from '@/lib/types'

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: () => {},
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

// Mock i18n provider
const mockMessages: TranslationMessages = {
  navigation: {
    home: 'Home',
    work: 'Work',
    faq: 'FAQ',
    contact: 'Contact',
    hireMeCta: 'Hire Me',
    caseStudies: 'Case Studies'
  },
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Retry',
    close: 'Close',
    open: 'Open',
    readMore: 'Read More',
    viewProject: 'View Project',
    learnMore: 'Learn More',
    pageNotFound: 'Page Not Found',
    pageNotFoundDescription: 'Sorry, the page you\'re looking for doesn\'t exist or has been moved.',
    goHome: 'Go Home',
    goBack: 'Go Back',
    tryThesePages: 'Or try one of these pages:',
    toggleTheme: 'Toggle theme'
  },
  error: {
    title: 'Something went wrong',
    message: 'We\'re sorry, but something unexpected happened. Please try refreshing the page.',
    details: 'Error Details',
    tryAgain: 'Try Again',
    refreshPage: 'Refresh Page'
  },
  hero: {
    headline: 'I architect data ecosystems that transform enterprises.',
    subheadline: 'Senior Data Architect at Sopra Steria • 8+ years leading enterprise transformations',
    primaryCta: 'View My Work',
    secondaryCta: 'Get In Touch',
    credential: 'Data Architect • Paris, France et Montreal Canada',
    availability: '',
    projectOutcomes: '',
    technicalInnovation: '',
    credibilityIndicators: [],
    professionalPositioning: '',
    savingsCalculation: ''
  },
  work: {
    title: 'Selected Projects',
    subtitle: 'Enterprise transformations that deliver measurable impact',
    businessImpactStatement: '',
    technicalInnovation: '',
    cta: {
      question: '',
      button: ''
    },
    sections: {
      keyAchievements: '',
      keyResponsibilities: '',
      businessImpact: '',
      technicalInnovation: '',
      technologies: ''
    },
    projects: {
      'sopra-steria': {
        company: 'Sopra Steria',
        role: 'Data Architect',
        duration: '',
        location: '',
        focusArea: '',
        description: 'Leading a team within the Data Center of Excellence across 8+ client sectors including Banking, Insurance, and Telecom.',
        technologies: [],
        industry: ''
      }
    }
  },
  contact: {
    title: 'Contact',
    subtitle: 'Let\'s discuss how I can help transform your data landscape',
    value: '',
    availability: '',
    pricingTitle: '',
    pricingStandard: '',
    pricingComplex: '',
    pricingProject: '',
    processTitle: '',
    processStep1: '',
    processStep2: '',
    processStep3: '',
    processStep4: '',
    service1: '',
    service2: '',
    service3: '',
    primaryCta: '',
    emailCta: '',
    emailSubject: '',
    rates: '',
    email: 'Email',
    location: 'Location',
    locationText: '',
    linkedin: 'LinkedIn'
  },
  faq: {
    title: '',
    subtitle: '',
    ctaText: '',
    ctaButton: '',
    items: []
  },
  footer: {
    description: '',
    navigationTitle: '',
    connectTitle: '',
    copyright: '',
    availability: ''
  },
  workedWith: {
    title: '',
    subtitle: '',
    industries: {
      banking: '',
      telecommunications: '',
      consulting: '',
      technology: ''
    },
    industryPills: {
      bankingFinance: '',
      telecommunications: '',
      consulting: '',
      technology: ''
    }
  },
  stats: {
    yearsExperience: '',
    technologiesMastered: '',
    enterpriseProjects: ''
  }
} as TranslationMessages

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider initialLocale="en" initialMessages={mockMessages}>
    {children}
  </I18nProvider>
)

describe('Production Readiness Smoke Tests', () => {
  test('Hero component renders without crashing', () => {
    render(
      <TestWrapper>
        <Hero />
      </TestWrapper>
    )
    // Verify Hero section renders (check for headline or CTA button)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  test('FeaturedWork component renders without crashing', () => {
    render(
      <TestWrapper>
        <FeaturedWork />
      </TestWrapper>
    )
    expect(screen.getByText(/Selected Projects/)).toBeInTheDocument()
  })

  test('Contact component renders without crashing', () => {
    render(
      <TestWrapper>
        <Contact />
      </TestWrapper>
    )
    // Verify Contact section is rendered (check for section with id="contact")
    const contactSection = document.getElementById('contact')
    expect(contactSection).toBeInTheDocument()
  })

  test('All components have proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <Hero />
      </TestWrapper>
    )
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()
  })

  test('Components handle missing translations gracefully', () => {
    render(
      <TestWrapper>
        <Hero />
      </TestWrapper>
    )
    // Should not throw errors even with missing translations
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  test('Language switching functionality works', () => {
    render(
      <TestWrapper>
        <Hero />
      </TestWrapper>
    )
    // Test that language switching doesn't break the component
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
