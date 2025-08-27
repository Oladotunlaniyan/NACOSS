import Image from "next/image"
import aboutSection1Img from "@/assets/AboutSection1Img.jpg"

const leadershipSection = () => {
    return (
        <div>
            <div className="grid grid-cols-2 h-full">
                <div className="ml-[52px] p-[20px]">
                    <Image 
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-fit rounded-2xl w-2xl"
                    />
                </div>
                <div className="h-full p-[20px] w-8/12">
                    <h2 className="font-bold text-3xl">HEAD OF DEPARTMENT</h2>
                    <p className="font-semibold mt-4">PROF. R.O. OLADELE</p>

                    <p className="mt-10">
                        Prof. R.O Oladele .....is eager to know how things work and inspired to make them work better. MIT people are eager to know how things work and inspired to make them work better. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default leadershipSection