"use client";
import Image from "next/image";
import Herobg from "../../assets/hero.png";
import { Calendar, Microscope, PhoneOutgoing } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-5xl lg:text-6xl font-medium text-hero-text leading-tight max-w-xs sm:max-w-3xl mx-auto mb-4 sm:mb-8 px-4 z-10 relative"
      >
        <h1>Comprehensive Medical Care You Can Trust</h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px]"
      >
        <Image
          src={Herobg}
          alt="Healthcare professional with elderly patient"
          fill
          className="object-cover object-center rounded-4xl p-3"
          priority
        />
      </motion.div>

      {/* Cards Section */}
      <section className="absolute top-[30%] md:top-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl mx-auto w-full">
        {/* Schedule Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hover:text-black text-white bg-[#0202024D] rounded-xl sm:rounded-2xl cursor-pointer px-4 sm:px-6 lg:px-8 xl:px-10 py-5 sm:py-7 lg:py-8 shadow-lg hover:bg-[#FFFFFF60] transition-colors duration-200"
        >
          <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="font-bold text-base sm:text-lg lg:text-xl leading-tight">
              Schedule an appointment
            </span>
          </div>
          <div className="text-xs sm:text-sm lg:text-base leading-relaxed">
            Reserve an appointment in 2 quick steps using realtime availability
            calendar
          </div>
        </motion.div>

        {/* Call Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white hover:text-black bg-[#0202024D] rounded-xl cursor-pointer px-4 sm:px-6 lg:px-8 xl:px-10 py-5 sm:py-7 lg:py-8 shadow-lg hover:bg-[#FFFFFF60] transition-colors duration-200"
        >
          <div className="flex items-start gap-2 mb-3">
            <PhoneOutgoing className="w-5 h-5 flex-shrink-0" />
            <span className="font-bold text-base sm:text-lg lg:text-xl leading-tight">
              Call Us
            </span>
          </div>
          <div className="text-xs sm:text-sm lg:text-base leading-relaxed">
            Need to speak to someone? Call us at (122)-6971-891 for appointment
            reservations or questions.
          </div>
        </motion.div>

        {/* Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-white hover:text-black bg-[#0202024D] rounded-xl cursor-pointer px-4 sm:px-6 lg:px-8 xl:px-10 py-5 sm:py-7 lg:py-8 shadow-lg hover:bg-[#FFFFFF60] transition-colors duration-200 sm:col-span-2 lg:col-span-1"
        >
          <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Microscope className="w-5 flex-shrink-0" />
            <span className="font-bold text-base sm:text-lg lg:text-xl leading-tight">
              Practice Hours
            </span>
          </div>
          <div className="text-xs sm:text-sm lg:text-base leading-relaxed">
            <div className="space-y-1">
              <div>Monday-Tuesday: 09:00-21:00</div>
              <div>Friday: 09:00-19:00</div>
              <div>Saturday: 11:00-16:00</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
