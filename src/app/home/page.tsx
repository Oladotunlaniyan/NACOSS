'use client'
import Hero from "./hero"
import NewsSection from "@/components/NewsSection"
import AboutSection from "@/components/AboutSection"
import EventsSection from "@/components/EventsSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <NewsSection />
      <AboutSection />
      <EventsSection />
      <Footer />
    </div>
  )
}