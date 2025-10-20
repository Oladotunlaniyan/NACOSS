import React from 'react';
import Image from "next/image";
import cupImg from "@/assets/nacoss_image.jpg";

export default function CupProgressSection() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <div className="space-y-4">
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                        Beyond the Lab: Champions on the Pitch
                    </h4>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                        The same spirit of innovation and teamwork that drives us to build groundbreaking projects fuels our competitive drive on the field. We bring the discipline of our code and the unity of our community to represent Computer Science in the Dean&apos;s Cup. Follow our journey as we push the boundaries of what&apos;s possible, both in the lecture halls and on the pitch.
                        <a href="#" className="inline text-blue-600 font-semibold ml-2 hover:underline">
                            Read More.
                        </a>
                    </p>
                </div>

                <div className="w-full relative h-72 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden">
                    <Image
                        src={cupImg}
                        alt="A football match in progress for the Dean's Cup"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
}