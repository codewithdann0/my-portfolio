// components/About.tsx
"use client";
import { motion } from 'framer-motion';

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
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          I am a software developer with a passion for creating dynamic and responsive web applications...
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          In addition to my technical skills, I enjoy collaborating with teams and learning new technologies...
        </p>
      </div>
    </motion.section>
  );
}
