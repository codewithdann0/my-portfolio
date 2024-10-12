export default function Projects() {
  const projectList = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      link: "https://github.com/yourusername/project-one",
      imageUrl: "/images/project-one.png", // Add the path to your image
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      link: "https://github.com/yourusername/project-two",
      imageUrl: "/images/project-two.png", // Add the path to your image
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      link: "https://github.com/yourusername/project-three",
      imageUrl: "/images/project-three.png", // Add the path to your image
    },
    {
      title: "Project Four",
      description: "A brief description of Project Four.",
      link: "https://github.com/yourusername/project-four",
      imageUrl: "/images/project-four.png", // Add the path to your image
    },
    {
      title: "Project Five",
      description: "A brief description of Project Five.",
      link: "https://github.com/yourusername/project-five",
      imageUrl: "/images/project-five.png", // Add the path to your image
    },
    {
      title: "Project Six",
      description: "A brief description of Project Six.",
      link: "https://github.com/yourusername/project-six",
      imageUrl: "/images/project-six.png", // Add the path to your image
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg w-80 dark:bg-gray-800">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline dark:text-blue-400"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
