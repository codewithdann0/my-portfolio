// components/Skills.tsx
"use client";
import { motion } from 'framer-motion';

export default function Skills() {
  const skillsList = [
    {
      title: "Golang",
      description: "Proficient in ES6, asynchronous programming, and frameworks like React.",
      imageUrl: "/images/javascript.png" // Path to your skill image
    },
    ,{
      title: "C++",
      description: "Proficient in ES6, asynchronous programming, and frameworks like React.",
      imageUrl: "/images/javascript.png" // Path to your skill image
    },
    {
      title: "Php",
      description: "Proficient in ES6, asynchronous programming, and frameworks like React.",
      imageUrl: "/images/javascript.png" // Path to your skill image
    },
    {
      title: "JavaScript",
      description: "Proficient in ES6, asynchronous programming, and frameworks like React.",
      imageUrl: "/images/javascript.png" // Path to your skill image
    },
    {
      title: "Pyhton",
      description: "Experienced with data analysis, web development, and automation scripts.",
      imageUrl: "/images/python.png" // Path to your skill image
    },
    {
      title: "Laravel",
      description: "Knowledgeable in building RESTful APIs and MVC applications.",
      imageUrl: "/images/laravel.png" // Path to your skill image
    },
    // Add more skills as needed
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-800" // Added dark mode background
      initial={{ opacity: 0, y: -20 }} // Starting state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      exit={{ opacity: 0, y: 20 }} // Exit state
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" // Added dark mode background
              initial={{ opacity: 0, x: -100 }} // Starting state for animation
              animate={{ opacity: 1, x: 0 }} // Animate to this state
              exit={{ opacity: 0, x: 100 }} // Exit state
              transition={{ duration: 0.8, delay: index * 0.1 }} // Animation duration and delay for each skill
            >
              <img src={skill.imageUrl} alt={skill.title} className="w-12 h-12 mb-4" /> {/* Skill image */}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
