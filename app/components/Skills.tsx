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
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { BiLogoCPlusPlus, BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { useState } from "react";

// Animation variant for skill divs
const skillVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  whileHover: { scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" },
  transition: { duration: 0.3 },
};

export default function Skills() {
  const [isForward, setIsForward] = useState(true);

  const skillsList = [
    { title: "Next.js", icon: <BiLogoReact className="w-12 h-12 text-gray-700" /> },
    { title: "Java", icon: <FaJava className="w-12 h-12 text-red-600" /> },
    { title: "Git", icon: <FaGitAlt className="w-12 h-12 text-orange-500" /> },
    { title: "Tailwind CSS", icon: <BiLogoTailwindCss className="w-12 h-12 text-teal-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="w-12 h-12 text-purple-600" /> },
    { title: "React Native", icon: <BiLogoReact className="w-12 h-12 text-blue-500" /> },
    { title: "Golang", icon: <FaGolang className="w-12 h-12 text-green-400" /> },
    { title: "C++", icon: <BiLogoCPlusPlus className="w-12 h-12 text-blue-700" /> },
    { title: "PHP", icon: <FaPhp className="w-12 h-12 text-blue-700" /> },
    { title: "JavaScript", icon: <FaJsSquare className="w-12 h-12 text-yellow-500" /> },
    { title: "Python", icon: <FaPython className="w-12 h-12 text-yellow-300" /> },
    { title: "Laravel", icon: <FaLaravel className="w-12 h-12 text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">I used ..</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              className="flex flex-col items-center p-4 rounded-xl shadow-lg 
                         bg-white/40 dark:bg-gray-900/40 backdrop-blur-md"
              variants={skillVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              transition={skillVariants.transition}
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
