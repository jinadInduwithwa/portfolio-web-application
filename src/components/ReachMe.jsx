import React from 'react';
import { FaMedium, FaLinkedin, FaGithubSquare, FaYoutube } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function ReachMe() {
  return (
    <div className="py-14 bg-neutral-100">
      <h1 className="mb-10 text-center text-4xl text-neutral-800">How to reach me</h1>

      <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-900">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/jinad-induvidwa-01a733331" target="_blank" rel="noopener noreferrer">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 hover:bg-neutral-800 hover:text-white transition duration-300">
            <FaLinkedin className="text-7xl p-2 group-hover:text-yellow-500 transition duration-300" />
            <p className="text-center opacity-50 group-hover:opacity-100">Jinad Induvidwa</p>
            <p className="text-center font-semibold font-serif">Professional Profile</p>
          </div>
        </a>

        {/* GitHub */}
        <a href="https://github.com/jinadInduwithwa" target="_blank" rel="noopener noreferrer">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 hover:bg-neutral-800 hover:text-white transition duration-300">
            <FaGithubSquare className="text-7xl p-2 group-hover:text-yellow-500 transition duration-300" />
            <p className="text-center opacity-50 group-hover:opacity-100">Jinad Induvidwa</p>
            <p className="text-center font-semibold font-serif">Coding Portfolio</p>
          </div>
        </a>

        {/* Medium */}
        <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 hover:bg-neutral-800 hover:text-white transition duration-300">
            <FaMedium className="text-7xl p-2 group-hover:text-yellow-500 transition duration-300" />
            <p className="text-center opacity-50 group-hover:opacity-100">Jinad Induvidwa</p>
            <p className="text-center font-semibold font-serif">Tech Blogs</p>
          </div>
        </a>

        {/* YouTube */}
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 hover:bg-neutral-800 hover:text-white transition duration-300">
            <FaYoutube className="text-7xl p-2 group-hover:text-yellow-500 transition duration-300" />
            <p className="text-center opacity-50 group-hover:opacity-100">Arch 64</p>
            <p className="text-center font-semibold font-serif">Share knowledge</p>
          </div>
        </a>

        {/* Fiverr */}
        <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 hover:bg-neutral-800 hover:text-white transition duration-300">
            <SiFiverr className="text-7xl p-2 group-hover:text-yellow-500 transition duration-300" />
            <p className="text-center opacity-50 group-hover:opacity-100">Jinad Induvidwa</p>
            <p className="text-center font-semibold font-serif">Hire me</p>
          </div>
        </a>
      </div>
    </div>
  );
}
