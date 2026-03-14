import React from 'react';
import { motion } from 'framer-motion';

// Work Experience Data
const experiences = [
  {
    title: 'Java Developer Intern',
    company: 'Dotsquares Jaipur',
    duration: 'January 2025 - June 2025',
    location: 'Jaipur, India',
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
        Work Experience
      </motion.h2>
      <motion.p 
        className="text-lg text-neutral-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        A track record of driving innovation and results through software.
      </motion.p>

      {/* Experience List */}
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="impressive-card p-6 rounded-lg mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-semibold mb-2 impressive-gradient">{experience.company}</h3>
          <p className="text-xl font-light mb-4">{experience.title}</p>
          <p className="text-lg text-neutral-400 mb-4">{experience.duration} • {experience.location}</p>
          <h4 className="text-2xl font-semibold mb-4">Key Contributions</h4>
          <ul className="list-disc pl-5 space-y-2">
            {experience.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;