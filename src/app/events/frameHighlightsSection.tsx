import Image from "next/image";
import frameHighlighImg1 from "@/assets/highlights-img(1).svg";
import frameHighlighImg2 from "@/assets/highlights-img(2).svg";
import frameHighlighImg3 from "@/assets/highlights-img(3).svg";
import frameHighlighImg4 from "@/assets/highlights-img(4).svg";
import frameHighlighImg5 from "@/assets/highlights-img(5).svg";


const careerPaths = [
    { name: "Our 1- 0 win against Civil Eng. vs Computer Sci.", image: frameHighlighImg1 },
    { name: "Our 3- 0 win against TSC. vs Computer Sci.", image: frameHighlighImg2 },
    { name: "CS Students Winning the Dean Cup Trophy.", image: frameHighlighImg3 },
    { name: "Inter-Faculty Debates, Representing CIS Faculty", image: frameHighlighImg4 },
    { name: "Computer Science Student Innovations", image: frameHighlighImg5 },
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