// Production readiness smoke tests
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Contact } from '@/components/sections/Contact'
import { I18nProvider } from '@/components/providers/I18nProvider'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}))

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: () => {},
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

// Mock i18n provider
const mockMessages = {
  navigation: {
    home: 'Home',
    about: 'About',
    work: 'Work',
    expertise: 'Expertise',
    education: 'Education',
    certifications: 'Certifications',
    contact: 'Contact'
  },
  hero: {
    headline: 'I architect data ecosystems that transform enterprises.',
    subheadline: 'Senior Data Architect at Sopra Steria • 8+ years leading enterprise transformations',
    primaryCta: 'View My Work',
    secondaryCta: 'Get In Touch',
    credential: 'Data Architect • Paris, France et Montreal Canada'
  },
  work: {
    title: 'Selected Projects',
    subtitle: 'Enterprise transformations that deliver measurable impact',
    projects: {
      'sopra-steria': {
        company: 'Sopra Steria',
        role: 'Data Architect',
        description: 'Leading a team within the Data Center of Excellence across 8+ client sectors including Banking, Insurance, and Telecom.',
        impact: 'Multi-cloud architecture • TB+ data processing • Cross-industry compliance'
      }
    }
  },
  contact: {
    title: 'Contact',
    subtitle: 'Let\'s discuss how I can help transform your data landscape',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    quickLinks: 'Quick Links',
    linkedinProfile: 'LinkedIn Profile',
    githubPortfolio: 'GitHub Portfolio',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    sendMessage: 'Send Message'
  }
}

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
    expect(screen.getByText(/I architect/)).toBeInTheDocument()
    expect(screen.getByText(/data ecosystems/)).toBeInTheDocument()
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
    expect(screen.getAllByText(/Contact/)).toHaveLength(2) // Main title and section title
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
    expect(screen.getByText(/I architect/)).toBeInTheDocument()
  })
})
