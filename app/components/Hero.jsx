"use client"; 
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLaptopCode, FaArrowRight, FaYoutube, FaGithub, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } }
};

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen px-6 bg-gray-100 dark:bg-gray-900 text-center relative">
      <div className="flex flex-row items-center justify-center gap-8">
        {/* Full-Stack Developer Text - Left */}
        <motion.div
          className="flex flex-col items-start gap-4 text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
        >
          <FaLaptopCode className="text-green-500 text-6xl lg:text-8xl" />
          <motion.div className="text-6xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight whitespace-nowrap">
            <Typewriter
              options={{
                strings: ["Full-Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Content Creator Text with YouTube Icon - Above Right */}
        <motion.div
          className="flex flex-col items-start text-left"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
        >
          <motion.div className="flex items-center gap-2">
            <Link href="https://youtube.com" target="_blank">
              <FaYoutube className="text-red-600 text-6xl lg:text-8xl" />
            </Link>
            <span className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white">
              Content Creator
            </span>
          </motion.div>
          <motion.div className="flex items-center gap-2 mt-2">
            <FaArrowRight className="text-gray-800 dark:text-white text-2xl transform rotate-90" />
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400"
            >
              When I'm not coding, I'm probably creating content, honing my skills, and dreaming big. Let's build something amazing together!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Media Links at the Bottom Center */}
      <div className="absolute bottom-8 flex gap-4 flex-wrap justify-center">
        {[
          { name: "GitHub", url: "https://github.com", icon: <FaGithub /> },
          { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
          { name: "YouTube", url: "https://youtube.com", icon: <FaYoutube /> },
          { name: "TikTok", url: "https://tiktok.com", icon: <FaTiktok /> },
          { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm transform transition-transform hover:scale-110"
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
