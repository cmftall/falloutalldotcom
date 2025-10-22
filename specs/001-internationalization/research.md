# Research: Website Internationalization

**Feature**: Website Internationalization  
**Date**: 2025-01-27  
**Purpose**: Resolve technical unknowns and establish implementation patterns

## Research Tasks

### 1. Next.js Internationalization Best Practices

**Task**: Research Next.js 15+ internationalization patterns and next-intl integration

**Decision**: Use next-intl 3.21+ with Next.js App Router and static export support

**Rationale**: 
- next-intl is the most mature and actively maintained i18n library for Next.js
- Full support for App Router and static export (SSG)
- TypeScript-first with excellent type safety
- Minimal bundle size impact (~15KB)
- Built-in locale detection and routing

**Alternatives considered**:
- react-i18next: More complex setup, larger bundle size
- next-i18next: Deprecated for App Router
- Custom solution: Too much development overhead

### 2. Browser Language Detection Implementation

**Task**: Research browser language detection APIs and fallback strategies

**Decision**: Use `navigator.language` API with `navigator.languages` fallback

**Rationale**:
- `navigator.language` provides primary language preference
- `navigator.languages` array provides fallback options
- 95%+ browser support across all modern browsers
- No external dependencies or API calls required
- Works with static export and client-side rendering

**Implementation pattern**:
```typescript
const detectLanguage = (): string => {
  if (typeof window === 'undefined') return 'en';
  
  const primary = navigator.language.split('-')[0];
  const supported = ['en', 'fr'];
  
  if (supported.includes(primary)) return primary;
  
  // Check navigator.languages for fallback
  for (const lang of navigator.languages) {
    const code = lang.split('-')[0];
    if (supported.includes(code)) return code;
  }
  
  return 'en'; // Default fallback
};
```

**Alternatives considered**:
- Accept-Language header: Server-side only, not available in static export
- Geolocation-based: Privacy concerns, inaccurate
- User preference storage: Requires initial detection anyway

### 3. Translation File Structure and Management

**Task**: Research optimal translation file structure for Next.js static export

**Decision**: JSON files in `/messages/` directory with nested structure

**Rationale**:
- JSON is lightweight and fast to parse
- Works perfectly with static export
- Easy to maintain and version control
- Supports nested keys for organization
- TypeScript type generation possible

**File structure**:
```json
// messages/en.json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "title": "I architect data ecosystems",
    "subtitle": "Senior Data Architect at Sopra Steria"
  }
}
```

**Alternatives considered**:
- YAML: More readable but larger bundle size
- TypeScript objects: Harder to maintain, no external editing
- Database storage: Overkill for static content

### 4. Language Switching UX Patterns

**Task**: Research best practices for language selector UI/UX

**Decision**: Dropdown selector in header with flag icons and language names

**Rationale**:
- Standard pattern users expect
- Accessible with keyboard navigation
- Clear visual indication of current language
- Space-efficient in header
- Works well on mobile with proper responsive design

**UX considerations**:
- Show current language prominently
- Use native language names (English, Français)
- Include flag icons for quick recognition
- Smooth transition animation
- Announce changes to screen readers

**Alternatives considered**:
- Toggle button: Limited to 2 languages
- Sidebar menu: Takes up more space
- Footer placement: Less discoverable

### 5. Performance Optimization for Translations

**Task**: Research performance optimization techniques for i18n

**Decision**: Implement code splitting and lazy loading for translation files

**Rationale**:
- Reduces initial bundle size
- Only loads needed translations
- Improves Core Web Vitals scores
- Better user experience on slow connections

**Optimization techniques**:
- Dynamic imports for translation files
- Memoization of translation functions
- Preloading of likely next language
- Bundle splitting by locale

**Alternatives considered**:
- All translations in one bundle: Larger initial load
- Server-side translation: Not compatible with static export
- CDN-based translations: Adds complexity and latency

## Technical Decisions Summary

| Decision | Rationale | Impact |
|----------|-----------|---------|
| next-intl 3.21+ | Mature, App Router support, static export | Low complexity, high reliability |
| navigator.language API | Standard, reliable, no dependencies | Simple implementation, wide support |
| JSON translation files | Lightweight, maintainable, static export compatible | Easy maintenance, good performance |
| Header dropdown selector | Standard UX pattern, accessible | Familiar user experience |
| Code splitting for translations | Performance optimization | Better Core Web Vitals |

## Implementation Readiness

All technical unknowns have been resolved. The implementation can proceed with:
- Clear technology choices
- Established patterns and best practices
- Performance optimization strategies
- Accessibility considerations
- Static export compatibility

**Next Phase**: Data model design and API contracts
