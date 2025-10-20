import Image from "next/image"
import DrBajeh from "@/assets/Dr_Bajeh.jpg"

const leadershipSection = () => {
    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="w-full">
                    <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={DrBajeh}
                            alt="A professional headshot of Dr A.O. Bajeh"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">
                        Driving Innovation at the Forefront
                    </h2>
                    <p className="font-semibold text-lg sm:text-xl mt-2 text-blue-600">
                        Dr. A.O. Bajeh
                    </p>
                    <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                        As a distinguished Doctor of Computer Science, Dr. A.O. Bajeh champions an environment of academic excellence and applied innovation. His leadership is pivotal in guiding students through the complexities of modern computing, from theoretical research to practical, real-world applications. Dr. Bajeh&apos;s mentorship equips the next generation of technologists with the critical thinking and problem-solving skills necessary to lead the digital transformation in Nigeria and beyond.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default leadershipSection