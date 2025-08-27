"use client"

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left side - Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-xs">VR Technology</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-xs">Collaborative Work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">ABOUT</h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our department is at the forefront of computer science education and research. We combine cutting-edge technology with innovative teaching methods to prepare students for the challenges of tomorrow&apos;s digital world.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Through our state-of-the-art facilities and world-class faculty, we provide students with hands-on experience in emerging technologies including artificial intelligence, virtual reality, and sustainable computing.
              </p>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 