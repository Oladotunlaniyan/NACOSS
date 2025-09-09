import Image from "next/image"
import cupImg from "@/assets/career_ai.svg"

export default function CupProgressSection() {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-start">

                    <div className="cup-progress-text w-full mt-[48px]">
                        <br />
                        <br />
                        <h4 className="text-4xl font-semibold xl:ml-[48px]">Our Dean Cup's Progress</h4>
                        <br />
                        <br />
                        <p className="xl:ml-[48px]">
                            The NACOSS  community is driven by  a shared prupose: to make a better world through education, research and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers <a href="" className="text-gray underline text-green-400">Read More.</a>
                        </p>
                    </div>
                    <div className="xl:ml-[48px] w-full relative w-full h-64 sm:h-72 lg:h-120 overflow-hidden">
                        <Image
                            src={cupImg}
                            alt="Cup Progress Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <br />



                </div>

            </div>
        </div>
    )
}