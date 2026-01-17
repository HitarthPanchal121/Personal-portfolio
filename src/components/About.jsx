import React from 'react';
import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiHtml5, SiCss3, SiReact, SiMui, SiFramer } from 'react-icons/si';

const About = () => {
  const skills = [
    { icon: <FaJava size={60} className="text-yellow-500" />, name: "Java" },
    { icon: <SiSpringboot size={60} className="text-green-600" />, name: "Spring Boot" },
    { icon: <SiMysql size={60} className="text-blue-500" />, name: "MySQL" },
    { icon: <SiMongodb size={60} className="text-green-500" />, name: "MongoDB" },
    { icon: <SiHtml5 size={60} className="text-orange-500" />, name: "HTML" },
    { icon: <SiCss3 size={60} className="text-blue-600" />, name: "CSS" },
    { icon: <SiReact size={60} className="text-cyan-500" />, name: "React" },
    { icon: <SiMui size={60} className="text-blue-400" />, name: "MUI" },
    { icon: <SiFramer size={60} className="text-purple-500" />, name: "Framer Motion" },
  ];

  const glowAnimation = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' }
    }
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-16"
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      exit={{ opacity: 0, y: 50 }} // Exit animation
      transition={{ duration: 0.5 }} // Animation duration
    >
      <motion.div
        className="flex flex-col items-center text-center lg:items-start lg:text-left"
        initial={{ opacity: 0, y: 20 }} // For headings and content
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        transition={{ duration: 0.5, staggerChildren: 0.2 }} // Stagger for children
      >
        {/* About Me Title */}
        <motion.h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
          About<span className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"> Me</span>
        </motion.h2>

        {/* Brief Intro */}
        <motion.p className="text-lg mb-12 font-light tracking-tighter text-neutral-300 leading-relaxed max-w-3xl">
          Hi! I'm <span className="font-semibold text-transparent bg-gradient-to-r from-pink-300 via-purple-500 to-cyan-500 bg-clip-text"> Hitarth Panchal </span>, a passionate and dedicated fresher Java Developer with expertise in full-stack development. I love building efficient and scalable applications using modern web technologies and frameworks.
        </motion.p>

        {/* Education */}
        <motion.div className="my-12">
          <motion.h3 className="text-6xl font-thin tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text mb-4">
            Education
          </motion.h3>

          <motion.p className="mt-4 text-neutral-400">
            <strong className="text-white font-semibold">Bachelor's Degree in Computer Science & Engineering</strong> – JECRC University, <span className="text-cyan-300">2025</span>
          </motion.p>

          <motion.p className="mt-4 text-neutral-400">
            <strong className="text-white font-semibold">12th Grade</strong> – A'S Steward Morris School, <span className="text-cyan-300">2021</span>, Score: <span className="text-pink-300 font-bold">82.21%</span>
          </motion.p>

          <motion.p className="mt-4 text-neutral-400">
            <strong className="text-white font-semibold">10th Grade</strong> – A'S Steward Morris School, <span className="text-cyan-300">2018</span>, Score: <span className="text-pink-300 font-bold">79%</span>
          </motion.p>
        </motion.div>

        {/* Resume Section */}
        <motion.div className="my-12">
          <motion.h3 className="text-6xl font-thin tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text mb-4">
            Resume
          </motion.h3>

          <motion.p className="text-lg text-neutral-300 font-light">
            You can download my resume by clicking the link below:
          </motion.p>

          <motion.a
            href="src/assets/Hitarth Panchal Resume.pdf" // Change this to your actual PDF path
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text underline hover:text-white hover:bg-transparent transition-all duration-300 font-semibold"
          >
            Download My Resume
          </motion.a>
        </motion.div>

        {/* Skills */}
        <motion.div className="my-12">
          <motion.h3 className="text-6xl font-thin tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text mb-8">
            Skills
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="text-center transition-all duration-300"
                initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 0], // Up and down motion
                }} 
                transition={{ 
                  duration: 1, 
                  ease: "easeInOut", 
                  repeat: Infinity, 
                  repeatType: "loop",
                  delay: index * 0.1 
                }}
              >
                {skill.icon}
                <p className="text-lg font-medium text-neutral-300">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;