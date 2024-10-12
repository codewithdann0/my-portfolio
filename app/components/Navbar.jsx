// components/Navbar.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600" smooth={true} duration={500}>
              {/* Logo or Brand Name */}
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center space-x-8"> {/* Changed space-x-4 to space-x-8 */}
            <Link href="/" className="text-gray-700 hover:text-blue-600" smooth={true} duration={500}>
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600" smooth={true} duration={500}>
              About
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600" smooth={true} duration={500}>
              Projects
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600" smooth={true} duration={500}>
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 ml-2">
            <Link href="#about"className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              About
            </Link>
            <Link href="#projects" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Projects
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
            <ThemeToggle className="text-color"/>
          </div>
        </div>
      )}
    </nav>
  );
}
