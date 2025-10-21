import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'

// Lazy load non-critical sections
const Expertise = dynamic(() => import('@/components/sections/Expertise').then(mod => ({ default: mod.Expertise })), {
  loading: () => <div className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const FeaturedWork = dynamic(() => import('@/components/sections/FeaturedWork').then(mod => ({ default: mod.FeaturedWork })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Certifications = dynamic(() => import('@/components/sections/Certifications').then(mod => ({ default: mod.Certifications })), {
  loading: () => <div className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Education = dynamic(() => import('@/components/sections/Education').then(mod => ({ default: mod.Education })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Expertise />
      <Education />
      <Certifications />
      <Contact />
    </>
  )
}