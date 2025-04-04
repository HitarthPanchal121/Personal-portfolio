import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import profilePic from '../assets/profile.png';
import resumePDF from '../assets/Hitarth Panchal Resume.pdf';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
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

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="block mt-2 text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text">
                  Hitarth Panchal
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl">
                A passionate Java Developer crafting innovative digital experiences. 
                Transforming Human ideas and Thoughts to Java and SpringBoot Solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail className="w-4 h-4" />
                  Get in Touch
                </motion.a>
                
                <motion.a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="w-4 h-4" />
                  View Resume
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: <FiGithub />, href: "https://github.com/HitarthPanchal121" },
                  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/hitarth-panchal-1b424524a/" },
                  { icon: <FiMail />, href: "mailto:hitarthpanchal2003@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-xl text-neutral-400 hover:text-white bg-neutral-900/50 rounded-full backdrop-blur-sm transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="relative w-full max-w-md lg:w-1/3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            
            {/* Main image container */}
            <div className="relative">
              {/* Gradient border */}
              <div className="aspect-square rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 backdrop-blur-sm">
                {/* Inner container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-950">
                  {/* Image */}
                  <motion.img
                    src={profilePic}
                    alt="Hitarth Panchal"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Floating Badges */}
              {[
                { text: "Spring Boot", className: "top-0 right-0" },
                { text: "Java", className: "bottom-12 -right-4" },
                { text: "Spring Security", className: "bottom-0 left-12" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${badge.className}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="px-4 py-2 bg-neutral-900/80 backdrop-blur-sm rounded-full text-sm font-medium border border-neutral-800"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {badge.text}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
