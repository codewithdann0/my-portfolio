"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-32 bg-white dark:bg-gray-900" // Increased padding
      initial={{ opacity: 0, y: -20 }} // Starting state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      exit={{ opacity: 0, y: 20 }} // Exit state
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch text-center md:text-left border-4 border-gradient rounded-lg shadow-lg glow-border p-8"> {/* Increased padding for the container */}
        <div className="md:w-1/4 mb-4 md:mb-0"> {/* No padding here for image container */}
          <img
            src="/dani.png" // Replace with your image path
            alt="My Image"
            className="w-full h-full object-cover rounded-xl" // Changed to full height and width
          />
        </div>
        <div className="md:w-3/4 md:pl-12 flex flex-col justify-center"> {/* Added flex column to center text */}
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
           ......../ About Me
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400">
            Hi! I'm Daniel Tigistu, a dedicated web developer specializing in creating responsive and user-friendly applications. With a solid background in technologies like Laravel, Next.js, and Tailwind CSS, I provide tailored web solutions that meet your unique needs. My passion lies in delivering high-quality work that not only satisfies clients but also contributes to their success. I thrive in collaborative environments, ensuring effective communication and commitment to project goals. Let's work together to bring your vision to life!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
