import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export default function technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-xl border-4 border-neutral-800 p4'>
                <FaReact className='text-7xl p-2 text-cyan-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p4'>
                <IoLogoNodejs className='text-7xl p-2 text-green-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p4'>
                <FaJava className='text-7xl p-2 text-red-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p4'>
                <FaPython className='text-7xl p-2 text-yellow-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p4'>
                <FaPhp className='text-7xl p-2 text-blue-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p4'>
                <SiMongodb className='text-7xl p-2 text-green-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p4'>
                <SiMysql className='text-7xl p-2 text-blue-400'/>
            </div>
        </div>

    </div>
  )
}
