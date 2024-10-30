"use client";
import { FaCode, FaLaptopCode, FaChartLine, FaChalkboardTeacher } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      description: "Designing and developing modern, responsive websites.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Content Management",
      description: "Helping you manage content across platforms effortlessly.",
      icon: <FaCode />,
    },
    {
      title: "Web Development and Problem Solving",
      description: "Providing tutorials in Web development and competitive coding.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Web Stack Consultancy",
      description: "Consulting services to optimize web tech for your business.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          My Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are the services I offer to help you and your business grow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                p-6 
                transition-shadow 
                rounded-lg 
                shadow-lg hover:shadow-xl 
                bg-gray-800 text-white 
                dark:bg-white dark:text-gray-900
              "
            >
              <div className="flex items-center justify-center text-blue-600 dark:text-blue-400 text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
