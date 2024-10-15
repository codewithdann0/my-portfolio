"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FaLaptopCode,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

// Framer Motion Variants
const fadeInAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 relative">
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-full w-full px-6 text-center gap-8">
        
        {/* Icon and Text */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
        >
          <FaLaptopCode className="text-green-500 text-7xl lg:text-9xl animate-pulse" />
          <div className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight mb-20">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer.",
                  "Creative Technologist.",
                  "Problem Solver.",
                  "Your Next Team Member!",
                  "Content Creator"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
        </motion.div>
             
        {/* Social Media Links */}
        <div className="flex gap-10 justify-center">
          {[
            { name: "GitHub", url: "https://github.com", icon: <FaGithub /> },
            { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
            { name: "YouTube", url: "https://youtube.com", icon: <FaYoutube /> },
            { name: "TikTok", url: "https://tiktok.com", icon: <FaTiktok /> },
            { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-transform transform hover:scale-110"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
