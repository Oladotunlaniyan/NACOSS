
const aboutSection2 = () => {
    return (
        // <div>
        //     <div className="grid grid-cols-2 gap-4 h-64">
        //         <div className="p-[60px]">
        //             <h1 className="text-4xl font-bold">HIGHER EDUCATION, <br />
        //                 HIGHER PURPOSE</h1>
        //         </div>
        //         <div className="p-[20px]">
        //             <p className="text-sm font-normal"> <br /> <br />
        //                 Nacoss Unilorin people are eager to know how things work and inspired to make them work better. Nacoss Unilorin people are eager to know how things work and inspired to make them work better. Nacoss Unilorin people are eager to know how things work and inspired. Nacoss Unilorin people are eager to know how things work and inspired.
        //             </p>
        //         </div>
        //     </div>
        // </div>


        <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                {/* Heading */}
                <div className="md:w-full">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                        HIGHER EDUCATION,
                        <br />
                        HIGHER PURPOSE
                    </h2>
                </div>
                {/* Paragraph */}
                <div className="space-y-4">
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Nacoss Unilorin members are eager to know how things work and inspired to make them work better. We are driven by a shared mission to innovate and improve. Through our community, we provide the tools and collaborative environment needed to turn ambitious ideas into reality, empowering the next generation of tech leaders.
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Our purpose extends beyond the classroom, focusing on practical application and real-world impact. We believe that by fostering a culture of continuous learning and problem-solving, we can create solutions that benefit our community and the world at large.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default aboutSection2