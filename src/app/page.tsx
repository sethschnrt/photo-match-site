import SmoothScroll from '@/components/SmoothScroll'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import VenueTicker from '@/components/VenueTicker'
import HowItWorks from '@/components/HowItWorks'
import Experience from '@/components/Experience'
import Testimonial from '@/components/Testimonial'
import ForVenues from '@/components/ForVenues'
import AppPreview from '@/components/AppPreview'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <div className="page-wrapper grain-overlay">
      <Preloader />
      <CustomCursor />
      <SmoothScroll />
      <Navigation />
      <main className="main-wrapper">
        <Hero />
        <SocialProof />
        <VenueTicker />
        <HowItWorks />
        <Experience />
        <Testimonial />
        <ForVenues />
        <AppPreview />
        <Locations />
      </main>
      <Footer />
    </div>
  )
}
