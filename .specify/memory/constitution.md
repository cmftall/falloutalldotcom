# Personal Portfolio Website Constitution
<!-- Standards for production-ready, high-performance personal portfolio websites -->

## Core Principles

### I. Performance-First Architecture
Every component, feature, and optimization must prioritize Core Web Vitals and user experience. Lighthouse scores must maintain 95+ across all metrics. Bundle size optimization, lazy loading, and performance monitoring are mandatory. First Contentful Paint < 2s, Largest Contentful Paint < 2.5s, Cumulative Layout Shift < 0.1.

### II. Accessibility by Design (WCAG 2.1 AA)
All interfaces must be accessible to users with disabilities. Keyboard navigation, screen reader compatibility, high contrast support, and reduced motion preferences are non-negotiable. Focus management, ARIA labels, and semantic HTML structure are mandatory for every component.

### III. Security-First Implementation
Comprehensive security headers, Content Security Policy, and defense-in-depth strategies are required. X-Frame-Options, X-Content-Type-Options, and Referrer-Policy must be configured. No inline scripts without nonce, external resources must be whitelisted, and all user inputs must be sanitized.

### IV. Modern Development Standards
TypeScript 5.0+ with strict mode, React 18+ with concurrent features, Next.js 15+ with App Router, and Tailwind CSS 3.4+ with design system consistency. All code must be type-safe, component-based, and follow modern React patterns with proper error boundaries and loading states.

### V. Production-Ready Deployment
Static export capability with zero-config deployment to Vercel, Netlify, or GitHub Pages. Environment variable management, build optimization, and automated CI/CD pipelines are mandatory. Error monitoring, analytics integration, and performance tracking must be production-ready.

## Technical Requirements

### Framework & Build System
- **Next.js 15+** with App Router for optimal performance and SEO
- **TypeScript 5.0+** with strict mode and comprehensive type coverage
- **Tailwind CSS 3.4+** with custom design system and responsive breakpoints
- **Framer Motion 11+** for smooth animations and micro-interactions
- **Static Export** capability for CDN deployment and edge optimization

### Performance Standards
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bundle Size**: Main bundle < 50KB, total JS < 200KB
- **Loading Speed**: First Contentful Paint < 2s
- **Image Optimization**: WebP/AVIF formats, responsive images, lazy loading
- **Code Splitting**: Route-based and component-based splitting mandatory

### Accessibility Requirements
- **WCAG 2.1 AA Compliance** across all components and pages
- **Keyboard Navigation** with proper focus management and tab order
- **Screen Reader Support** with semantic HTML and ARIA labels
- **High Contrast Mode** support with CSS custom properties
- **Reduced Motion** respect for user preferences

### Security Implementation
- **Content Security Policy** with strict directives and nonce-based inline scripts
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **HTTPS Enforcement** with HSTS headers
- **Input Sanitization** for all user-generated content
- **Dependency Scanning** with zero known vulnerabilities

## Development Workflow

### Code Quality Gates
- **ESLint**: Zero errors, zero warnings with Next.js configuration
- **TypeScript**: Strict mode with no compilation errors
- **Prettier**: Consistent code formatting across all files
- **Testing**: Unit tests for utilities, integration tests for components
- **Performance**: Bundle analyzer and Lighthouse CI integration

### Component Architecture
- **Atomic Design**: Atoms, molecules, organisms with clear separation
- **Design System**: Consistent spacing, typography, and color tokens
- **Error Boundaries**: Graceful error handling with user-friendly messages
- **Loading States**: Skeleton screens and progressive loading
- **Responsive Design**: Mobile-first approach with breakpoint consistency

### Content Management
- **Portfolio Content**: Structured JSON for projects, experience, and achievements
- **Blog/Insights**: Markdown files for thought leadership and technical articles
- **Professional Data**: Certifications, education, and contact information
- **SEO Optimization**: Personal branding meta tags, structured data, and sitemap
- **Social Integration**: LinkedIn, GitHub, and professional social media links

## Governance

### Constitution Authority
This constitution supersedes all other development practices and coding standards. All pull requests must verify compliance with these requirements before merging. Performance budgets and accessibility standards are non-negotiable.

### Amendment Process
Constitution changes require:
1. Documentation of the proposed change and rationale
2. Impact analysis on existing codebase
3. Migration plan for breaking changes
4. Approval from technical lead
5. Updated version number and ratification date

### Quality Assurance
- All deployments must pass Lighthouse CI with 95+ scores
- Accessibility audits must show zero WCAG violations
- Security scans must show zero vulnerabilities
- Performance budgets must not be exceeded
- TypeScript compilation must succeed with zero errors
- Professional content must be error-free and up-to-date
- Contact information and social links must be verified and functional

**Version**: 1.0.0 | **Ratified**: 2025-01-27 | **Last Amended**: 2025-01-27
