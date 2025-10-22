# Quickstart Guide: Website Internationalization

**Feature**: Website Internationalization  
**Date**: 2025-01-27  
**Purpose**: Get up and running with the internationalization feature quickly

## Prerequisites

- Next.js 15+ project
- TypeScript 5.0+
- Node.js 20+

## Installation

### 1. Install Dependencies

```bash
npm install next-intl@^3.21.0
```

### 2. Create Translation Files

Create the translation directory structure:

```bash
mkdir -p src/messages
```

Create `src/messages/en.json`:
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "expertise": "Expertise",
    "education": "Education",
    "certifications": "Certifications",
    "contact": "Contact"
  },
  "hero": {
    "title": "I architect data ecosystems that transform enterprises.",
    "subtitle": "Senior Data Architect at Sopra Steria • 8+ years leading enterprise transformations",
    "primaryCta": "View My Work",
    "secondaryCta": "Get In Touch",
    "credential": "Data Architect • Paris, France et Montreal Canada"
  },
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "retry": "Retry",
    "close": "Close",
    "open": "Open"
  }
}
```

Create `src/messages/fr.json`:
```json
{
  "navigation": {
    "home": "Accueil",
    "about": "À propos",
    "expertise": "Expertise",
    "education": "Formation",
    "certifications": "Certifications",
    "contact": "Contact"
  },
  "hero": {
    "title": "J'architecte des écosystèmes de données qui transforment les entreprises.",
    "subtitle": "Architecte de données senior chez Sopra Steria • 8+ ans à diriger des transformations d'entreprise",
    "primaryCta": "Voir mon travail",
    "secondaryCta": "Me contacter",
    "credential": "Architecte de données • Paris, France et Montréal Canada"
  },
  "common": {
    "loading": "Chargement...",
    "error": "Une erreur s'est produite",
    "retry": "Réessayer",
    "close": "Fermer",
    "open": "Ouvrir"
  }
}
```

### 3. Configure Next.js

Update `next.config.ts`:

```typescript
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // ... existing config
};

export default withNextIntl(nextConfig);
```

### 4. Create i18n Configuration

Create `src/lib/i18n.ts`:

```typescript
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'fr'] as const;
type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

### 5. Create Locale Detection Utility

Create `src/lib/locale.ts`:

```typescript
import { SupportedLocale } from '../contracts/api-schema';

export const detectLanguage = (): SupportedLocale => {
  if (typeof window === 'undefined') return 'en';
  
  const primary = navigator.language.split('-')[0];
  const supported: SupportedLocale[] = ['en', 'fr'];
  
  if (supported.includes(primary as SupportedLocale)) {
    return primary as SupportedLocale;
  }
  
  // Check navigator.languages for fallback
  for (const lang of navigator.languages) {
    const code = lang.split('-')[0];
    if (supported.includes(code as SupportedLocale)) {
      return code as SupportedLocale;
    }
  }
  
  return 'en'; // Default fallback
};

export const saveLanguagePreference = (locale: SupportedLocale): void => {
  if (typeof window === 'undefined') return;
  
  const preference = {
    locale,
    source: 'manual' as const,
    timestamp: Date.now(),
    persistent: true
  };
  
  localStorage.setItem('language-preference', JSON.stringify(preference));
};

export const loadLanguagePreference = (): SupportedLocale | null => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem('language-preference');
  if (!stored) return null;
  
  try {
    const preference = JSON.parse(stored);
    return preference.locale;
  } catch {
    return null;
  }
};
```

### 6. Create Language Selector Component

Create `src/components/ui/LanguageSelector.tsx`:

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { SupportedLocale } from '@/lib/contracts/api-schema';

interface LanguageSelectorProps {
  className?: string;
}

export function LanguageSelector({ className }: LanguageSelectorProps) {
  const locale = useLocale() as SupportedLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as SupportedLocale, name: 'English', flag: '🇺🇸' },
    { code: 'fr' as SupportedLocale, name: 'Français', flag: '🇫🇷' }
  ];

  const handleLanguageChange = (newLocale: SupportedLocale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{languages.find(lang => lang.code === locale)?.flag}</span>
        <span>{languages.find(lang => lang.code === locale)?.name}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 ${
                locale === language.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 7. Update App Router Structure

Create `src/app/[locale]/layout.tsx`:

```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const locales = ['en', 'fr'];

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 8. Update Components to Use Translations

Update any component to use translations:

```typescript
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <button>{t('primaryCta')}</button>
      <button>{t('secondaryCta')}</button>
    </section>
  );
}
```

## Testing

### 1. Unit Tests

Create `src/__tests__/lib/locale.test.ts`:

```typescript
import { detectLanguage, saveLanguagePreference, loadLanguagePreference } from '@/lib/locale';

// Mock navigator
Object.defineProperty(window, 'navigator', {
  value: {
    language: 'fr-FR',
    languages: ['fr-FR', 'en-US']
  },
  writable: true
});

describe('Locale Detection', () => {
  test('detects French language', () => {
    expect(detectLanguage()).toBe('fr');
  });

  test('falls back to English for unsupported language', () => {
    Object.defineProperty(window, 'navigator', {
      value: { language: 'de-DE', languages: ['de-DE'] }
    });
    expect(detectLanguage()).toBe('en');
  });
});
```

### 2. E2E Tests

Create `tests/e2e/internationalization.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test('language switching works', async ({ page }) => {
  await page.goto('/en');
  
  // Check initial language
  await expect(page.locator('h1')).toContainText('I architect data ecosystems');
  
  // Switch to French
  await page.click('[data-testid="language-selector"]');
  await page.click('[data-testid="language-fr"]');
  
  // Check French content
  await expect(page.locator('h1')).toContainText('J\'architecte des écosystèmes de données');
});
```

## Deployment

### 1. Environment Variables

No additional environment variables needed for basic setup.

### 2. Build Process

The internationalization feature works with static export:

```bash
npm run build
npm run export
```

### 3. Verification

After deployment, verify:
- [ ] Language detection works on first visit
- [ ] Language switching works without page reload
- [ ] Language preference persists across sessions
- [ ] All content displays in selected language
- [ ] Fallback to English works for unsupported languages

## Troubleshooting

### Common Issues

1. **Translations not loading**: Check file paths and JSON syntax
2. **Language detection not working**: Verify browser support and fallback logic
3. **Language switching causes page reload**: Check Next.js configuration
4. **TypeScript errors**: Ensure proper type definitions are imported

### Debug Mode

Enable debug logging:

```typescript
// In development
if (process.env.NODE_ENV === 'development') {
  console.log('Current locale:', locale);
  console.log('Available translations:', Object.keys(messages));
}
```

## Next Steps

1. Add more languages by creating new translation files
2. Implement translation management workflow
3. Add translation validation in CI/CD
4. Monitor translation coverage and usage
5. Optimize bundle size for multiple languages
