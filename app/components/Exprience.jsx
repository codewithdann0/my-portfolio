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
        "Developing and maintaining the academy's web platform using Laravel and Tailwind CSS. Implementing access control and optimizing the platform for better student and instructor interaction.",
      icon: <FaCode className="text-4xl text-blue-500" />, // Code-related icon
    },
    {
      title: "Freelancer & Content Creator",
      company: "Tech With Dann (YouTube Channel)",
      duration: "March 2023 - Present",
      description:
        "Creating tech-related content in both Amharic and English, covering topics like programming, crypto, and forex. Building a community and engaging with followers to share insights.",
      icon: <FaYoutube className="text-4xl text-red-500" />, // YouTube icon
    },
    {
      title: "Freelancer",
      company: "Various Clients",
      duration: "May 2022 - Present",
      description:
        "Worked on web development projects for multiple clients, delivering solutions using Next.js, Laravel, and Tailwind CSS. Specialized in building e-commerce platforms and personal websites.",
      icon: <FaBriefcase className="text-4xl text-green-500" />, // Business icon
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white text-center">
        Experience
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Large Experience Item */}
        <div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-96
          transition-transform duration-300 ease-in-out 
          hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center justify-center mb-6">
            {experiences[0].icon} {/* Display icon */}
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {experiences[0].title}
          </h3>
          <h4 className="text-lg text-gray-700 dark:text-gray-300 mt-2">
            {experiences[0].company}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {experiences[0].duration}
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {experiences[0].description}
          </p>
        </div>

        {/* Smaller Experience Items */}
        <div className="flex flex-col gap-8">
          {experiences.slice(1).map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-80
              transition-transform duration-300 ease-in-out 
              hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                {exp.icon} {/* Display icon */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <h4 className="text-md text-gray-700 dark:text-gray-300 mt-2">
                {exp.company}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {exp.duration}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
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
