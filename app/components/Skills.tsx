"use client";
import { motion } from "framer-motion";
import { FaPhp, FaJsSquare, FaPython, FaJava } from "react-icons/fa";
import { BiLogoCPlusPlus } from "react-icons/bi";

// Animation variant for skill cards
const skillVariants = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  whileHover: { 
    scale: 1.1, 
    rotate: 5, 
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)" 
  },
  transition: { duration: 0.4 },
};

export default function Skills() {
  const skillsList = [
    { title: "C++", icon: <BiLogoCPlusPlus className="w-16 h-16 text-blue-700" /> },
    { title: "Python", icon: <FaPython className="w-16 h-16 text-yellow-300" /> },
    { title: "JavaScript", icon: <FaJsSquare className="w-16 h-16 text-yellow-500" /> },
    { title: "PHP", icon: <FaPhp className="w-16 h-16 text-indigo-600" /> },
    { title: "Java", icon: <FaJava className="w-16 h-16 text-red-600" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Programming Languages I'm Familiar With.
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skillsList.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              className="flex flex-col items-center p-4 rounded-2xl shadow-lg 
                         bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 
                         transition-colors duration-300 ease-in-out w-20 sm:w-24"
              variants={skillVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              transition={skillVariants.transition}
            >
              {skill.icon}
              <h3 className="mt-2 text-sm font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
