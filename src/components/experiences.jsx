import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Work Experience Data
const experiences = [
  {
    title: 'Java Developer Intern',
    company: 'Dotsquares Jaipur',
    duration: 'January 2025 - June 2025',
    technologies: 'Spring, Spring Boot, Microservices, MongoDB, SQL, Swing, JSP, Servlets, Spring Security',
    details: [
      'Developed and maintained backend services using Spring Boot and Microservices.',
      'Worked with MongoDB and SQL for database management.',
      'Implemented dynamic UI components using Swing and JSP.',
      'Enhanced security by integrating Spring Security into multiple projects.',
      'Spent 3 months specifically on improving authentication and security measures.',
    ],
  },
];

const Experience = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center text-center lg:items-start lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        <motion.h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
          <span className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
            Work Experience
          </span>
        </motion.h2>

        {/* Experience List */}
        <motion.div className="my-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row mb-8 text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Left Section: Text Content */}
              <div className="flex-1 mb-4 lg:mb-0 lg:mr-4">
                <h3 className="text-4xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-2">
                  {experience.title}
                </h3>
                <p className="text-lg font-light text-neutral-400">
                  {experience.company} ({experience.duration})
                </p>
                <p className="text-lg font-light mt-2">
                  <strong>Technologies:</strong> {experience.technologies}
                </p>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="mt-2 text-lg text-blue-500 underline hover:text-blue-700"
                >
                  Read More
                </button>
                {openDropdown === index && (
                  <motion.div
                    className="mt-2 p-4 rounded-lg"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="list-disc pl-5 text-neutral-300">
                      {experience.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Right Section: Logo Image */}
              <div className="hidden lg:block ml-auto">
                <img
                  src="src\assets\download.jpg" // Replace with the actual path to your logo
                  alt={experience.company}
                  className="w-32 h-32" // Larger size for the logo
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;