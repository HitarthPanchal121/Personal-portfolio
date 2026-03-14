import React from 'react';
import { motion } from 'framer-motion';

// Sample project data
const projects = [
  {
    title: 'MingleSpace',
    description: `A social networking platform designed for people to connect, share, and collaborate on various interests.`,
    technologies: 'Spring Boot, React, MySQL, MUI, Framer Motion',
    image: 'src/assets/mingle space.png',
    link: 'https://github.com/yourusername/minglespace',
  },
  {
    title: 'Hotel Management System',
    description: `Software platform that helps hotel owners and operators manage their business and improve the guest experience.`,
    technologies: 'Java, MySQL, Spring Boot',
    image: 'src/assets/Hotel-Management-System.png',
    link: 'https://github.com/yourusername/hotel-management',
  },
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio website showcasing my skills and projects.',
    technologies: 'React, Framer Motion, MUI',
    image: 'src/assets/portfollio.png',
    link: 'https://github.com/yourusername/portfolio',
  },
];

const Project = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <motion.p 
        className="text-lg text-neutral-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        A selection of my recent work in building modern web applications.
      </motion.p>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="impressive-card rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 impressive-gradient">{project.title}</h3>
              <p className="text-neutral-400 mb-4">{project.technologies}</p>
              <p className="text-neutral-300 mb-4">{project.description}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Project →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
