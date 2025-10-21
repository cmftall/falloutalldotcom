# Fallou TALL - Personal Website

🚀 **Production-ready personal website** showcasing expertise in Data Architecture, Engineering, and Analytics.

## 🌟 Features

- **Modern Design**: Clean, responsive UI with dark/light theme support
- **Performance Optimized**: Core Web Vitals tracking and optimization
- **SEO Ready**: Structured data, sitemap, and meta tags
- **Accessibility**: WCAG compliant with keyboard navigation
- **Multi-language**: English and French support
- **Error Handling**: Graceful error boundaries and monitoring
- **Security**: Comprehensive security headers and CSP

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4 + Plausible
- **Deployment**: Vercel, Netlify, GitHub Pages ready

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cmftall/falloutalldotcom.git
cd falloutalldotcom/website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   ├── lib/                 # Utilities and configurations
│   └── styles/              # Global styles
├── public/                  # Static assets
├── messages/                # i18n translations
└── out/                     # Production build output
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Source: GitHub Actions
3. Workflow will deploy automatically

## 🔧 Environment Variables

Create a `.env.local` file:

```env
# Google Analytics
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_domain

# Google Search Console
GOOGLE_VERIFICATION_CODE=your_verification_code
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Loading Speed**: < 2s first contentful paint

## 🛡️ Security

- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- HSTS headers for HTTPS

## 🌍 Internationalization

- English (en) - Default
- French (fr) - Available
- Easy to add more languages

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interactions
- Optimized for all screen sizes

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build verification
npm run build
```

## 📈 Analytics & Monitoring

- **Google Analytics 4**: Page views and user behavior
- **Plausible**: Privacy-focused analytics
- **Core Web Vitals**: Performance monitoring
- **Error Tracking**: Production error monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About

**Fallou TALL** - Data Architect & Engineer

- 🏢 **Current**: Data Architect at Sopra Steria
- 🎓 **Expertise**: Azure, AWS, Databricks, Python, Snowflake
- 🌍 **Location**: Canada & France
- 📧 **Contact**: [falloutall.com](https://falloutall.com)

---

⭐ **Star this repository** if you find it helpful!

🔗 **Visit the live website**: [falloutall.com](https://falloutall.com)
