'use client'
import Hero from "./hero"
import NewsSection from "@/components/NewsSection"
import AboutSection from "@/components/AboutSection"
import EventsSection from "@/components/EventsSection"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <NewsSection />
      <AboutSection />
      <EventsSection />
    </div>
  )
}