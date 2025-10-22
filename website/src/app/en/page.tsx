import dynamic from 'next/dynamic'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { loadMessages } from '@/lib/i18n'
import { Hero } from '@/components/sections/Hero'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

// Lazy load non-critical sections
const FeaturedWork = dynamic(() => import('@/components/sections/FeaturedWork').then(mod => ({ default: mod.FeaturedWork })), {
  loading: () => <div className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Expertise = dynamic(() => import('@/components/sections/Expertise').then(mod => ({ default: mod.Expertise })), {
  loading: () => <div className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Education = dynamic(() => import('@/components/sections/Education').then(mod => ({ default: mod.Education })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Certifications = dynamic(() => import('@/components/sections/Certifications').then(mod => ({ default: mod.Certifications })), {
  loading: () => <div className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

export default async function EnglishPage() {
  const messages = await loadMessages('en')

  return (
    <I18nProvider initialLocale="en" initialMessages={messages}>
      <div className="min-h-screen bg-background">
        <Header />
             <main className="flex-1">
               <Hero />
               <FeaturedWork />
               <Expertise />
               <Education />
               <Certifications />
               <Contact />
             </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
