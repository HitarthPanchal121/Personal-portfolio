import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
        About Me
      </motion.h2>
      <motion.p 
        className="my-6 max-w-3xl py-6 font-light tracking-tighter text-neutral-300 impressive-card p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        I'm a passionate and dedicated Full Stack Developer with expertise in building modern web applications from the ground up. I turn ideas into fast, scalable, and production-ready products — handling everything from frontend design to backend architecture and deployment. I enjoy solving complex problems, improving performance, and creating systems that are clean, reliable, and built to last.
      </motion.p>
    </motion.div>
  );
};

export default About;