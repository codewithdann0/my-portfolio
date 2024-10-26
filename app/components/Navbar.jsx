'use client';
import { useState, useEffect } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import ThemeToggle from './ThemeToggle';
import { motion, useMotionValue, animate, stagger } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const progress = useMotionValue(0);

  useEffect(() => {
    const sequence = [
      ['ul', { opacity: 1 }, { duration: 0.5 }],
      [progress, 100, { ease: 'easeInOut' }],
    ];
    animate(sequence);
  }, [progress]);

  const ulVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const liVariants = {
    open: { x: [-100, 0], transition: { delay: stagger(0.1) } },
    closed: { x: 0 },
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Desktop & Center-Aligned Menu */}
          <div className="hidden md:flex justify-center w-full space-x-16">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="relative flex items-center text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 transition duration-300"
              >
                <span>{item}</span>
                <MdOutlineArrowOutward className="ml-1 text-xl" />
                <div className="absolute inset-0 bg-blue-100 dark:bg-gray-800 rounded-full scale-0 hover:scale-100 transition-transform duration-300 ease-in-out -z-1" />
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button - Only for Small Screens */}
          <div className="sm:block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className={`h-7 w-7 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
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
      <motion.div
        className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={ulVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <ul className="px-4 py-6 space-y-4">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <motion.li
              key={index}
              className="block text-lg font-medium text-gray-800 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              variants={liVariants}
            >
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}
          <ThemeToggle />
        </ul>
      </motion.div>
    </nav>
  );
}
