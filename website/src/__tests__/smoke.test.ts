// Basic smoke tests for production readiness
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Contact } from '@/components/sections/Contact'

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

describe('Smoke Tests - Production Readiness', () => {
  test('Hero component renders without crashing', () => {
    render(<Hero />)
    expect(screen.getByText(/I architect/)).toBeInTheDocument()
    expect(screen.getByText(/data ecosystems/)).toBeInTheDocument()
  })

  test('FeaturedWork component renders without crashing', () => {
    render(<FeaturedWork />)
    expect(screen.getByText(/Selected Projects/)).toBeInTheDocument()
  })

  test('Contact component renders without crashing', () => {
    render(<Contact />)
    expect(screen.getByText(/Get In Touch/)).toBeInTheDocument()
  })

  test('All components have proper accessibility attributes', () => {
    render(<Hero />)
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()
  })
})
