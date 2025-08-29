import React from 'react';
import Image from "next/image";
import aboutSection1Img from "@/assets/AboutSection1Img.jpg";

const NacossSection = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Image Section */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
                    {/* First Image */}
                    <div className="relative w-full h-80 sm:w-[303px] sm:h-[391px] rounded-2xl overflow-hidden">
                        <Image
                            src={aboutSection1Img}
                            alt="A group of people collaborating in a modern office space."
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                    </div>
                    {/* Second Image (Shorter, top aligned) */}
                    <div className="relative w-full h-64 sm:w-[303px] sm:h-[300px] rounded-2xl overflow-hidden"> {/* Adjusted height */}
                        <Image
                            src={aboutSection1Img} // Using a different placeholder for clarity
                            alt="A person smiling in front of a colorful, graffiti-style wall."
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                    </div>

                </div>

                {/* Text Content */}
                <div className="mt-8 lg:mt-0">
                    <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight">
                        Fostering Innovation, Building the Future.
                    </h3>
                    <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                        As the National Association of Computer Science Students (NACOSS), we are dedicated to empowering the next generation of tech leaders in Nigeria. We go beyond the classroom to provide a platform for our members to build, innovate, and collaborate on real-world projects. Our community is where curiosity transforms into creation and where ambitious ideas are given the support to thrive.
                    </p>
                    <a href="#" className="inline-block mt-4 text-sm sm:text-base text-blue-600 font-semibold hover:underline">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NacossSection;




// import Image from "next/image"
// import aboutSection1Img from "@/assets/AboutSection1Img.jpg"

// const nacossSection = () => {
//     return (
//         <div>
//             <div className="flex flex-auto ml-[24px] mb-20">
//                 <div className="w-3/12">
//                     <Image 
//                         src={aboutSection1Img}
//                         alt="Hero image"
//                         className="h-88 w-10/12 rounded-2xl w-2xl"
//                     />
//                 </div>
//                 <div className="w-3/12">
//                     <Image 
//                         src={aboutSection1Img}
//                         alt="Hero image"
//                         className="h-82 w-10/12 rounded-2xl w-2xl"
//                     />
//                 </div>
//                 <div className="w-1/4">
//                     <h3 className="font-semibold">
//                         NACOSS are eager to know how things work and inspired to make them work better. 
//                     </h3>
//                     <p className="mt-8">
//                         Nacoss people are eager to know how things work and inspired to make them work better. MIT people are eager to know how things work and inspired to make them work better.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default nacossSection