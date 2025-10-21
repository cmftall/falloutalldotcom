# Implementation Plan: falloutall.com Personal Website

**Branch**: `001-personal-website` | **Date**: 2025-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-personal-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a production-ready single-page personal website for Fallou TALL, a senior Data Architect, using Next.js 15+ with TypeScript and Tailwind CSS. The website will showcase professional expertise, project case studies, and technical achievements while maintaining enterprise-grade performance (2s load time, 1s critical content visibility), accessibility, and moderate SEO standards. Features simplified animations focused on content readability, with content managed through static markdown files processed at build time.

## Technical Context

**Language/Version**: TypeScript 5.0+, JavaScript ES2022+  
**Primary Dependencies**: Next.js 15+, React 18+, Tailwind CSS 3.4+, Framer Motion 10+  
**Storage**: Static files (markdown for blog posts in `/content` directory, JSON for project data)  
**Testing**: Jest, React Testing Library, Playwright for E2E  
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge last 2 versions)  
**Project Type**: Single-page web application  
**Performance Goals**: Lighthouse score >95, Core Web Vitals in green, 2s complete page load, 1s critical content visibility  
**Animation Strategy**: Simplified animations focused on content readability and professional credibility  
**SEO Strategy**: Moderate SEO with meta tags, structured data, sitemap, and robots.txt  
**Constraints**: WCAG 2.1 AA compliance, mobile-first responsive design, <100ms interaction response  
**Scale/Scope**: Personal website, 7 main sections, markdown-driven blog, portfolio showcase

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### ✅ Modern Personal Brand
- **Requirement**: Showcase data architecture expertise and enterprise modernization experience
- **Compliance**: Website includes hero section with professional messaging, service cards, project case studies, and skills showcase
- **Status**: PASS

### ✅ Performance & Scalability  
- **Requirement**: Core Web Vitals compliance, fast loading times, optimized assets
- **Compliance**: Lighthouse score >95 target, 2s complete page load, 1s critical content visibility, code splitting, image optimization
- **Status**: PASS

### ✅ Accessibility & Inclusivity (NON-NEGOTIABLE)
- **Requirement**: WCAG 2.1 AA compliance, semantic HTML, keyboard navigation
- **Compliance**: WCAG 2.1 AA compliance mandatory, semantic HTML, screen reader support
- **Status**: PASS

### ✅ Enterprise-Grade Reliability
- **Requirement**: Support modern browsers, cross-platform compatibility, progressive enhancement
- **Compliance**: Chrome, Firefox, Safari, Edge last 2 versions, mobile-first responsive design, error handling
- **Status**: PASS

### ✅ Clean Architecture & Maintainability
- **Requirement**: Modern web technologies, well-structured codebase, TypeScript, component-based architecture
- **Compliance**: Next.js 15+, TypeScript, Tailwind CSS, component-based structure, automated testing
- **Status**: PASS

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```
website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles and Tailwind
│   │   └── not-found.tsx     # 404 page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   └── sections/          # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Expertise.tsx
│   │       ├── FeaturedWork.tsx
│   │       ├── Insights.tsx
│   │       └── Contact.tsx
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   ├── constants.ts       # App constants
│   │   └── types.ts           # TypeScript types
│   └── data/                  # Static data files
│       ├── projects.json
│       ├── services.json
│       ├── skills.json
│       ├── education.json
│       ├── certifications.json
│       └── contact.json
├── public/                    # Static assets
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── sitemap.xml
├── content/                   # Markdown content
│   └── insights/
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── .gitignore
```

**Structure Decision**: Single Next.js web application with component-based architecture. This structure supports the simplified animations, static content management, and performance requirements while maintaining clean separation of concerns.

## Phase 0: Research & Analysis

**Status**: ✅ COMPLETE - All technical decisions resolved through clarifications

### Key Research Findings

**Content Authenticity Strategy**
- **Decision**: Replace all fake content with real CV-based content and remove non-existent blog posts
- **Rationale**: Professional credibility requires authentic content. Fake blog posts with fabricated metrics destroy trust and professional reputation.
- **Alternatives Considered**: Adding disclaimers (rejected - still appears deceptive), creating real content before launch (rejected - time constraints)

**Project Case Study Detail Level**
- **Decision**: Include specific technologies, quantified metrics, and anonymized client details
- **Rationale**: Technical stakeholders need concrete evidence of expertise and impact. Generic descriptions don't differentiate from competitors.
- **Alternatives Considered**: Generic descriptions for privacy (rejected - lacks credibility), detailed client names (rejected - confidentiality concerns)

**Design Complexity Level**
- **Decision**: Simplify design to focus on content readability and professional credibility
- **Rationale**: Over-animated designs distract from content and can appear unprofessional. Clean, readable design builds trust.
- **Alternatives Considered**: Rich animations (rejected - distracts from content), more interactive elements (rejected - performance impact)

**Social Proof Strategy**
- **Decision**: No testimonials available, focus on project achievements and technical credibility
- **Rationale**: Authentic testimonials unavailable. Technical achievements and quantified results provide stronger credibility than generic testimonials.
- **Alternatives Considered**: Adding fake testimonials (rejected - unethical), requesting testimonials (rejected - time constraints)

**Content Priority Strategy**
- **Decision**: Focus on detailed project case studies and technical achievements over blog content
- **Rationale**: Portfolio-driven approach aligns with data architecture field expectations. Technical achievements demonstrate expertise better than generic blog posts.
- **Alternatives Considered**: Creating real blog posts (rejected - time constraints), removing insights section (rejected - reduces content depth)

## Phase 1: Design & Contracts

**Status**: ✅ COMPLETE - All design artifacts generated

### Generated Artifacts

1. **Data Model** (`data-model.md`): Complete entity definitions for all content types
2. **API Contracts** (`contracts/api-schema.json`): OpenAPI 3.0 schema for data structures
3. **Quickstart Guide** (`quickstart.md`): Setup and deployment instructions
4. **Agent Context**: Updated Cursor IDE context with project technologies

### Key Design Decisions

- **Content Structure**: Static JSON files for structured data, markdown for blog content
- **Component Architecture**: Modular React components with clear separation of concerns
- **Performance Strategy**: Static generation with optimized assets and code splitting
- **Accessibility**: WCAG 2.1 AA compliance with semantic HTML and keyboard navigation

## Constitution Check (Post-Design)

*Re-evaluation after Phase 1 design completion*

### ✅ Modern Personal Brand
- **Status**: PASS - Design supports professional data architecture positioning
- **Evidence**: Clean component structure, professional content focus, technical credibility emphasis

### ✅ Performance & Scalability  
- **Status**: PASS - Static generation and optimization strategy defined
- **Evidence**: Next.js static export, image optimization, code splitting implementation

### ✅ Accessibility & Inclusivity (NON-NEGOTIABLE)
- **Status**: PASS - WCAG compliance strategy implemented
- **Evidence**: Semantic HTML structure, keyboard navigation, screen reader support

### ✅ Enterprise-Grade Reliability
- **Status**: PASS - Cross-platform compatibility and error handling defined
- **Evidence**: Modern browser support, progressive enhancement, graceful degradation

### ✅ Clean Architecture & Maintainability
- **Status**: PASS - Modern tech stack and maintainable structure
- **Evidence**: TypeScript, component-based architecture, automated testing framework

