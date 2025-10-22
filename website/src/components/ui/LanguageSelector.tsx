'use client'

import { useState } from 'react'
import { useI18n } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'
import { ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LanguageSelectorProps {
  className?: string
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'sm' | 'default' | 'lg'
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]

export function LanguageSelector({
  className,
  variant = 'ghost',
  size = 'default'
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale } = useI18n()

  const handleLanguageChange = (newLocale: 'en' | 'fr') => {
    setIsOpen(false)
    setLocale(newLocale)
  }

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <div className={cn("relative", className)}>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage.name}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-popover ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as 'en' | 'fr')}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground",
                  locale === lang.code && "bg-accent text-accent-foreground"
                )}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}