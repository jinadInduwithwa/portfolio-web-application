import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { animate, motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial:{ y:-10},
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

export default function technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-xl border-4 border-neutral-800 p4'>
                <FaReact className='text-7xl p-2 text-cyan-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" className='rounded-xl border-4 border-neutral-800 p4'>
                <IoLogoNodejs className='text-7xl p-2 text-green-400'/>
            </motion.div >


            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className='rounded-xl border-4 border-neutral-800 p4'>
                <FaJava className='text-7xl p-2 text-red-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
             className='rounded-xl border-4 border-neutral-800 p4'>
                <FaPython className='text-7xl p-2 text-yellow-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
             className='rounded-xl border-4 border-neutral-800 p4'>
                <FaPhp className='text-7xl p-2 text-blue-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
             className='rounded-xl border-4 border-neutral-800 p4'>
                <SiMongodb className='text-7xl p-2 text-green-400'/>
            </motion.div >

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
             className='rounded-xl border-4 border-neutral-800 p4'>
                <SiMysql className='text-7xl p-2 text-blue-400'/>
            </motion.div >
        </div>

    </div>
  )
}
