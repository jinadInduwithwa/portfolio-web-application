import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/technologies';
import ReachMe from './components/ReachMe'
import Journey from './components/Journey'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden text-neutral-300 antialiased selection:text-yellow-500">
      
      <div className="w-full px-0">
        <div className="w-full bg-neutral-800 px-10">
          <Navbar />
          <Hero />
        </div>
        <Technologies />
        <ReachMe />
        <Journey />
      </div>
    </div>
  );
}

