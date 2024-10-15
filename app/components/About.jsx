"use client";
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: -20 }} // Starting state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      exit={{ opacity: 0, y: 20 }} // Exit state
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <motion.img
            src="/img.jpg" // Replace with your image path
            alt="My Image"
            className="w-80 h-80 rounded-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            whileHover={{ scale: 1.1, rotate: 7 }}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            <Typewriter
              options={{
                strings: ["Hi! I'm Daniel Tigistu, a 23-year-old, 4th-year software engineering student at Haramaya University. I started programming and web development three years ago, and it's been a thrilling journey. I have a passion for creating stunning websites for clients and my company, and I find immense satisfaction in building things from the ground up."],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            My goal is to become a person who is loved by God and admired for my work. I'm confident in my ability to learn things quickly, and I thrive in team environments where communication is key. I'm pragmatic, reasonable, ambitious, and incredibly proud of my consistency and hard work. I firmly believe that dedication and perseverance will pay off in the end.
          </p>
          
        </div>
      </div>
    </motion.section>
  );
}
