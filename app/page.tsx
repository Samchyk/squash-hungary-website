import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { FeaturedSections } from '@/components/featured-sections'
import { SquashFactsSection } from '@/components/squash-facts-section'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <FeaturedSections />
      <SquashFactsSection />
      <Footer />
    </main>
  )
}
