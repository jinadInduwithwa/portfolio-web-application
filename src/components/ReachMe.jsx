import React from 'react';
import { FaMedium, FaLinkedin, FaGithubSquare , FaYoutube  } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function ReachMe() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">How to reach me</h1>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <a href="www.linkedin.com/in/jinad-induvidwa-01a733331" target="_blank">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 ">
            <FaLinkedin className="text-7xl p-2 text-white" />
            <p className="text-center opacity-50">Jinad Induvidwa</p>
            <p className="text-center font-semibold font-serif">Professional Profile</p>
          </div>
        </a>

        <a href="https://github.com/jinadInduwithwa" target="blank">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 ">
            <FaGithubSquare  className="text-7xl p-2 text-white" />
            <p className="text-center opacity-50">Jinad Induvidwa</p>
            <p className="text-center font-semibold font-serif">Coding Portfolio</p>
          </div>
        </a>

        <a href="www.linkedin.com/in/jinad-induvidwa-01a733331" target="blank">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 ">
            <FaMedium className="text-7xl p-2 text-white" />
            <p className="text-center opacity-50">Jinad Induvidwa</p>
            <p className="text-center font-semibold font-serif">Tech Blogs</p>
          </div>
        </a>

        <a href="www.linkedin.com/in/jinad-induvidwa-01a733331" target="blank">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 ">
            <FaYoutube  className="text-7xl p-2 text-white" />
            <p className="text-center opacity-50">Arch 64</p>
            <p className="text-center font-semibold font-serif">Share knowledge</p>
          </div>
        </a>

        <a href="www.linkedin.com/in/jinad-induvidwa-01a733331" target="blank">
          <div className="group flex flex-col items-center justify-center w-60 h-60 rounded-xl border-4 border-neutral-800 ">
            <SiFiverr className="text-7xl p-2 text-white" />
            <p className="text-center opacity-50">Jinad Induvidwa</p>
            <p className="text-center font-semibold font-serif">Hire me</p>
          </div>
        </a>

       
      </div>
    </div>
  );
}
