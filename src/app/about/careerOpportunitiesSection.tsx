import Image from "next/image"
import aboutSection1Img from "@/assets/AboutSection1Img.jpg"

const careerOpportunitiesSection = () => {
    return (
        <div>
            <div className="grid grid-cols-5 p-[16px] gap-8 w-full">
                <div>
                    <Image 
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-fit rounded-2xl w-xl"
                    />
                    <p>Data Science</p>
                </div>
                <div>
                    <Image 
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-fit rounded-2xl w-xl"
                    />
                    <p>Software Engineer</p>
                </div>
                <div>
                    <Image 
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-fit rounded-2xl w-xl"
                    />
                    <p>DevOps</p>
                </div>
                <div>
                    <Image 
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-fit rounded-2xl w-xl"
                    />
                    <p>Artificial Intelligence</p>
                </div>
                <div>
                    <Image 
                        src={aboutSection1Img}
                        alt="Hero image"
                        className="h-fit rounded-2xl w-xl"
                    />
                    <p>Cyber Security</p>
                </div>
            </div>
        </div>
    )
}

export default careerOpportunitiesSection