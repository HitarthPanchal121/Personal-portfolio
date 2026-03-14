import React from 'react';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiHtml5, SiCss3, SiReact, SiMui, SiFramer, SiJavascript, SiNodedotjs, SiExpress, SiGit, SiTailwindcss } from 'react-icons/si';

const skills = [
  { icon: <FaJava size={40} className="text-yellow-500" />, name: "Java" },
  { icon: <SiSpringboot size={40} className="text-green-600" />, name: "Spring Boot" },
  { icon: <SiMysql size={40} className="text-blue-500" />, name: "MySQL" },
  { icon: <SiMongodb size={40} className="text-green-500" />, name: "MongoDB" },
  { icon: <SiHtml5 size={40} className="text-orange-500" />, name: "HTML" },
  { icon: <SiCss3 size={40} className="text-blue-600" />, name: "CSS" },
  { icon: <SiJavascript size={40} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiReact size={40} className="text-cyan-500" />, name: "React" },
  { icon: <SiMui size={40} className="text-blue-400" />, name: "MUI" },
  { icon: <SiFramer size={40} className="text-purple-500" />, name: "Framer Motion" },
  { icon: <SiNodedotjs size={40} className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress size={40} className="text-neutral-400" />, name: "Express.js" },
  { icon: <SiGit size={40} className="text-red-500" />, name: "Git" },
  { icon: <SiTailwindcss size={40} className="text-cyan-400" />, name: "Tailwind CSS" },
];

const Skills = () => {
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
        Technology Stack
      </motion.h2>
      <motion.p 
        className="text-lg text-neutral-400 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        The tools and technologies I use to bring ideas to life.
      </motion.p>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center impressive-card p-4 rounded-lg group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 + 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <motion.div
              className="mb-2"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-sm font-medium text-neutral-300 group-hover:text-blue-400 transition-colors duration-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
