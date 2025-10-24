import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { WorkedWith } from '@/components/sections/WorkedWith'
import { LeadMagnet } from '@/components/sections/LeadMagnet'
import { Testimonials } from '@/components/sections/Testimonials'

// Lazy load non-critical sections for better performance
const FeaturedWork = dynamic(() => import('@/components/sections/FeaturedWork').then(mod => ({ default: mod.FeaturedWork })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})

export default function EnglishPage() {
  return (
    <>
      <Hero />
      <WorkedWith />
      <FeaturedWork />
      <Testimonials />
      <LeadMagnet />
      <Contact />
    </>
  )
}
