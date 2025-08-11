'use client'
import AboutSection from './aboutUs'
import Hero from './hero'
import InsurancePage from './insurance'
import FounderSection from './AboutFounder'
import FAQ from './faq'
import Appointment from './appointment'
import Blog from './blogSection'

export default function HomePage() {

  return (
    <div>
        <Hero />
        <AboutSection />
        <InsurancePage />
        <FounderSection />
        <FAQ />
        <Blog />
        <Appointment />
    </div>
  )
}