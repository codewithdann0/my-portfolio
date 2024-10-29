"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPhp, FaDatabase, FaGithub, FaMobileAlt, FaLaravel,
} from "react-icons/fa";
import {
  SiNextdotjs, SiFirebase, SiStripe, SiPaypal, SiGraphql, SiRedux,
  SiTailwindcss, SiMongodb,
} from "react-icons/si";

// Framer Motion Variants
const fadeInAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const TechStacks = () => {
  const techStack = [
    { icon: <FaReact />, name: "React", color: "text-blue-500" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-black" },
    { icon: <SiFirebase />, name: "Firebase", color: "text-yellow-500" },
    { icon: <FaLaravel />, name: "Laravel", color: "text-red-600" },
    { icon: <FaDatabase />, name: "MySQL", color: "text-blue-700" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
    { icon: <SiGraphql />, name: "GraphQL", color: "text-purple-600" },
    { icon: <SiStripe />, name: "Stripe", color: "text-blue-600" },
    { icon: <SiPaypal />, name: "PayPal", color: "text-blue-500" },
    { icon: <FaGithub />, name: "GitHub", color: "text-gray-800" },
    { icon: <FaReact />, name: "React Native", color: "text-blue-500" },
    { icon: <SiRedux />, name: "Redux", color: "text purple-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-500" },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">MY Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center w-full h-32 sm:h-40 rounded-lg bg-white shadow-lg dark:bg-gray-800 
                      transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_rgba(0,132,255,0.8)] ${tech.color}`}
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
          >
            <div className={`text-4xl sm:text-6xl mb-2 ${tech.color}`}>{tech.icon}</div>
            <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
