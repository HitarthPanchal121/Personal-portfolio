import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/profile.png';

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-16 lg:mb-35'>
      <motion.div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            {/* Animate the heading */}
            <motion.h1
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'
            >
              Hitarth Panchal
            </motion.h1>

            {/* Animate the subtitle with gradient text and glowing effect */}
            <motion.span
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent glow-text'
            >
              Full Stack Java Developer
            </motion.span>

            {/* Animate the description */}
            <motion.p
              className=' text-lg my-2 mx-w-xl py-6 font-light tracking-tighter text-neutral-300'
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            {/* Animate the profile picture */}
            <motion.img
              src={profilePic}
              alt="profilepicture"
              className='rounded-full shadow-lg border-4 border-gradient-to-r from-pink-300 via-slate-500 to-purple-500 lg:w-3/4'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;