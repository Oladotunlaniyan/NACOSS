import Image from "next/image"
import aboutSection1Img from "@/assets/AboutSection1Img.jpg"

const nacossSection = () => {
    return (
        <div>
            <div className="flex flex-auto ml-[24px] mb-20">
                <div className="w-3/12">
                    <Image 
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-88 w-10/12 rounded-2xl w-2xl"
                    />
                </div>
                <div className="w-3/12">
                    <Image 
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-82 w-10/12 rounded-2xl w-2xl"
                    />
                </div>
                <div className="w-1/4">
                    <h3 className="font-semibold">
                        NACOSS are eager to know how things work and inspired to make them work better. 
                    </h3>
                    <p className="mt-8">
                        Nacoss people are eager to know how things work and inspired to make them work better. MIT people are eager to know how things work and inspired to make them work better.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default nacossSection