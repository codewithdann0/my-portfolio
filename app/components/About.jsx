"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 sm:py-24 md:py-32 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-8 p-8 border-4 border-gradient rounded-lg shadow-lg glow-border">

        {/* Image Container */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/dani.png"
            alt="My Image"
            className="w-64 h-64 sm:w-72 sm:h-72 object-contain rounded-full"
          />
        </div>

        {/* Text Container */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            ......../ About Me
          </h2>
          <p className="text-sm sm:text-md lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Hi! I'm Daniel Tigistu, a dedicated web developer specializing in creating responsive and user-friendly applications. 
            With a solid background in technologies like Laravel, Next.js, and Tailwind CSS, I provide tailored web solutions that meet your unique needs. 
            My passion lies in delivering high-quality work that not only satisfies clients but also contributes to their success. 
            I thrive in collaborative environments, ensuring effective communication and commitment to project goals. 
            Let's work together to bring your vision to life!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
