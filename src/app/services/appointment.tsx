"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import staff from "../../assets/staff.png";
import location from "../../assets/location.png";
import { CalendarDays, PhoneOutgoing, Mail } from "lucide-react";

export default function Appointment() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 py-5 gap-3 items-center justify-center">
      {/* Staff Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg flex lg:mx-0 lg:h-full lg:min-h-[500px]"
      >
        <Image
          src={staff}
          alt="staff picture"
          className="rounded-3xl w-full h-full object-cover lg:min-h-[500px] sm:mx-14"
        />
      </motion.div>

      {/* Location Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-full max-w-lg flex lg:mx-0 lg:h-full lg:min-h-[500px]"
      >
        <Image
          src={location}
          alt="location picture"
          className="rounded-2xl w-full h-full object-cover lg:min-h-[500px]"
        />

        {/* Contact Information Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="absolute bg-[#FFFFFF80] backdrop-blur-sm rounded-2xl p-3 sm:p-4 w-[calc(100%-2rem)] sm:w-auto sm:max-w-md left-4 sm:left-7 bottom-4 sm:bottom-6 lg:bottom-10"
        >
          {/* Address */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6 text-[#052978] flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold">Address</span>
            </div>
            <div className="text-xs sm:text-sm pl-7 sm:pl-8 text-gray-700 leading-relaxed">
              544 Honey Creek Rd., West Des Moines, IA 50265
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#052978] flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold">Email Address</span>
            </div>
            <div className="text-xs sm:text-sm pl-7 sm:pl-8 text-gray-700 leading-relaxed">
              Reserve an appointment in 2 quick steps using realtime availability calendar
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <PhoneOutgoing className="w-5 h-5 sm:w-6 sm:h-6 text-[#052978] flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold">Phone Number</span>
            </div>
            <div className="pl-7 sm:pl-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
              (91)125879786 <br />
              (91)578666333
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
