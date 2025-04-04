import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiBook, FiAward, FiBriefcase, FiCode } from 'react-icons/fi';

const About = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'MySQL', level: 85 },   
    { name: 'HTML/CSS', level: 85 },
    { name: 'Git', level: 80 },
    { name: 'REST APIs', level: 85 },
    { name: 'React.js', level: 60 },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'JECRC UNIVERSITY',
      year: '2021-2025',
      grade: 'CGPA: 8.5/10',
      details: [
        'Core coursework in Data Structures, Algorithms, and Software Engineering',
        'Active participation in technical and cultural events',
        'Participated in various hackathons and coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: "A's Steward Morris School",
      year: '2020-2021',
      grade: 'Percentage: 80%',
      details: [
        'Science Stream with Computer Science',
        'Active participation in technical and cultural events'
      ]
    }
  ];

  const experience = [
    {
      role: 'Java Developer Intern',
      company: 'DotSquares',
      duration: 'Jan 2025 - Present',
      details: [
        'Working with Spring Boot and MySQL and Spring Security',
        'Implementing secure authentication and authorization systems',
        'Working with microservices architecture and REST APIs',
        'Collaborating with team members using Git and Agile methodologies'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.9,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: level => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.div
      className="min-h-screen py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 className="text-6xl font-thin mb-4">
            About <span className="text-transparent bg-gradient-to-r from-pink-300 via-purple-500 to-cyan-500 bg-clip-text">Me</span>
          </motion.h2>
          <motion.p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            A passionate Full Stack Developer with a love for creating elegant solutions to complex problems.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Skills */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiCode className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-300">{skill.name}</span>
                      <span className="text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                        variants={skillBarVariants}
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl font-semibold text-white"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Middle Column - Education */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiBook className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text">
                  Education
                </h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    className="relative pl-6 pb-8 last:pb-0"
                    variants={itemVariants}
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                    <div className="absolute left-[3px] top-4 w-[2px] h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                    <h4 className="text-lg font-medium text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-400 mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-neutral-400 mb-2">
                      <span>{edu.year}</span>
                      <span>{edu.grade}</span>
                    </div>
                    <ul className="space-y-1">
                      {edu.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="text-sm text-neutral-300 flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <span className="w-1 h-1 bg-purple-500 rounded-full" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiBriefcase className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text">
                  Experience
                </h3>
              </div>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.role}
                    className="relative pl-6"
                    variants={itemVariants}
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                    <div className="absolute left-[3px] top-4 w-[2px] h-full bg-gradient-to-b from-pink-500/50 to-transparent" />
                    <h4 className="text-lg font-medium text-white mb-1">{exp.role}</h4>
                    <p className="text-pink-400 mb-1">{exp.company}</p>
                    <p className="text-sm text-neutral-400 mb-3">{exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="text-sm text-neutral-300 flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <span className="w-1 h-1 bg-pink-500 rounded-full" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              className="mt-6 bg-neutral-900/80 backdrop-blur-xl rounded-2xl p-8 border border-neutral-800"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiAward className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text">
                  Achievements
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Runner-up in University Hackathon 2023',
                  'Completed Java Certification with Udemy',
                  'Active contributor to open-source projects'
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-neutral-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
