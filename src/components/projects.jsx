import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiLayers, FiServer, FiDatabase, FiCode, FiMonitor } from 'react-icons/fi';
import mingleSpaceImg from '../assets/mingle space.png';
import imageImg from '../assets/image.png';
import images2Img from '../assets/images2.jpg';
import hotelManagementImg from '../assets/Hotel-Management-System.png';

const projects = [
  {
    title: 'MingleSpace',
    description: 'A modern social networking platform designed for meaningful connections and seamless collaboration.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'MUI', 'WebSocket'],
    image: mingleSpaceImg,
    category: 'Full Stack',
    details: [
      'Real-Time Communication Features',
      'Better User Privacy and Control',
      'Modern User Interface and Design',
    ],
    links: {
      github: 'https://github.com/HitarthPanchal121/MingleSpace-Frontend',
      // live: 'https://minglespace.demo.com'
    }
  },
  {
    title: 'BoilerPlate',
    description: 'Advanced Spring Security 6 implementation with multi-layered security architecture.',
    technologies: ['Spring Boot 3', 'Spring Security 6', 'JWT', 'MySQL'],
    image: imageImg,
    category: 'Backend',
    details: [
      'Three-layered security with JWT, Custom Session ID, and Refresh Tokens',
      'Secure authentication and authorization system',
      'Token-based session management with auto-refresh',
      'Role-based access control (RBAC)',
      'Protection against common security vulnerabilities',
      'Scalable and maintainable security architecture',
    ],
    links: {
      github: 'https://github.com/HitarthPanchal121/BoilerPlateAuth',
      docs: 'https://docs.boilerplate.com'
    }
  },
  {
    title: 'Dream Shop',
    description: 'A comprehensive microservices-based e-commerce platform with advanced features.',
    technologies: ['Spring Boot', 'Microservices', 'MySQL', 'Redis', 'RabbitMQ'],
    image: images2Img,
    category: 'Microservices',
    details: [
      'Microservices architecture with service discovery',
      'Real-time inventory management system',
      'Secure admin panel for inventory control',
      'Order processing and tracking system',
      'Product catalog with search and filter',
      'Distributed caching with Redis',
      'Message queuing with RabbitMQ',
    ],
    links: {
      github: 'https://github.com/yourusername/dreamshop',
      live: 'https://dreamshop.demo.com'
    }
  },
  {
    title: 'Hotel Management System',
    description: 'Comprehensive software platform for efficient hotel operations management.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
    image: hotelManagementImg,
    category: 'Full Stack',
    details: [
      'User authentication and role management',
      'Booking management and scheduling',
      'A user-friendly interface for easy navigation',
    ],
    links: {
      github: 'https://github.com/HitarthPanchal121/Hotel-Management-System-JAVA-Oops',
      live: 'https://hotel-demo.com'
    }
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: ["-50%", "-45%", "-50%"],
            y: ["-50%", "-55%", "-50%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ left: "50%", top: "50%" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text">Projects</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing innovative solutions and technical expertise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white'
                  : 'bg-neutral-900/50 text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-800 hover:border-purple-500/50 transition-colors"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-neutral-800/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-neutral-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal */}
              <motion.div
                className="fixed inset-4 md:inset-20 z-50 bg-neutral-900/90 backdrop-blur-md rounded-3xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors z-10"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX className="w-6 h-6" />
                </motion.button>

                <div className="h-full overflow-y-auto">
                  <div className="max-w-4xl mx-auto">
                    {/* Project Image */}
                    <div className="relative h-[300px] md:h-[400px]">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6 md:p-8">
                      <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                      <p className="text-neutral-400 mb-8">{selectedProject.description}</p>

                      {/* Project Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Technologies */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <FiCode className="w-5 h-5" />
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm font-medium bg-neutral-800 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <FiLayers className="w-5 h-5" />
                            Key Features
                          </h3>
                          <ul className="space-y-2">
                            {selectedProject.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                className="flex items-center gap-2 text-neutral-400"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <FiMonitor className="w-4 h-4 flex-shrink-0" />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <motion.a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="w-4 h-4" />
                          View Source
                        </motion.a>
                        <motion.a
                          href={selectedProject.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
