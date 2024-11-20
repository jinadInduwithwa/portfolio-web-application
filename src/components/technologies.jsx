import React from 'react';
import { FaReact, FaJava, FaPhp, FaPython } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb, SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <div className="pb-24 bg-white text-neutral-800">
      <h1 className="my-20 text-center text-4xl text-neutral-800">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="group flex items-center justify-center rounded-xl border-4 border-neutral-300 bg-neutral-100 p-4 hover:border-cyan-500 transition-all duration-300"
        >
          <FaReact className="text-7xl text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="group flex items-center justify-center rounded-xl border-4 border-neutral-300 bg-neutral-100 p-4 hover:border-green-500 transition-all duration-300"
        >
          <IoLogoNodejs className="text-7xl text-green-500 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>

        {/* Java */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="group flex items-center justify-center rounded-xl border-4 border-neutral-300 bg-neutral-100 p-4 hover:border-red-500 transition-all duration-300"
        >
          <FaJava className="text-7xl text-red-500 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="group flex items-center justify-center rounded-xl border-4 border-neutral-300 bg-neutral-100 p-4 hover:border-yellow-500 transition-all duration-300"
        >
          <FaPython className="text-7xl text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>

        {/* PHP */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="group flex items-center justify-center rounded-xl border-4 border-neutral-300 bg-neutral-100 p-4 hover:border-blue-500 transition-all duration-300"
        >
          <FaPhp className="text-7xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="group flex items-center justify-center rounded-xl border-4 border-neutral-300 bg-neutral-100 p-4 hover:border-green-600 transition-all duration-300"
        >
          <SiMongodb className="text-7xl text-green-600 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="group flex items-center justify-center rounded-xl border-4 border-neutral-300 bg-neutral-100 p-4 hover:border-blue-500 transition-all duration-300"
        >
          <SiMysql className="text-7xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
      </div>
    </div>
  );
}
