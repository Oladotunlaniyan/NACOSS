import React from 'react';

export default function UpcomingEventsSection() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-extrabold mb-8 text-gray-900 leading-tight">
                TAKE A LOOK AT OUR <br className="hidden md:inline" /> UPCOMING EVENTS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                
                <div className="col-span-1 md:col-span-2 bg-[#D9D9D9] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="font-semibold text-2xl md:text-3xl lg:text-[30px] leading-tight mb-2">NACOSS Tech Fest</h2>
                        <p className="font-medium text-base md:text-lg mb-1">University of Ilorin Auditorium</p>
                        <p className="font-medium text-base md:text-lg">10am</p>
                    </div>
                    <div className="mt-8 md:mt-16 pt-4 border-t border-black">
                        <div className="flex justify-between items-end">
                            <span className="text-4xl md:text-6xl lg:text-[55px] font-bold">18</span>
                            <span className="text-sm md:text-base font-medium text-right leading-none">
                                AUG <br /> 2026
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 bg-[#DBE0CC] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="font-semibold text-xl md:text-2xl leading-tight mb-2">NACOSS Bootcamp; Tech Accelerator 2.0</h2>
                        <p className="font-medium text-base md:text-lg mb-1">CISLT - CIS Lecture Theatre</p>
                        <p className="font-medium text-base md:text-lg">Fridays, 3pm</p>
                    </div>
                    <div className="mt-8 md:mt-16 pt-4 border-t border-black">
                        <div className="flex justify-between items-end">
                            <span className="text-4xl md:text-6xl lg:text-[55px] font-bold">18</span>
                            <span className="text-sm md:text-base font-medium text-right leading-none">
                                AUG <br /> 2026
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 bg-[#DBE0CC] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="font-semibold text-xl md:text-2xl leading-tight mb-2">Tutorial COS 101 - Introduction to Computer Science</h2>
                        <p className="font-medium text-base md:text-lg mb-1">CISSA Library</p>
                        <p className="font-medium text-base md:text-lg">Thursdays and Fridays, 5pm</p>
                    </div>
                    <div className="mt-8 md:mt-16 pt-4 border-t border-black">
                        <div className="flex justify-between items-end">
                            <span className="text-4xl md:text-6xl lg:text-[55px] font-bold">18</span>
                            <span className="text-sm md:text-base font-medium text-right leading-none">
                                AUG <br /> 2026
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="col-span-1 bg-[#DBE0CC] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="font-semibold text-xl md:text-2xl leading-tight mb-2">Tutorial PHY 252 - Introduction to Electromagnetism II</h2>
                        <p className="font-medium text-base md:text-lg mb-1">CISSA Library</p>
                        <p className="font-medium text-base md:text-lg">Thursdays and Fridays, 5pm</p>
                    </div>
                    <div className="mt-8 md:mt-16 pt-4 border-t border-black">
                        <div className="flex justify-between items-end">
                            <span className="text-4xl md:text-6xl lg:text-[55px] font-bold">18</span>
                            <span className="text-sm md:text-base font-medium text-right leading-none">
                                AUG <br /> 2026
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}