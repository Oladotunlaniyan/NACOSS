import React from 'react';
import Image from "next/image";
import resourceImg from "@/assets/cislt.png";

export default function ResourcesSection() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto px-4 py-16 md:py-24 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    <div className="space-y-12">

                        <div className="space-y-6">
                            <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Lecture Resources</h2>
                                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6L14 10L10 14"></path></svg>
                                </div>
                                <p className="text-gray-600 text-sm">drive.google.com</p>
                            </a>
                            <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Past Questions</h2>
                                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6L14 10L10 14"></path></svg>
                                </div>
                                <p className="text-gray-600 text-sm">nacoss.unilorin.edu.ng</p>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Opportunities</h2>
                                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6L14 10L10 14"></path></svg>
                                </div>
                                <p className="text-gray-600 text-sm">nacoss/opportunities.edu.ng</p>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Career Openings</h2>
                                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6L14 10L10 14"></path></svg>
                                </div>
                                <p className="text-gray-600 text-sm">nacoss/career.edu.ng</p>
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Nacoss Events</h2>
                                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6L14 10L10 14"></path></svg>
                                </div>
                                <p className="text-gray-600 text-sm">nacoss/events.edu.ng</p>
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Nacoss Hackathons</h2>
                                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6L14 10L10 14"></path></svg>
                                </div>
                                <p className="text-gray-600 text-sm">nacoss/opportunities.edu.ng</p>
                            </a>
                        </div>
                    </div>
                    <div className="w-full relative h-48 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-lg mt-8 lg:mt-0">
                        <Image
                            src={resourceImg}
                            alt="Modern building facade with multiple windows."
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-semibold">Not finding what <br /> you are looking for?</h2>
                        <a href="#" className="uppercase text-sm font-bold text-gray-400 hover:text-white transition-colors">Contact Us</a>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <p className="uppercase text-xs text-gray-400">Email Address</p>
                            <a href="mailto:nacos@unilorin.edu.ng" className="text-base sm:text-lg">nacos@unilorin.edu.ng</a>
                        </div>
                        <div>
                            <p className="uppercase text-xs text-gray-400">Phone</p>
                            <a href="tel:+2348062587328" className="text-base sm:text-lg">+234 899 999 9999</a>
                        </div>
                        <div>
                            <p className="uppercase text-xs text-gray-400">Address</p>
                            <p className="text-base sm:text-lg">
                                Tanke, University Road, <br />
                                Faculty of CIS, 
                                <br /> University of Ilorin.,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}