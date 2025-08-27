"use client"

const NewsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">NEWS</h2>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 leading-tight">
                MIT students are eager to know how things work
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                A group of MIT students recently visited our department to learn about our innovative approaches to computer science education and research. They were particularly interested in our hands-on learning methodologies and cutting-edge research projects.
              </p>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base">
                Read More
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:w-80 h-64 sm:h-80">
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">Student working on laptop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection 