import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/profile.png';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "I'm a Full Stack Developer.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText.charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text, fullText]);

  return (
    <motion.div 
      className='border-b border-neutral-900 pb-16 lg:mb-35 min-h-screen flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
        <motion.h1 
          className='text-6xl lg:text-8xl font-bold mb-6'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm <span className='impressive-gradient'>Hitarth Panchal</span>
        </motion.h1>
        <motion.h2 
          className='text-4xl lg:text-6xl font-light mb-6 h-20'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="ml-1"
          >
            |
          </motion.span>
        </motion.h2>
        <motion.p 
          className='my-6 max-w-3xl py-6 font-light tracking-tighter text-neutral-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {HERO_CONTENT}
        </motion.p>
        <motion.div
          className='flex gap-4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className='px-8 py-4 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
          <motion.a
            href="src/assets/Hitarth Panchal Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='px-8 py-4 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;