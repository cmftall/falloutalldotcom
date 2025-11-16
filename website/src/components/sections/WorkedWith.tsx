'use client'

// Removed motion imports - using static layout
import { Building2 } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'

export function WorkedWith() {
  const { t } = useI18n()

  // Company data - clean text-based design
  const companies = [
    {
      name: 'National Bank of Canada',
      short: 'BNC',
      industryKey: 'Banking',
      location: 'Montreal'
    },
    {
      name: 'Orange',
      short: 'ORANGE',
      industryKey: 'Telecommunications',
      location: 'Abidjan, Dakar'
    },
    {
      name: 'Onepoint',
      short: 'ONEPOINT',
      industryKey: 'Consulting',
      location: 'Montreal, Lyon'
    },
    {
      name: 'Sopra Steria',
      short: 'SOPRA STERIA',
      industryKey: 'Technology',
      location: 'Paris'
    },
    {
      name: 'Atos',
      short: 'ATOS',
      industryKey: 'Technology',
      location: 'Dakar, Grenoble'
    }
  ]

  return (
    <section id="workedWith" className="py-20 md:py-32 bg-card border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 px-4">
            <div className="inline-flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-accent" />
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-accent">
                {t('workedWith.title')}
              </h2>
              <div className="h-px w-8 md:w-12 bg-accent" />
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t('workedWith.subtitle')}
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {companies.map((company) => (
              <div
                key={company.name}
                className="group"
                     >
                       <div 
                         className="relative bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg overflow-hidden h-full"
                         aria-label={`${company.name} - ${t(`workedWith.industries.${company.industryKey.toLowerCase()}`) || company.industryKey} company`}
                       >
                         {/* Gold corner accents on hover */}
                         <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                         <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                         <div className="relative z-10">
                          {/* Company Icon */}
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                              <Building2 className="h-8 w-8 text-primary group-hover:text-accent transition-colors" aria-hidden="true" />
                            </div>
                          </div>

                           {/* Company Short Name */}
                           <h3 className="font-mono text-xl font-bold text-center text-primary mb-2 tracking-tight">
                             {company.short}
                           </h3>

                           {/* Industry Tag */}
                           <div className="text-center mb-2">
                             <span className="inline-block text-xs font-medium text-accent px-3 py-1 bg-accent/10 rounded-full">
                               {t(`workedWith.industries.${company.industryKey.toLowerCase()}`) || company.industryKey}
                             </span>
                           </div>

                           {/* Location - Mobile-friendly with line break for multiple cities */}
                           <p className="text-xs text-center text-muted-foreground leading-relaxed">
                             {company.location.includes(',') ? (
                               <span className="block">
                                 {company.location.split(', ').map((city, idx, arr) => (
                                   <span key={city}>
                                     {city}
                                     {idx < arr.length - 1 && (
                                       <span className="hidden sm:inline">, </span>
                                     )}
                                     {idx < arr.length - 1 && (
                                       <span className="sm:hidden">
                                         <br />
                                       </span>
                                     )}
                                   </span>
                                 ))}
                               </span>
                             ) : (
                               company.location
                             )}
                           </p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>

        </div>
      </div>
    </section>
  )
}

