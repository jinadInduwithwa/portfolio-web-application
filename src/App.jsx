import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/technologies';
import ReachMe from './components/ReachMe'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden text-neutral-300 antialiased selection:text-yellow-500">
      <div className="absolute top-0 z-[-2] min-h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <ReachMe/>
      </div>
    </div>
  );
}
