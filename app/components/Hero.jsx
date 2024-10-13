"use client"; 
import { motion } from "framer-motion";
import { FaYoutube, FaLaptopCode } from "react-icons/fa";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut"
  }
};

const shakeTransition = {
  rotate: {
    duration: 0.2,
    yoyo: Infinity,
    ease: "easeInOut",
    from: -10,
    to: 10
  }
};

export default function Hero() {  
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center relative">

      {/* Full-Stack Developer Icon with Title */}
      <motion.div
        className="absolute"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={{ left: "15%" }}
      >
        <FaLaptopCode className="text-green-500 text-6xl" />
        <motion.p
          className="text-xl font-semibold text-gray-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 3 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        >
          Full-Stack Developer
        </motion.p>
      </motion.div>

      <div className="relative max-w-2xl text-center">
        <motion.img
          src="/img.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full mx-auto mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 2 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm Daniel Tigistu
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6">
          I'm a passionate software developer with experience in building web applications.
        </p>
        
        {/* Download Resume Button with Bounce and Rotate Effect */}
        <motion.a
          href="../public/resume.pdf"
          className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
          whileHover={{
            scale: [1, 1.5, 1.2],
            rotate: [0, 10, -10, 0]
          }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Content Creator Icon with Title */}
      <motion.div
        className="absolute"
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={{ right: "15%" }}
      >
        <FaYoutube className="text-red-600 text-6xl" />
        <motion.p
          className="text-xl font-semibold text-gray-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Content Creator
        </motion.p>
      </motion.div>
    </section>
  );
}
