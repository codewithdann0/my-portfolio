import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

export default function Skills() {
  const skillsList = [
    {
      title: "JavaScript",
      description: "Proficient in ES6, asynchronous programming, and frameworks like React.",
      imageUrl: "/images/javascript.png",
    },
    {
      title: "Python",
      description: "Experienced with data analysis, web development, and automation scripts.",
      imageUrl: "/images/python.png",
    },
    {
      title: "Laravel",
      description: "Knowledgeable in building RESTful APIs and MVC applications.",
      imageUrl: "/images/laravel.png",
    },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => (
            <MotionDiv
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <img
                src={skill.imageUrl}
                alt={skill.title}
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{skill.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
