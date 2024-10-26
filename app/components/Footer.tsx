"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-10"
      initial={{ opacity: 0, y: 50 }} // Entrance animation
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} // Exit animation
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4">
        {/* About Section */}
        <motion.div 
          className="mb-4 md:mb-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h3 className="text-xl font-bold mb-2" id="contact">About Me</h3>
          <p className="text-gray-300">
            Crafting sleek, scalable applications with a passion for web development and continuous learning.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div 
          className="mb-4 md:mb-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Projects", "Blog", "Contact"].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#3b82f6" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <a href={`#${link.toLowerCase()}`} className="hover:underline text-gray-300">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">Connect with Me</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-white">
            {[
              { icon: FaGithub, link: "https://github.com/DanielTigistu" },
              { icon: FaLinkedin, link: "https://linkedin.com/in/DanielTigistu" },
              { icon: FaYoutube, link: "https://youtube.com/TechWithDann" },
            ].map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition duration-300"
                whileHover={{ scale: 1.2, rotate: 20 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <motion.p
        className="mt-8 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        © {new Date().getFullYear()} Daniel Tigistu. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}
