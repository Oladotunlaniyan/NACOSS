import Image from "next/image";
import frameHighlighImg1 from "@/assets/aisha_nacoss.jpg";
import frameHighlighImg2 from "@/assets/lecturers.jpg";
import frameHighlighImg3 from "@/assets/nacoss_cis_su.jpg";
import frameHighlighImg4 from "@/assets/awards_cs.jpg";
import frameHighlighImg5 from "@/assets/nacoss_president_24_25.jpg";


const careerPaths = [
    { name: "Celebrating one of our very own, Nacoss VP 24/25", image: frameHighlighImg1 },
    { name: "Our amazing Computer Science Lecturers", image: frameHighlighImg2 },
    { name: "Nacoss President alongside Faculty and SU President", image: frameHighlighImg3 },
    { name: "Giving out awards at Nacoss Tech Fest 1.0", image: frameHighlighImg4 },
    { name: " Ayomide, Nacoss President, 2024/2025", image: frameHighlighImg5 },
];

export default function FrameHighlightsSection() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <div className="container mx-auto px-4 py-12 md:py-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-extrabold mb-8 text-gray-900 leading-tight">
                    HIGHLIGHTS IN FRAMES
                </h1>
                <br />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {careerPaths.map((path, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-2 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="relative w-full h-36 sm:h-40 md:h-48 overflow-hidden rounded-md">
                                <Image
                                    src={path.image}
                                    alt={path.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <p className="mt-3 text-sm sm:text-base font-medium text-gray-800">
                                {path.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}