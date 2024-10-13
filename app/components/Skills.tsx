"use client";
import { motion } from "framer-motion";
import {
  FaPhp,
  FaJsSquare,
  FaPython,
  FaLaravel,
  FaJava,
  FaGitAlt,
  FaBootstrap,
  FaStar,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { BiLogoCPlusPlus, BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { useState } from "react";

// Helper function to render stars
const renderStars = (count: number): JSX.Element => {
  return (
    <div className="flex justify-center mt-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          className={`w-5 h-5 ${
            index < count ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

// Animation variant for row
const rowVariants = {
  initial: (direction: string) => ({
    x: direction === "left" ? 200 : -200,
    rotateY: 0,
  }),
  animate: {
    x: 0,
    rotateY: 360,
    transition: {
      duration: 6, // One cycle takes 6 seconds
      ease: "linear", // Linear easing for consistent speed
      repeat: Infinity, // Infinite loop
    },
  },
  exit: (direction: string) => ({
    x: direction === "left" ? -200 : 200,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

export default function Skills() {
  const [isForward, setIsForward] = useState(true); // State to manage animation direction

  const skillsList = [
    { title: "Next.js", icon: <BiLogoReact className="w-12 h-12 text-gray-700" />, rating: 4 },
    { title: "Java", icon: <FaJava className="w-12 h-12 text-red-600" />, rating: 2 },
    { title: "Git", icon: <FaGitAlt className="w-12 h-12 text-orange-500" />, rating: 3 },
    { title: "Tailwind CSS", icon: <BiLogoTailwindCss className="w-12 h-12 text-teal-400" />, rating: 4 },
    { title: "Bootstrap", icon: <FaBootstrap className="w-12 h-12 text-purple-600" />, rating: 3 },
    { title: "React Native", icon: <BiLogoReact className="w-12 h-12 text-blue-500" />, rating: 3 },
    { title: "Golang", icon: <FaGolang className="w-12 h-12 text-green-400" />, rating: 2 },
    { title: "C++", icon: <BiLogoCPlusPlus className="w-12 h-12 text-blue-700" />, rating: 2 },
    { title: "PHP", icon: <FaPhp className="w-12 h-12 text-blue-700" />, rating: 4 },
    { title: "JavaScript", icon: <FaJsSquare className="w-12 h-12 text-yellow-500" />, rating: 4 },
    { title: "Python", icon: <FaPython className="w-12 h-12 text-yellow-300" />, rating: 2 },
    { title: "Laravel", icon: <FaLaravel className="w-12 h-12 text-red-500" />, rating: 3 },
  ];

  // Function to handle animation completion
  const handleAnimationComplete = () => {
    setIsForward(!isForward); // Toggle the animation direction
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* First Row */}
          {skillsList.slice(0, 4).map((skill, index) => (
            <motion.div
              key={`skill-row1-${index}`} // Unique key
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              variants={rowVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={isForward ? "left" : "right"} // Determine direction based on state
              onAnimationComplete={handleAnimationComplete} // Handle animation completion
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              {renderStars(skill.rating)}
            </motion.div>
          ))}

          {/* Second Row */}
          {skillsList.slice(4, 8).map((skill, index) => (
            <motion.div
              key={`skill-row2-${index}`} // Unique key
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              variants={rowVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={isForward ? "right" : "left"} // Determine direction based on state
              onAnimationComplete={handleAnimationComplete} // Handle animation completion
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              {renderStars(skill.rating)}
            </motion.div>
          ))}

          {/* Third Row */}
          {skillsList.slice(8).map((skill, index) => (
            <motion.div
              key={`skill-row3-${index}`} // Unique key
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              variants={rowVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={isForward ? "left" : "right"} // Determine direction based on state
              onAnimationComplete={handleAnimationComplete} // Handle animation completion
            >
              {skill.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>
              {renderStars(skill.rating)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
