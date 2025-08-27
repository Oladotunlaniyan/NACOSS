import Image from "next/image"
import aboutSection1Img from "@/assets/AboutSection1Img.jpg"

const aboutSection1 = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 h-full">
                <div className="w-xl ml-[81px] min-w-xs  p-[16px]">
                    <p className="font-semibold text-2xl">
                        The MIT  community is driven by  a shared prupose: to make a better world through education, research and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.
                    </p>
                    <br /> <br />
                    <p className="text-xl">
                        The MIT  community is driven by  a shared prupose: to make a better world through education, research and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.
                    </p>
                </div>
                <div>
                    <Image
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-fit rounded-2xl w-2xl"
                    />
                    <br /> <br /> <br />
                </div>

            </div> <br /> <br /> <br />

        </div>
    )
}

export default aboutSection1