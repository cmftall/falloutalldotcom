# Quickstart Guide: falloutall.com Personal Website

## Overview

This guide provides quick setup instructions for the falloutall.com personal website, a Next.js 15+ application showcasing Fallou TALL's data architecture expertise.

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Quick Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd falloutalldotcom/website
npm install
```

### 2. Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the website.

### 3. Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
website/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── layout/         # Layout components
│   │   └── sections/       # Page sections
│   ├── lib/                # Utilities and constants
│   └── data/               # Static data files
├── public/                 # Static assets
├── content/                # Markdown content
└── package.json
```

## Content Management

### Static Data

Edit JSON files in `src/data/` for:
- `projects.json` - Project case studies
- `services.json` - Service offerings
- `skills.json` - Technical skills
- `certifications.json` - Professional certifications

### Blog Content

Add markdown files to `content/insights/` with frontmatter:

```markdown
---
title: "Your Article Title"
date: "2025-01-27"
tags: ["Data Architecture", "Cloud"]
excerpt: "Brief description"
author: "Fallou TALL"
---

Your article content here...
```

## Key Features

- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Toggle between light/dark themes
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Lighthouse score >95 target

## Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run export
# Upload 'out' directory to static hosting
```

## Customization

### Styling

- Edit `tailwind.config.js` for design system changes
- Modify `src/app/globals.css` for global styles
- Update component styles in individual `.tsx` files

### Content

- Update `src/lib/constants.ts` for site-wide content
- Modify section components in `src/components/sections/`
- Add new sections by creating components and updating `page.tsx`

## Performance Targets

- **Load Time**: <2 seconds complete page load
- **Critical Content**: <1 second visibility
- **Lighthouse Score**: >95
- **Accessibility**: WCAG 2.1 AA compliant

## Troubleshooting

### Common Issues

1. **Build Errors**: Check TypeScript types in `src/lib/types.ts`
2. **Styling Issues**: Verify Tailwind classes and CSS imports
3. **Content Not Updating**: Clear Next.js cache with `rm -rf .next`

### Development Tips

- Use `npm run lint` to check code quality
- Run `npm run type-check` for TypeScript validation
- Test responsive design with browser dev tools

## Support

For technical issues or questions about the website implementation, refer to the project documentation or contact the development team.