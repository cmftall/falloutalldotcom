'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
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
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const { locale, setLocale } = useI18n()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleLanguageChange = useCallback((newLocale: 'en' | 'fr') => {
    setIsOpen(false)
    setLocale(newLocale)
    setFocusedIndex(-1)
    // Return focus to button after language change
    buttonRef.current?.focus()
  }, [setLocale])

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]
  const currentIndex = languages.findIndex(lang => lang.code === locale)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          setIsOpen(false)
          setFocusedIndex(-1)
          buttonRef.current?.focus()
          break

        case 'ArrowDown':
          event.preventDefault()
          setFocusedIndex((prev) => {
            const next = prev < languages.length - 1 ? prev + 1 : 0
            const button = dropdownRef.current?.querySelectorAll('button')[next]
            button?.focus()
            return next
          })
          break

        case 'ArrowUp':
          event.preventDefault()
          setFocusedIndex((prev) => {
            const next = prev > 0 ? prev - 1 : languages.length - 1
            const button = dropdownRef.current?.querySelectorAll('button')[next]
            button?.focus()
            return next
          })
          break

        case 'Home':
          event.preventDefault()
          setFocusedIndex(0)
          const firstButton = dropdownRef.current?.querySelectorAll('button')[0]
          firstButton?.focus()
          break

        case 'End':
          event.preventDefault()
          const lastIndex = languages.length - 1
          setFocusedIndex(lastIndex)
          const lastButton = dropdownRef.current?.querySelectorAll('button')[lastIndex]
          lastButton?.focus()
          break

        case 'Enter':
        case ' ':
          if (focusedIndex >= 0) {
            event.preventDefault()
            handleLanguageChange(languages[focusedIndex].code as 'en' | 'fr')
          }
          break
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, focusedIndex, handleLanguageChange])

  // Focus trap - redirect tabbing within dropdown
  useEffect(() => {
    if (!isOpen || !dropdownRef.current) return

    const dropdownButtons = dropdownRef.current.querySelectorAll('button')
    if (dropdownButtons.length === 0) return

    const firstButton = dropdownButtons[0] as HTMLButtonElement
    const lastButton = dropdownButtons[dropdownButtons.length - 1] as HTMLButtonElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstButton) {
          e.preventDefault()
          lastButton.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastButton) {
          e.preventDefault()
          firstButton.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [isOpen])

  return (
    <div className={cn("relative", className)}>
      <Button
        ref={buttonRef}
        variant={variant}
        size={size}
        onClick={() => {
          setIsOpen(!isOpen)
          setFocusedIndex(currentIndex)
        }}
        className="flex items-center gap-2"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage.name}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <div
          ref={dropdownRef}
          role="listbox"
          className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-popover ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          aria-label="Language options"
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                role="option"
                aria-selected={locale === lang.code}
                onClick={() => handleLanguageChange(lang.code as 'en' | 'fr')}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
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