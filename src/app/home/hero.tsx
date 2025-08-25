"use client"

import heroImg from "@/assets/hero.jpg"
import Image from "next/image"


const hero = () => {
  return (
    <div>
        <div className="relative w-full h-screen">
            <Image 
            src={heroImg}
            alt="Hero image"
            className="object-center object-cover"
            fill
            priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        <div className="absolute text-5xl sm:text-6xl font-bold text-gray-200 text-center leading-relaxed sm:left-90 top-50 sm:top-80">
            <h1>Pioneering Growth in <br /> Computing and Technology</h1> 
        </div>

        </div>
    </div>
  )
}

export default hero