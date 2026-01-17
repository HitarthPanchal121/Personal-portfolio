import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const glowAnimation = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' }
    }
  };

  return (
    <motion.div
      className="border-t border-neutral-900 pt-16 pb-24 text-center"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.h2 
        className="pb-8 text-6xl font-thin tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span 
          {...glowAnimation}
          className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
        >
          Contact
        </motion.span> 
        <motion.span 
          {...glowAnimation}
          className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
        >
          Me
        </motion.span>
      </motion.h2>

      <motion.p 
        className="text-lg mb-12 font-light tracking-tighter text-neutral-300 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Feel free to reach out via the following platforms:
      </motion.p>

      <motion.ul 
        className="list-none text-lg text-neutral-300 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <li><strong>Email:</strong> hitarth9950@gmail.com</li>
        <li><strong>Phone:</strong> +91 7426879669</li>
      </motion.ul>
    </motion.div>
  );
}

export default Contact;
