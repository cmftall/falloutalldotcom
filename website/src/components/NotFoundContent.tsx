'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

interface NotFoundContentProps {
  locale: string
}

export function NotFoundContent({ locale }: NotFoundContentProps) {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-3xl font-bold text-foreground">{t('common.pageNotFound')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('common.pageNotFoundDescription')}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href={`/${locale}`}>
              <Home className="h-4 w-4 mr-2" />
              {t('common.goHome')}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="javascript:history.back()">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('common.goBack')}
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">{t('common.tryThesePages')}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href={`/${locale}#about`} className="text-sm text-primary hover:underline">
              {t('navigation.about')}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href={`/${locale}#work`} className="text-sm text-primary hover:underline">
              {t('navigation.work')}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href={`/${locale}#expertise`} className="text-sm text-primary hover:underline">
              {t('navigation.expertise')}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href={`/${locale}#contact`} className="text-sm text-primary hover:underline">
              {t('navigation.contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
