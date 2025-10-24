import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { WorkedWith } from '@/components/sections/WorkedWith'

// Lazy load non-critical sections for better performance
const Expertise = dynamic(() => import('@/components/sections/Expertise').then(mod => ({ default: mod.Expertise })), {
  loading: () => <div className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const FeaturedWork = dynamic(() => import('@/components/sections/FeaturedWork').then(mod => ({ default: mod.FeaturedWork })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Certifications = dynamic(() => import('@/components/sections/Certifications').then(mod => ({ default: mod.Certifications })), {
  loading: () => <div className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

export default function FrenchPage() {
  return (
    <>
      <Hero />
      <WorkedWith />
      <FeaturedWork />
      <Expertise />
      <Certifications />
      <Testimonials />
      <Contact />
    </>
  )
}
