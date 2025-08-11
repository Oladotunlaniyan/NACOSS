"use client"
import { Calendar, Microscope, PhoneOutgoing} from "lucide-react"

export default function Footer (){

    return(
        <div className="bg-[#010F30] font-Inter text-white py-8 sm:py-12 lg:py-16">
            {/* Cards Section */}
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl mx-auto'>
                {/* Schedule Card */}
                <div className="bg-[#FFFFFF4D] rounded-xl sm:rounded-2xl cursor-pointer px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-7 lg:py-8 shadow-lg hover:bg-[#FFFFFF60] transition-colors duration-200"> 
                    <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-1"/>
                        <span className="font-bold text-base sm:text-lg lg:text-xl leading-tight">Schedule an appointment</span>
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-100">
                        Reserve an appointment in 2 quick steps using realtime availability calendar
                    </div>
                </div>

                {/* Call Card */}
                <div className="bg-[#FFFFFF4D] rounded-xl sm:rounded-2xl cursor-pointer px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-7 lg:py-8 shadow-lg hover:bg-[#FFFFFF60] transition-colors duration-200"> 
                    <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <PhoneOutgoing className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-1"/>
                        <span className="font-bold text-base sm:text-lg lg:text-xl leading-tight">Call Us</span>
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-100">
                        Need to speak to someone? Call us at (122)-6971-891 for appointment reservations or questions.
                    </div>
                </div>

                {/* Hours Card */}
                <div className="bg-[#FFFFFF4D] rounded-xl sm:rounded-2xl cursor-pointer px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-7 lg:py-8 shadow-lg hover:bg-[#FFFFFF60] transition-colors duration-200 sm:col-span-2 lg:col-span-1"> 
                    <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <Microscope className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 sm:mt-1"/>
                        <span className="font-bold text-base sm:text-lg lg:text-xl leading-tight">Practice Hours</span>
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base leading-relaxed text-gray-100">
                        <div className="space-y-1">
                            <div>Monday-Tuesday: 09:00-21:00</div>
                            <div>Friday: 09:00-19:00</div>
                            <div>Saturday: 11:00-16:00</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}