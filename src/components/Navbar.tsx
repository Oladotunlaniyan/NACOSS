"use client";

import { useState } from 'react';
import logo from '../assets/logo.png'
import Image from 'next/image';
import { Menu, X, Phone} from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="px-4 sm:px-6 lg:px-7 mx-auto max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link 
          href='/' className="flex-shrink-0">
            <Image
              src={logo}
              alt='logo'
              className='cursor-pointer h-8 sm:h-10 w-auto'
              priority
            />
          </Link>

          {/* Desktop Contact Info Section */}
          <div className="hidden md:flex items-center space-x-2 text-gray-700 gap-4 lg:gap-8">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call (122)-6071-891</span>
            </div>
            <button className="cursor-pointer bg-button-background hover:bg-blue-700 text-white font-medium py-2 px-4 lg:px-6 rounded-md transition-colors duration-200 text-sm whitespace-nowrap">
              Book an Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-48 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-3 bg-white border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-gray-700 py-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call (122)-6071-891</span>
            </div>
            <button className="w-full bg-button-background hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 text-sm">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;