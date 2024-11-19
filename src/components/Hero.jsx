import React from 'react';
import { HERO_CONTENT } from '../constants/profile-constants';
import logo from '../assets/logo with name.jpg';
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

export default function Hero() {
  return (
    <div className='border-b border-neutral-900 px-4 py-12 lg:mb-16'>
      <div className='flex flex-wrap items-center lg:flex-nowrap'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 px-4'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className='text-5xl font-light tracking-tighter lg:text-7xl'
            >
              Jinad Induvidwa
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='mt-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-2xl font-medium tracking-tight text-transparent'>
              Full Stack Developer | Graphic Designer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-6 max-w-lg text-center font-light tracking-tighter lg:text-left'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end px-4'>
          <motion.img 
          initial={{x:100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1, delay:1.2}}
            src={logo} 
            alt="profile" 
            className='max-w-xs lg:max-w-md rounded-md shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}
