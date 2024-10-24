"use client"; // Ensure this component runs on the client side
import React from "react";
import { FaBriefcase, FaCode, FaYoutube } from "react-icons/fa"; // Importing icons

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "HavanAcademy (Freelance)",
      duration: "July 2023 - Present",
      description:
        "Developed and maintained the academy's platform using Laravel and Tailwind CSS, implementing access control and optimizing interaction for students and instructors.",
      icon: <FaCode className="text-5xl text-blue-500" />, // Code icon
    },
    {
      title: "Freelancer & Content Creator",
      company: "Tech With Dann (YouTube Channel)",
      duration: "March 2023 - Present",
      description:
        "Create tech content in Amharic and English, covering programming, crypto, and forex. Build a tech community while engaging with viewers to share insights.",
      icon: <FaYoutube className="text-5xl text-red-500" />, // YouTube icon
    },
    {
      title: "Freelancer",
      company: "Various Clients",
      duration: "May 2022 - Present",
      description:
        "Delivered web solutions using Next.js, Laravel, and Tailwind CSS. Specialized in building e-commerce platforms and personal websites for diverse clients.",
      icon: <FaBriefcase className="text-5xl text-green-500" />, // Business icon
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full sm:w-80 md:w-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                {exp.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                {exp.company}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {exp.duration}
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
