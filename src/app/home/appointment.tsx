import lifeline from "../../assets/lifeline.png"
import location from "../../assets/location.png"
import Image from "next/image"
import { motion } from "framer-motion"
import { CalendarDays, Mail, PhoneOutgoing } from "lucide-react"

export default function Appointment() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-8 sm:py-12 lg:py-18 px-4 sm:px-6 lg:px-28 gap-6 lg:gap-4 font-Inter max-w-7xl mx-auto items-stretch">
      {/* Call to Action Card */}
      <div className="relative bg-[#0C2969] py-16 sm:py-24 lg:py-48 rounded-2xl w-full max-w-lg mx-auto lg:mx-0 text-center flex flex-col items-center justify-center lg:h-full lg:min-h-[500px]">
        <Image
          src={lifeline}
          alt="lifeline Image"
          className="absolute top-4 sm:top-6 lg:top-8 left-2 lg:left-0.5 w-auto h-8 sm:h-12 lg:h-auto"
        />
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold px-4 mb-6">
          Take the next step <br /> towards better health
        </h2>
        <button className="text-black bg-white py-3 px-6 cursor-pointer rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200">
          Book an Appointment
        </button>
      </div>

      {/* Location Card */}
      <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:h-full lg:min-h-[500px]">
        <Image
          src={location}
          alt="location picture"
          className="rounded-2xl w-full h-full object-cover lg:min-h-[500px]"
        />

        {/* Contact Information Overlay */}
        <div className="absolute bg-[#FFFFFF80] backdrop-blur-sm rounded-2xl p-3 sm:p-4 w-[calc(100%-2rem)] sm:w-auto sm:max-w-md left-4 sm:left-7 bottom-4 sm:bottom-6 lg:bottom-10">
          {/* Address */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <motion.div initial="initial" animate="animate">
                <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6 text-[#052978]" />
              </motion.div>
              <span className="text-sm sm:text-base font-semibold">Address</span>
            </div>
            <div className="text-xs sm:text-sm pl-7 sm:pl-8 text-gray-700 leading-relaxed">
              544 Honey Creek Rd., West Des Moines, IA 50265
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <motion.div initial="initial" animate="animate">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#052978]" />
              </motion.div>
              <span className="text-sm sm:text-base font-semibold">Email Address</span>
            </div>
            <div className="text-xs sm:text-sm pl-7 sm:pl-8 text-gray-700 leading-relaxed">
              Reserve an appointment in 2 quick steps using realtime availability calendar
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <motion.div initial="initial" animate="animate">
                <PhoneOutgoing className="w-5 h-5 sm:w-6 sm:h-6 text-[#052978]" />
              </motion.div>
              <span className="text-sm sm:text-base font-semibold">Phone Number</span>
            </div>
            <div className="pl-7 sm:pl-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
              (91)125879786 <br />
              (91)578666333
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
