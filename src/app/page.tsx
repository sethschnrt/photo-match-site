import SmoothScroll from '@/components/SmoothScroll'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VenueTicker from '@/components/VenueTicker'
import HowItWorks from '@/components/HowItWorks'
import Experience from '@/components/Experience'
import Testimonial from '@/components/Testimonial'
import ForVenues from '@/components/ForVenues'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <div className="page-wrapper grain-overlay">

      <SmoothScroll />
      <Navigation />
      <main className="main-wrapper">
        <Hero />
        <VenueTicker />
        <HowItWorks />
        <Experience />
        <Testimonial />
        <ForVenues />
        <Locations />
      </main>
      <Footer />
    </div>
  )
}
