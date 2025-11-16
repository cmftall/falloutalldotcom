'use client'

import { Badge } from '@/components/ui/Badge'
import { useI18n } from '@/components/providers/I18nProvider'
import { Cloud, Database, Code, Wrench } from 'lucide-react'
import type { TechnologyCategory } from '@/lib/types'

export function Technologies() {
  const { t, locale } = useI18n()

  // Safely get technologies
  let categories: TechnologyCategory = {
    cloud: [],
    dataPlatforms: [],
    languages: [],
    tools: []
  }

  try {
    const techsRaw = t('technologies.categories')
    if (techsRaw && typeof techsRaw === 'object' && !Array.isArray(techsRaw)) {
      categories = techsRaw as TechnologyCategory
    }
  } catch {
    // Fallback to empty categories
  }

  const hasTechnologies = 
    categories.cloud.length > 0 ||
    categories.dataPlatforms.length > 0 ||
    categories.languages.length > 0 ||
    categories.tools.length > 0

  if (!hasTechnologies) {
    return null
  }

  // Category configuration
  const categoryConfig = [
    {
      key: 'cloud' as const,
      icon: Cloud,
      label: 'Cloud Platforms',
      labelFr: 'Plateformes Cloud',
      items: categories.cloud
    },
    {
      key: 'dataPlatforms' as const,
      icon: Database,
      label: 'Data Platforms',
      labelFr: 'Plateformes de Données',
      items: categories.dataPlatforms
    },
    {
      key: 'languages' as const,
      icon: Code,
      label: 'Languages',
      labelFr: 'Langages',
      items: categories.languages
    },
    {
      key: 'tools' as const,
      icon: Wrench,
      label: 'Tools & DevOps',
      labelFr: 'Outils & DevOps',
      items: categories.tools
    }
  ].filter(cat => cat.items.length > 0)

  return (
    <section id="technologies" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6">
              {t('technologies.title')}
            </h2>
            {t('technologies.subtitle') && (
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('technologies.subtitle')}
              </p>
            )}
          </div>

          {/* Technologies by Category - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
            {categoryConfig.map((category) => {
              const Icon = category.icon
              const label = locale === 'fr' ? category.labelFr : category.label

              return (
                <div 
                  key={category.key} 
                  className="space-y-3 md:space-y-4 p-4 md:p-5 bg-card border border-border/50 rounded-lg hover:border-accent/30 transition-colors duration-200"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2 md:gap-3 pb-2 border-b border-border/30">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0" />
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      {label}
                    </h3>
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {category.items.map((tech, idx) => (
                      <Badge
                        key={`${category.key}-${idx}`}
                        className="bg-accent/10 hover:bg-accent/20 border-accent/20 hover:border-accent/40 text-foreground rounded-lg px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-medium transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

