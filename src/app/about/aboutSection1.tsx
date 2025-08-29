import Image from "next/image"
import aboutSection1Img from "@/assets/AboutSection1Img.jpg"

const aboutSection1 = () => {
    return (
        <div>
            {/* <div className="grid grid-cols-2 gap-16 h-full w-full">
                <div className="ml-[52px] p-[20px]">
                    <p className="font-semibold text-2xl">
                        The Nacoss Unilorin  community is driven by  a shared prupose: to make a better world through education, research and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.
                    </p>
                    <br /> <br />
                    <p className="text-xl">
                        The Nacoss Unilorin  community is driven by  a shared prupose: to make a better world through education, research and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.
                    </p>
                </div>
                <div className="p-[20px]">
                    <Image
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-auto rounded-2xl w-2xl"
                    />
                    <br /> <br /> <br />
                </div>

            </div> <br /> <br /> <br /> */}

            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <p className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
                            The NACOSS Unilorin community is driven by a shared purpose: to make a better world through education, research, and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600">
                            The NACOSS Unilorin community is driven by a shared purpose: to make a better world through education, research and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden">
                            <Image
                                src={aboutSection1Img}
                                alt="Audience at a tech conference"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default aboutSection1