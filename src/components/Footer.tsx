import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-backgroundPrimary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Logo and University Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">NACOSS Unilorin</h3>
              <p className="text-gray-300">Computer Science</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {/* First Column */}
              <div>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                      NACOSS
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/blog" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/events" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                      Events
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/about" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              {/* Second Column */}
              <div>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                      School Website
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                      Admissions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-300">
          <p className="text-gray-400 text-sm mb-4 lg:mb-0">
            © University of Ilorin | All Rights Reserved
          </p>
          
          {/* Social Media */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">nacoss</span>
          </div>
        </div>
      </div>
    </footer>
  );
}