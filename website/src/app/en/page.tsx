import { Hero } from '@/components/sections/Hero'
import { WorkedWith } from '@/components/sections/WorkedWith'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { BackToTop } from '@/components/ui/BackToTop'

export default function EnglishPage() {
  return (
    <>
      <Hero />
      <WorkedWith />
      <FeaturedWork />
      <FAQ />
      <Contact />
      <BackToTop />
    </>
  )
}
