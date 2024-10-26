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
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaDatabase />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiStripe />, name: "Stripe" },
    { icon: <SiPaypal />, name: "PayPal" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaReact />, name: "React Native" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">MY Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-full h-40 rounded-lg bg-white shadow-lg dark:bg-gray-800 
                      transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_rgba(0,132,255,0.8)]"
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
          >
            <div className="text-6xl text-blue-500 mb-2">{tech.icon}</div>
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
