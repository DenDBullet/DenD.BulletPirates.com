'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';




const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === '/') {
      e.preventDefault(); // Prevent navigation
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full transition-all duration-300 z-50',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logos/kusi-nayon.png" alt="Logo" width={50} height={50} />
              <span className="text-xl font-bold">
                <span className={clsx(isScrolled ? 'text-black' : 'text-white')}>Kusi-</span>
                <span className="text-[#FFB400]">Nayon</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className={clsx(
              'transition-colors duration-300',
              isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
            )}>
              Home
            </Link>
            <Link href="#about" className={clsx(
              'transition-colors duration-300',
              isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
            )}>
              About
            </Link>
            <Link href="#menus" className={clsx(
              'transition-colors duration-300',
              isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
            )}>
              Our Menu
            </Link>
            <Link href="/contact" className={clsx(isScrolled ? 'text-black' : 'text-white')}>
              Contact
            </Link>
            <Link href="/testimonials" className={clsx(isScrolled ? 'text-black' : 'text-white')}>
              Testimonials
            </Link>
            <Link href="/reserve" className={clsx(isScrolled ? 'text-black' : 'text-white')}>
              Reserve Table
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 w-full">
          <Link href="/" className="block text-gray-800 py-2">
            Home
          </Link>
          <Link href="/about" onClick={handleAboutClick} className="block text-gray-800 py-2">
            About
          </Link>
          <Link href="/menu" className="block text-gray-800 py-2">
           Our Menu
          </Link>
          <Link href="/contact" className="block text-gray-800 py-2">
            Contact
          </Link>
          <Link href="/testimonials" className="block text-gray-800 py-2">
            Testimonials
          </Link>
          <Link href="/reserve" className="block text-gray-800 py-2">
            Reserve Table
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
