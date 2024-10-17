"use client"; // Ensure this component runs on the client side
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Joiner",
      company: "XYZ Carpentry",
      duration: "January 2020 - June 2021",
      description: "Worked on various woodworking projects, including custom furniture and cabinetry. Collaborated with clients to meet their specifications and ensure quality craftsmanship.",
    },
    {
      title: "Fullstack Developer",
      company: "Tech Solutions Ltd.",
      duration: "July 2021 - Present",
      description: "Developed and maintained web applications using React, Node.js, and Tailwind CSS. Collaborated with cross-functional teams to enhance user experience and optimize performance.",
    },
    {
      title: "Software Engineer",
      company: "Innovatech Inc.",
      duration: "January 2022 - Present",
      description: "Designed and implemented software solutions to meet business needs. Conducted code reviews, wrote unit tests, and ensured adherence to best practices in software development.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Experience</h2>
      <div className="flex flex-col items-center space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-80 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
            <h4 className="text-md text-gray-600 dark:text-gray-300">{exp.company}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
