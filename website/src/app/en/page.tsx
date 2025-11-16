import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'
import { WorkedWith } from '@/components/sections/WorkedWith'
import { FloatingCTA } from '@/components/ui/FloatingCTA'
const FeaturedWork = dynamic(() => import('@/components/sections/FeaturedWork').then(mod => ({ default: mod.FeaturedWork })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})
const Certifications = dynamic(() => import('@/components/sections/Certifications').then(mod => ({ default: mod.Certifications })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})
const Technologies = dynamic(() => import('@/components/sections/Technologies').then(mod => ({ default: mod.Technologies })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4"><div className="animate-pulse bg-muted h-32 rounded-lg"></div></div></div>
})
import { BackToTop } from '@/components/ui/BackToTop'

export default function EnglishPage() {
  return (
    <>
      <Hero />
      <WorkedWith />
      <FeaturedWork />
      <Certifications />
      <Technologies />
      <FAQ />
      <Contact />
      <FloatingCTA />
      <BackToTop />
    </>
  )
}
