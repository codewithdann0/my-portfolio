"use client"; // Ensure this component runs on the client side
import React from "react";
import { FaBriefcase, FaCode, FaYoutube, FaGraduationCap } from "react-icons/fa"; // Importing icons

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "HavanAcademy (Freelance)",
      duration: "July 2023 - Present",
      description:
        "Developed and maintained the academy's platform using Laravel and Tailwind CSS, implementing access control and optimizing interaction for students and instructors.",
      icon: <FaCode className="text-4xl text-blue-500" />,
    },
    {
      title: "Freelancer & Content Creator",
      company: "Tech With Dann (YouTube Channel)",
      duration: "March 2023 - Present",
      description:
        "Create tech content in Amharic and English, covering programming, crypto, and forex. Build a tech community while engaging with viewers to share insights.",
      icon: <FaYoutube className="text-4xl text-red-500" />,
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="relative border-l-4 border-blue-500 dark:border-blue-400">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-10 ml-10 group transition-all duration-300"
            >
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 text-white rounded-full group-hover:scale-110 transition-transform">
                {exp.icon}
              </span>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                <h4 className="text-lg text-blue-500 dark:text-blue-400 mt-1">
                  {exp.company}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {exp.duration}
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}

          {/* New Education Section */}
          <div className="mb-10 ml-10 group transition-all duration-300">
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 text-white rounded-full group-hover:scale-110 transition-transform">
              <FaGraduationCap className="text-4xl text-blue-500" />
            </span>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Software Engineering
              </h3>
              <h4 className="text-lg text-blue-500 dark:text-blue-400 mt-1">
                Haramaya University
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Expected Graduation: 2027
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing a degree in Software Engineering, gaining skills in programming, web development, and software design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
