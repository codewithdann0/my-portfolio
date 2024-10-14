"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectList = [
    { title: "Project One", description: "A brief description of Project One.", link: "https://github.com/yourusername/project-one", imageUrl: "/images/project-one.png" },
    { title: "Project Two", description: "A brief description of Project Two.", link: "https://github.com/yourusername/project-two", imageUrl: "/images/project-two.png" },
    { title: "Project Three", description: "A brief description of Project Three.", link: "https://github.com/yourusername/project-three", imageUrl: "/images/project-three.png" },
    { title: "Project Four", description: "A brief description of Project Four.", link: "https://github.com/yourusername/project-four", imageUrl: "/images/project-four.png" },
    { title: "Project Five", description: "A brief description of Project Five.", link: "https://github.com/yourusername/project-five", imageUrl: "/images/project-five.png" },
    { title: "Project Six", description: "A brief description of Project Six.", link: "https://github.com/yourusername/project-six", imageUrl: "/images/project-six.png" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Projects</h2>
        {/* Scrollable container with hidden scrollbar */}
        <div className="flex space-x-8 py-4 px-2 overflow-x-auto hide-scrollbar">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 p-4 bg-white shadow rounded-lg w-80 dark:bg-gray-800"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              animate={{
                scale: hoveredProject === index ? 1.2 : 1,
                zIndex: hoveredProject === index ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline dark:text-blue-400"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
