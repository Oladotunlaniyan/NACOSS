"use client"

import { useState } from "react"

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const events = [
    {
      title: "TEDx Landmark University",
      location: "International Conference Center",
      time: "10am",
      date: "18 AUG 2022"
    },
    {
      title: "Tech Innovation Summit",
      location: "Main Auditorium",
      time: "2pm",
      date: "25 AUG 2022"
    },
    {
      title: "AI Workshop Series",
      location: "Computer Lab 101",
      time: "9am",
      date: "30 AUG 2022"
    },
    {
      title: "Hackathon 2022",
      location: "Innovation Hub",
      time: "6pm",
      date: "05 SEP 2022"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12 text-center">EVENTS</h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Events Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md">
              <div className="bg-primary-100 rounded-lg p-6 sm:p-8 text-center shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  {events[currentIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">
                  {events[currentIndex].location}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {events[currentIndex].time}
                </p>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                  {events[currentIndex].date}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection 