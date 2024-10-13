"use client";
import { motion } from "framer-motion";
import {
  FaPhp, FaJsSquare, FaPython, FaLaravel, FaJava, FaGitAlt,
  FaBootstrap, FaStar
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { BiLogoCPlusPlus, BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";

// Helper function to render stars based on rating
const renderStars = (count: number): JSX.Element => {
  return (
    <div className="flex justify-center mt-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          className={`w-5 h-5 ${index < count ? "text-yellow-500" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

// Animation variants for each row direction (left-to-right or right-to-left)
const rowVariants = (direction: "left" | "right") => ({
  animate: {
    x: direction === "left" ? [0, 50, 0] : [0, -50, 0], // Keyframes for back-and-forth motion
    transition: {
      duration: 5, // How long it takes for one full movement
      repeat: Infinity, // Loop indefinitely
      ease: "easeInOut", // Smooth transition
    },
  },
});

export default function Skills() {
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

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              variants={rowVariants(index % 2 === 0 ? "right" : "left")} // Alternate directions
              animate="animate"
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
