import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample project data
const projects = [
  {
    title: 'MingleSpace',
    description: `A social networking platform designed for people to connect, share, and collaborate on various interests.`,
    technologies: 'Spring Boot, React, MySQL, MUI, Framer Motion',
    image: 'src/assets/mingle space.png', // Replace with your image path
    details: [
      'Real-Time Communication Features',
      'Better User Privacy and Control',
      'Modern User Interface and Design',
    ],
  },
  {
    title: 'Hotel Management System',
    description: `Software platform that helps hotel owners and operators manage their business and improve the guest experience.`,
    technologies: 'Java, MySQL, Spring Boot',
    image: 'src/assets/Hotel-Management-System.png', // Replace with your image path
    details: [
      'User authentication and role management.',
      'Booking management and scheduling.',
      'A user-friendly interface for easy navigation.',
    ],
  },
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio website showcasing my skills and projects.',
    technologies: 'React, Framer Motion, MUI',
    image: 'src/assets/portfollio.png', // Replace with your image path
    details: [
      'Showcases my projects, skills, and experience.',
      'Interactive design for user engagement.',
      'Responsive layout for all devices.',
    ],
  },
  // Add more projects here
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null); // State for the selected project
  const [openDropdown, setOpenDropdown] = useState(null); // State for dropdown

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
        {/* Project Title */}
        <motion.h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
          <span className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">Projects</span>
        </motion.h2>

        {/* Project List */}
        <motion.div className="my-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row mb-8 text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-1 mb-4 lg:mb-0 lg:mr-4">
                <h3 className="text-4xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-4">
                  {project.title}
                </h3>
                <p className="text-lg font-light">{project.description}</p>
                <p className="text-lg font-light text-neutral-400">
                  <strong>Technologies:</strong> {project.technologies}
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
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }} // Adjust this background
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="list-disc pl-5 text-neutral-300">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 lg:w-1/3 rounded-lg transform transition-transform duration-300 hover:scale-105" // Image scaling on hover
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <motion.div
              className="bg-neutral-800 p-6 rounded-lg max-w-md mx-auto"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-neutral-300 mb-4">{selectedProject.details.join(', ')}</p>
              <button onClick={handleCloseModal} className="mt-4 text-red-500">
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Project;
