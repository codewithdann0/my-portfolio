'use client';
import { motion } from 'framer-motion';

// Project section component
const ProjectSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white dark:bg-gray-900">
      <h2 id="projects" className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">My Projects</h2>
      <div className="flex flex-col space-y-8">
        {/* Row for Large Project and Smaller Projects */}
        <div className="flex">
          {/* Large Project Card */}
          <motion.div
            className="flex-shrink-0 w-2/3 bg-blue-500 p-6 rounded-lg shadow-lg dark:bg-blue-600 relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0], boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-50 transition-opacity duration-500 hover:opacity-30"></div>
            <img
              src="/path/to/image1.jpg"
              alt="Project 1"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Project 1</h3>
            <p className="text-white">Description of the large project goes here.</p>
          </motion.div>

          {/* Smaller Project Cards */}
          <div className="flex flex-col space-y-4 w-1/3 ml-4">
            {[{ bg: 'green', title: 'Project 2', img: '/path/to/image2.jpg', desc: 'Short description of project 2.' },
              { bg: 'yellow', title: 'Project 3', img: '/path/to/image3.jpg', desc: 'Short description of project 3.' }].map((project, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 bg-${project.bg}-500 p-4 rounded-lg shadow-lg dark:bg-${project.bg}-600 relative overflow-hidden`}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0], boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50 transition-opacity duration-500 hover:opacity-20"></div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-white">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Row of Projects */}
        <div className="flex space-x-4">
          {[{ bg: 'red', title: 'Project 4', img: '/path/to/image4.jpg', desc: 'Short description of project 4.' },
            { bg: 'purple', title: 'Project 5', img: '/path/to/image5.jpg', desc: 'Short description of project 5.' },
            { bg: 'orange', title: 'Project 6', img: '/path/to/image6.jpg', desc: 'Short description of project 6.' }].map((project, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 w-1/3 bg-${project.bg}-500 p-4 rounded-lg shadow-lg dark:bg-${project.bg}-600 relative overflow-hidden`}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0], boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50 transition-opacity duration-500 hover:opacity-20"></div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-white">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
