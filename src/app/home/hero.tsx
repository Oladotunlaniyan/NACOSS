"use client";
import Image from "next/image";
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Herobg from "../../assets/hero.png";

export default function Hero() {
  return (
    <div className="relative font-Inter overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Herobg}
          alt="Healthcare professional with elderly patient"
          fill
          className="object-center object-cover"
          priority
        />
        {/* Blue Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/60 to-transparent h-3/4"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 pb-1 sm:pb-24 min-h-screen flex flex-col justify-center md:justify-end items-center text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto mb-6 sm:mb-8"
        >
          Comprehensive Medical Care You Can Trust
        </motion.h1>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-white w-full max-w-2xl py-3"
        >
          <button className="py-4 px-6 flex gap-2 justify-center rounded-full w-full sm:w-auto sm:min-w-[280px] bg-[#FFFFFF4D] border-[#23375F] hover:bg-white/50 cursor-pointer font-medium transition-colors duration-200">
            <Calendar className="w-5 h-5" />
            Book an appointment
          </button>

          <button className="py-4 px-6 flex gap-2 justify-center rounded-full w-full sm:w-auto sm:min-w-[280px] bg-[#FFFFFF4D] hover:bg-white/50 cursor-pointer font-medium transition-colors duration-200">
            <Phone className="w-5 h-5" />
            Call Us at (123) 456-7891
          </button>
        </motion.div>
      </div>
    </div>
  );
}
