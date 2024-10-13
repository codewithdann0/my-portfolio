// app/components/SkillCard.tsx
"use client"; // This line ensures that the component is treated as a client component

import { motion } from "framer-motion";

// Define the interface for the skill type
interface Skill {
  title: string;
  description: string;
  imageUrl: string;
}

interface SkillCardProps {
  skill: Skill; // Use the Skill type for the skill prop
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, translateX: -50 }} // Start off-screen to the left
      animate={{ opacity: 1, translateX: 0 }} // Move to its original position
      transition={{ duration: 1, delay: index * 0.2 }} // Adjust duration for longer animation
      viewport={{ once: false }}
    >
      <img
        src={skill.imageUrl}
        alt={skill.title}
        className="w-16 h-16 mb-4 mx-auto"
      />
      <h3 className="text-xl font-semibold">{skill.title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{skill.description}</p>
    </motion.div>
  );
};

export default SkillCard;
