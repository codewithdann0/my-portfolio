"use client";
import { motion } from 'framer-motion';
import { FaPhp, FaJsSquare, FaPython, FaLaravel } from 'react-icons/fa'; // Correct imports
import { FaGolang } from "react-icons/fa6";
import { BiLogoCPlusPlus } from "react-icons/bi";
export default function Skills() {
  const skillsList = [
    {
      title: "Golang",
      description: "Proficient in building scalable applications using Go.",
      icon: <FaGolang className="w-12 h-12 mb-4" />, // React icon for Golang
    },
    {
      title: "C++",
      description: "Skilled in object-oriented programming and data structures.",
      icon: <BiLogoCPlusPlus className="w-12 h-12 mb-4" />, // React icon for C++
    },
    {
      title: "PHP",
      description: "Experienced in building server-side applications with PHP.",
      icon: <FaPhp className="w-12 h-12 mb-4" />, // React icon for PHP
    },
    {
      title: "JavaScript",
      description: "Proficient in ES6, asynchronous programming, and frameworks like React.",
      icon: <FaJsSquare className="w-12 h-12 mb-4" />, // Updated icon for JavaScript
    },
    {
      title: "Python",
      description: "Experienced with data analysis, web development, and automation scripts.",
      icon: <FaPython className="w-12 h-12 mb-4" />, // React icon for Python
    },
    {
      title: "Laravel",
      description: "Knowledgeable in building RESTful APIs and MVC applications.",
      icon: <FaLaravel className="w-12 h-12 mb-4" />, // React icon for Laravel
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
              {skill.icon} {/* Use the React icon instead of an image */}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
