# Data Model: Website Internationalization

**Feature**: Website Internationalization  
**Date**: 2025-01-27  
**Purpose**: Define data structures and relationships for internationalization feature

## Entities

### Language Preference

**Purpose**: Stores user's selected or detected language setting

**Attributes**:
- `locale: string` - Language code (e.g., 'en', 'fr')
- `source: 'detected' | 'manual'` - How the preference was set
- `timestamp: number` - When preference was last updated
- `persistent: boolean` - Whether to persist across sessions

**Validation Rules**:
- `locale` must be one of supported languages: ['en', 'fr']
- `timestamp` must be valid Unix timestamp
- `source` must be either 'detected' or 'manual'

**State Transitions**:
- `undefined` → `detected` (initial browser detection)
- `detected` → `manual` (user manually changes language)
- `manual` → `manual` (user changes language again)

### Translation Content

**Purpose**: Maps text content to specific languages

**Attributes**:
- `key: string` - Unique identifier for the text
- `locale: string` - Language code
- `value: string` - Translated text content
- `namespace: string` - Content category (e.g., 'navigation', 'hero')
- `fallback: string` - Fallback text if translation missing

**Validation Rules**:
- `key` must be unique within namespace
- `locale` must be supported language
- `value` cannot be empty
- `namespace` must be valid content category

**Relationships**:
- One-to-many with Language Preference (one locale can have many translations)
- Many-to-one with Content Namespace (many translations belong to one namespace)

### Language Detection

**Purpose**: Browser/system language information for automatic selection

**Attributes**:
- `primary: string` - Primary language from navigator.language
- `languages: string[]` - Array of preferred languages
- `fallback: string` - Default language if none supported
- `timestamp: number` - When detection occurred

**Validation Rules**:
- `primary` must be valid language code
- `languages` must be non-empty array
- `fallback` must be 'en' (English)
- `timestamp` must be valid Unix timestamp

## Data Flow

### 1. Initial Language Detection

```
Browser → navigator.language → Language Detection → Language Preference
```

1. Browser provides `navigator.language`
2. System detects supported language or falls back to 'en'
3. Language Preference created with `source: 'detected'`

### 2. Manual Language Change

```
User Action → Language Selector → Language Preference Update → UI Update
```

1. User selects new language
2. Language Preference updated with `source: 'manual'`
3. All UI components re-render with new translations

### 3. Translation Loading

```
Language Preference → Translation Content → UI Components
```

1. Current locale determines which translations to load
2. Translation Content provides text for UI components
3. Fallback to English if translation missing

## Storage Strategy

### Client-Side Storage

**Language Preference**:
- Stored in `localStorage` with key `'language-preference'`
- Persists across browser sessions
- Automatically synced with state management

**Translation Content**:
- Stored in JSON files (`/messages/en.json`, `/messages/fr.json`)
- Loaded dynamically based on current locale
- Cached in memory for performance

### Data Persistence

**Language Preference**:
```typescript
interface LanguagePreference {
  locale: string;
  source: 'detected' | 'manual';
  timestamp: number;
  persistent: boolean;
}

// Storage operations
const saveLanguagePreference = (pref: LanguagePreference) => {
  localStorage.setItem('language-preference', JSON.stringify(pref));
};

const loadLanguagePreference = (): LanguagePreference | null => {
  const stored = localStorage.getItem('language-preference');
  return stored ? JSON.parse(stored) : null;
};
```

**Translation Content**:
```typescript
interface TranslationContent {
  [namespace: string]: {
    [key: string]: string;
  };
}

// Example structure
const translations: Record<string, TranslationContent> = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'I architect data ecosystems',
      subtitle: 'Senior Data Architect at Sopra Steria'
    }
  },
  fr: {
    navigation: {
      home: 'Accueil',
      about: 'À propos',
      contact: 'Contact'
    },
    hero: {
      title: 'J\'architecte des écosystèmes de données',
      subtitle: 'Architecte de données senior chez Sopra Steria'
    }
  }
};
```

## Error Handling

### Missing Translations

**Scenario**: Translation key not found for current locale

**Handling**:
1. Check if English fallback exists
2. Display fallback text with warning in development
3. Log missing translation for monitoring
4. Graceful degradation to English

### Invalid Language Detection

**Scenario**: Browser returns invalid or unsupported language

**Handling**:
1. Fallback to English immediately
2. Log detection failure for monitoring
3. Allow manual language selection
4. No user-visible error

### Storage Failures

**Scenario**: localStorage unavailable or corrupted

**Handling**:
1. Use in-memory storage as fallback
2. Re-detect language on each page load
3. Graceful degradation without persistence
4. No user-visible error

## Performance Considerations

### Translation Loading

- Lazy load translations only when needed
- Cache loaded translations in memory
- Preload likely next language
- Bundle split by locale for optimal loading

### State Management

- Minimize re-renders during language changes
- Use React.memo for translation-heavy components
- Debounce rapid language switching
- Optimize translation key lookups

### Bundle Size

- Tree-shake unused translations
- Compress translation files
- Use dynamic imports for translation loading
- Monitor bundle size impact
