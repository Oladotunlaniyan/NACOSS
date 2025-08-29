import Image from "next/image"
import aboutSection1Img from "@/assets/AboutSection1Img.jpg"

const leadershipSection = () => {
    return (
         <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Image Section */}
                <div className="w-full">
                    <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={aboutSection1Img}
                            alt="A professional headshot of Professor R.O. Oladele"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                    </div>
                </div>
                {/* Text Content */}
                <div className="space-y-4">
                    <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">HEAD OF DEPARTMENT</h2>
                    <p className="font-semibold text-lg sm:text-xl mt-2 text-blue-600">PROF. R.O. OLADELE</p>
                    <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                        Prof. R.O. Oladele is a visionary leader dedicated to advancing computer science through a passion for continuous learning and innovation. His leadership inspires our community to push boundaries and create impactful solutions that resonate far beyond the classroom. He believes that by fostering a hands-on, collaborative environment, we can equip students with the skills and mindset needed to solve the complex challenges of tomorrow.
                    </p>
                </div>
            </div>
        </div>

)
}

export default leadershipSection



// {/* 
    
    
 
// <div>
//     <div className="grid grid-cols-2 h-full">
//         <div className="ml-[52px] p-[20px]">
//             <Image 
//                 src={aboutSection1Img}
//                 alt="Hero image"
//                 className="h-fit rounded-2xl w-2xl"
//             />
//         </div>
//         <div className="h-full p-[20px] w-8/12">
//             <h2 className="font-bold text-3xl">HEAD OF DEPARTMENT</h2>
//             <p className="font-semibold mt-4">PROF. R.O. OLADELE</p>

//             <p className="mt-10">
//                 Prof. R.O Oladele .....is eager to know how things work and inspired to make them work better. MIT people are eager to know how things work and inspired to make them work better. 
//             </p>
//         </div>
//     </div>
// </div>   */}