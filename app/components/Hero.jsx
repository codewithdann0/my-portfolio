"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";

// Framer Motion Variants
const fadeInAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 relative">
      <div className="flex flex-col items-center justify-center h-full w-full px-6 text-center gap-8">
        
        {/* Icon with Glow and Name with Typewriter Effect */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
        >
          <FaLaptopCode className="text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse glow-icon" />
          
          <div className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
            <Typewriter
              options={{
                strings: [
                  "Daniel Tigistu",
                  "Full-Stack Developer.",
                  "Creative Technologist.",
                  "Problem Solver.",
                  "Content Creator",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
        </motion.div>

        {/* Buttons Section with Gap and Glow Effects */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-20 mt-8"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
        >
          <Link href="/resume.pdf" target="_blank" download>
            <button className="px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 glow-button gradient-button">
              Download Resume
            </button>
          </Link>

          <Link href="https://www.linkedin.com/in/yourusername/messages/">
            <button className="px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 glow-button gradient-button">
              Hire Me
            </button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        /* Icon Glow Effect */
        .glow-icon {
          position: relative;
          filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.8));
        }

        /* Gradient Button Styles */
        .gradient-button {
          background: linear-gradient(to right, #4f46e5, #9333ea);
          color: white;
          border: none;
          transition: background 0.5s ease, transform 0.2s;
        }

        .gradient-button:hover {
          background: linear-gradient(to right, #9333ea, #4f46e5);
          transform: scale(1.05);
        }

        /* Glow Button Effect */
        .glow-button {
          position: relative;
          overflow: hidden;
        }

        .glow-button::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.3);
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .glow-button:hover::before {
          opacity: 1;
        }

        .glow-button:hover {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(79, 70, 229, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;
