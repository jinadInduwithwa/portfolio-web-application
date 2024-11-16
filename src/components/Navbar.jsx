import React from 'react'
import logo from '../assets/logo only-min.png'
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className='bg-transparent mb-10 flex item-center justify-between py-2'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" className='mx-2 w-12'/>
      </div>
      <div className='m-4 flex items-center justify-center text-xl gap-4'>
        <p className='text-white'>Join with </p>
        <a href="https://discord.gg/kjGPYhywSA" target='blank'><FaDiscord className='text-3xl text-white hover:text-yellow-400'/></a>
      </div>

    </nav>
  )
}
