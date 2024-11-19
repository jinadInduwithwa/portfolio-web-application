import React from 'react';
import { HERO_CONTENT } from '../constants/profile-constants';
import logo from '../assets/logo with name.jpg';

export default function Hero() {
  return (
    <div className='border-b border-neutral-900 px-4 py-12 lg:mb-16'>
      <div className='flex flex-wrap items-center lg:flex-nowrap'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 px-4'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-5xl font-light tracking-tighter lg:text-7xl'>Jinad Induvidwa</h1>
            <span className='mt-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-2xl font-medium tracking-tight text-transparent'>
              Full Stack Developer | Graphic Designer
            </span>
            <p className='my-6 max-w-lg text-center font-light tracking-tighter lg:text-left'>
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end px-4'>
          <img 
            src={logo} 
            alt="profile" 
            className='max-w-xs lg:max-w-md rounded-md shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}
