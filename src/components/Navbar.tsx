"use client";
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const menuItems = [
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`${isScrolled ? 'bg-white' : 'bg-black'} shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-colors duration-300`}>
      <div className="flex flex-row justify-around items-center h-16">

        {/* Logo and University Name */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 flex items-center justify-center">
              {/* <img
                  src="/logo.png"
                  alt="NACOSS Unilorin Logo"
                  className="w-8 h-8 rounded-full"
                /> */}
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`${isScrolled ? 'text-black' : 'text-white'} text-lg font-semibold uppercase sm:font-medium leading-tight`}>
              NACOSS Unilorin
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-200 relative group`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 mt-1">
          <div className={`${isScrolled ? 'text-black' : 'text-white'} px-2 pt-2 pb-3 space-y-1`}>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-600 hover:bg-amber-50 transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;