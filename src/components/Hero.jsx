import React from 'react'
import {HERO_CONTENT} from '../constants/profile-constants'
import logo from '../assets/logo with name.jpg'

export default function Hero() {
  return (
    <div className='border-b border-neutral-900 pd-4 lg:mb-35'>
        <div className='flex flex-wrap '>
            <div className='w-full lg:w-1/2'>
              <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-10 text-5xl font-thin tracking-tighter lg:mt-16 lg:text-7xl'>Jinad Induvidwa</h1>
                <span className='bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-3xl bg-clip-text tracking-tight text-transparent'>Full Stack Developer</span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
              </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8 '>
             <div className='flex justify-center w-2/3 ml-20'>
                <img src={logo} alt="profile"  />

             </div>
            
            </div>
        </div>

    </div>
  )
}
