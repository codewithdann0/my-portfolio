'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {/* Logo or Brand Name */}
            
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="relative flex items-center text-gray-700 dark:text-gray-300 transition duration-300"
              >
                <span className="relative z-10">{item}</span>
                <MdOutlineArrowOutward className="ml-1 text-base" />
                <div className="absolute inset-0 bg-blue-100 dark:bg-gray-700 rounded-full scale-0 hover:scale-100 transition-transform duration-300 ease-in-out -z-1" />
              </Link>
            ))}
          </div>
          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
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
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md"
              >
                {item}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
