import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import Experience from '@/components/Experience'
import Testimonial from '@/components/Testimonial'
import ForVenues from '@/components/ForVenues'
import AppPreview from '@/components/AppPreview'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="grain-overlay overflow-x-hidden">
      <Navigation />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Experience />
      <Testimonial />
      <ForVenues />
      <AppPreview />
      <Locations />
      <Footer />
    </main>
  )
}
