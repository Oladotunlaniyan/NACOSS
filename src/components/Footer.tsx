"use client"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo and Brand */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">U</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold">UNIVERSITY OF ILORIN</h3>
                <p className="text-xs sm:text-sm text-gray-300">COMPUTER SCIENCE</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              © University of ilorin | All Rights Reserved
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#nacos" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">NACOSS</a>
              <a href="#blog" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Blog</a>
              <a href="#events" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Events</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">About</a>
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contact</a>
              <a href="#resources" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Resources</a>
              <a href="#school-website" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">School Website</a>
              <a href="#admissions" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Admissions</a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        {/* <div className="mt-12 pt-8 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.322-.285.598-1.593 1.246-2.608 1.494-.609.133-1.235.045-1.372-.445-.037-.15-.018-.318.108-.477.126-.159 1.794-2.191 2.447-2.951.384-.456.819-.799 1.083-1.008.479-.298 1.049-.448 1.649-.448 2.191 0 3.817 1.58 3.817 4.156 0 2.352-1.861 4.287-4.446 4.287-.869 0-1.686-.227-2.294-.494-.719-.299-1.049-.449-1.049-.449s-.299.15-.449 1.049c-.15.898-.299 1.948-.299 3.047 0 1.797.449 3.397 1.348 4.787 1.348 2.191 3.817 3.817 6.866 3.817 3.817 0 6.866-1.58 6.866-3.817 0-1.797-.449-3.397-1.348-4.787-.899-1.39-2.191-2.191-3.817-2.191z"/>
              </svg>
            </div>
            <span className="text-gray-300">@nacoslmu</span>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer