import React from 'react'
import { JOURNEY } from '../constants/profile-constants'
import sliit from '../assets/sliit.jpg'
import vta from '../assets/vta.jpeg'
import ijse from '../assets/ijse.png'

export default function Journey() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className="my-20 text-center text-4xl">Journey</h1>
      <div className="px-4 sm:px-8 md:px-16">
        {/* First Section */}
        <div className='mb-12 flex flex-wrap lg:justify-between'>
          <div className='w-full lg:w-1/3 mb-4 lg:mb-0'>
            <img 
              src={sliit} 
              alt="sliit" 
              className='w-40 h-40 rounded-full border-4 border-neutral-900 mx-auto' 
            />
          </div>
          <div className='w-full lg:w-2/3'>
            <h3 className='mb-2 font-semibold text-xl'>{JOURNEY[0].year}</h3>
            <h4 className='mb-2 font-semibold text-xl'>{JOURNEY[0].institute}</h4>
            <p className='mb-2'>{JOURNEY[0].description}</p>
          </div>
        </div>

        {/* Second Section */}
        <div className='mb-12 flex flex-wrap lg:justify-between'>
          <div className='w-full lg:w-1/3 mb-4 lg:mb-0'>
            <img 
              src={vta} 
              alt="vta" 
              className='w-40 h-40 rounded-full border-4 border-neutral-900 mx-auto' 
            />
          </div>
          <div className='w-full lg:w-2/3'>
            <h3 className='mb-2 font-semibold text-xl'>{JOURNEY[1].year}</h3>
            <h4 className='mb-2 font-semibold text-xl'>{JOURNEY[1].institute}</h4>
            <p className='mb-2'>{JOURNEY[1].description}</p>
          </div>
        </div>

        {/* Third Section */}
        <div className='mb-12 flex flex-wrap lg:justify-between'>
          <div className='w-full lg:w-1/3 mb-4 lg:mb-0'>
            <img 
              src={ijse} 
              alt="ijse" 
              className='w-40 h-40 rounded-full border-4 border-neutral-900 mx-auto' 
            />
          </div>
          <div className='w-full lg:w-2/3'>
            <h3 className='mb-2 font-semibold text-xl'>{JOURNEY[2].year}</h3>
            <h4 className='mb-2 font-semibold text-xl'>{JOURNEY[2].institute}</h4>
            <p className='mb-2'>{JOURNEY[2].description}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
