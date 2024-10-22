'use client';
import { motion } from 'framer-motion';

// Project section component
const ProjectSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-gray-100 dark:bg-gray-800">
      <h2 id='projects' className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">My Projects</h2>
      <div className="flex flex-col space-y-8">
        {/* Row for Large Project and Smaller Projects */}
        <div className="flex">
          {/* Large Project Card */}
          <motion.div 
            className="flex-shrink-0 w-2/3 bg-blue-500 p-6 rounded-lg shadow-lg dark:bg-blue-600"
            whileHover={{ scale: 1.05 }} // Optional: scale effect on hover
          >
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
            <motion.div 
              className="flex-shrink-0 bg-green-500 p-4 rounded-lg shadow-lg dark:bg-green-600"
              whileHover={{ scale: 1.05 }} // Optional: scale effect on hover
            >
              <img 
                src="/path/to/image2.jpg" 
                alt="Project 2" 
                className="w-full h-32 object-cover rounded-lg mb-2" 
              />
              <h3 className="text-lg font-semibold text-white">Project 2</h3>
              <p className="text-white">Short description of project 2.</p>
            </motion.div>

            <motion.div 
              className="flex-shrink-0 bg-yellow-500 p-4 rounded-lg shadow-lg dark:bg-yellow-600"
              whileHover={{ scale: 1.05 }} // Optional: scale effect on hover
            >
              <img 
                src="/path/to/image3.jpg" 
                alt="Project 3" 
                className="w-full h-32 object-cover rounded-lg mb-2" 
              />
              <h3 className="text-lg font-semibold text-white">Project 3</h3>
              <p className="text-white">Short description of project 3.</p>
            </motion.div>
          </div>
        </div>

        {/* Next Row of Projects */}
        <div className="flex space-x-4">
          <motion.div 
            className="flex-shrink-0 w-1/3 bg-red-500 p-4 rounded-lg shadow-lg dark:bg-red-600"
            whileHover={{ scale: 1.05 }} // Optional: scale effect on hover
          >
            <img 
              src="/path/to/image4.jpg" 
              alt="Project 4" 
              className="w-full h-32 object-cover rounded-lg mb-2" 
            />
            <h3 className="text-lg font-semibold text-white">Project 4</h3>
            <p className="text-white">Short description of project 4.</p>
          </motion.div>

          <motion.div 
            className="flex-shrink-0 w-1/3 bg-purple-500 p-4 rounded-lg shadow-lg dark:bg-purple-600"
            whileHover={{ scale: 1.05 }} // Optional: scale effect on hover
          >
            <img 
              src="/path/to/image5.jpg" 
              alt="Project 5" 
              className="w-full h-32 object-cover rounded-lg mb-2" 
            />
            <h3 className="text-lg font-semibold text-white">Project 5</h3>
            <p className="text-white">Short description of project 5.</p>
          </motion.div>

          <motion.div 
            className="flex-shrink-0 w-1/3 bg-orange-500 p-4 rounded-lg shadow-lg dark:bg-orange-600"
            whileHover={{ scale: 1.05 }} // Optional: scale effect on hover
          >
            <img 
              src="/path/to/image6.jpg" 
              alt="Project 6" 
              className="w-full h-32 object-cover rounded-lg mb-2" 
            />
            <h3 className="text-lg font-semibold text-white">Project 6</h3>
            <p className="text-white">Short description of project 6.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
