"use client"

import heroImg from "@/assets/hero.jpg"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 lg:mb-12 max-w-4xl sm:max-w-5xl lg:max-w-6xl px-4">
          ADVANCING THE FRONTIERS OF COMPUTING
        </h1>

        {/* Hero Image */}
        <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl px-4">
          <Image 
            src={heroImg}
            alt="Retro-futuristic computer lab with vintage computing equipment"
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Hero