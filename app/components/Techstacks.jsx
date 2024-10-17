"use client"; // Ensure this component runs on the client side
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPhp, FaDatabase, FaGithub, FaMobileAlt, FaLaravel 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiFirebase, SiStripe, SiPaypal, SiGraphql, SiRedux, 
  SiTailwindcss, SiMongodb 
} from 'react-icons/si';

// Framer Motion Variants
const fadeInAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const TechStacks = () => {
  const [hovered, setHovered] = useState(null); // Track hovered icon

  const techStack = [
    { icon: <FaReact className="text-blue-500" />, name: 'React' },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, name: 'Next.js' },
    { icon: <SiFirebase className="text-yellow-500" />, name: 'Firebase' },
    { icon: <FaLaravel className="text-red-700" />, name: 'Laravel' },
    { icon: <FaDatabase className="text-gray-600" />, name: 'MySQL' },
    { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
    { icon: <SiGraphql className="text-purple-600" />, name: 'GraphQL' },
    { icon: <SiStripe className="text-blue-600" />, name: 'Stripe' },
    { icon: <SiPaypal className="text-blue-500" />, name: 'PayPal' },
    { icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, name: 'GitHub' },
    { icon: <FaReact className="text-blue-500" />, name: 'React Native' },
    { icon: <SiRedux className="text-purple-600" />, name: 'Redux' },
    { icon: <SiTailwindcss className="text-blue-400" />, name: 'Tailwind CSS' },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">MY Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg transition-all transform duration-300 hover:scale-110 dark:bg-gray-800 
              ${hovered !== null && hovered !== index ? 'blur-sm' : ''}`}
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {tech.icon}
            <span className="text-xs text-gray-600 dark:text-gray-300">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
