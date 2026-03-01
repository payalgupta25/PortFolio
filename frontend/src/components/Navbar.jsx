import Particles from "./Particles.jsx";
import React from "react";
import Marque from "./Marque.jsx";
import { ReactTyped } from "react-typed";

export default function Navbar() {
  return (
    <div className="relative w-full min-h-screen bg-[#060606] flex flex-col justify-center items-center overflow-hidden font-['Poppins'] top-[-70px]">

      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
      />
      </div>
      
      {/* MARQUE */}
      <Marque />

      {/* MAIN CONTENT */}
      <div className="absolute z-20 flex flex-col items-center text-center px-6 max-w-5xl">

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-['Saira_Stencil_One'] font-black text-white leading-tight mb-20 tracking-[0.08em]">
          {/* PAYAL GUPTA<span className="text-orange-500">!</span> */}
          <ReactTyped strings={["PAYAL GUPTA<span style='color:orange'>!</span>"]} typeSpeed={300} contentType="html" showCursor={false} />
        </h1>

          {/* SOCIALS */}
          <div className="max-w-xl mx-auto
          flex sm:flex-wrap
          flex-row sm:flex
          gap-4 sm:gap-6
          justify-center items-center
          mb-10
          bg-black/40 backdrop-blur-xl
          px-4 sm:px-6
          py-3
          rounded-2xl sm:rounded-full
          border border-white/20">

  <a href="https://github.com/payalgupta25" target="_blank" rel="noreferrer"
    className="group flex items-center justify-center gap-2">
    <img className="w-5 h-5 invert group-hover:scale-110 transition" src="/github.png"/>
    <p className="hidden sm:block text-white text-xs font-bold uppercase tracking-widest group-hover:text-orange-400">
      Github
    </p>
  </a>

  <a href="https://mail.google.com/mail/?view=cm&to=payalgupta425@gmail.com" target="_blank" rel="noreferrer"
    className="group flex items-center justify-center gap-2">
    <img className="w-5 h-5 invert group-hover:scale-110 transition" src="/email.png"/>
    <p className="hidden sm:block text-white text-xs font-bold uppercase tracking-widest group-hover:text-orange-400">
      Email
    </p>
  </a>

  <a href="https://www.linkedin.com/in/payal-gupta-6a681a291/" target="_blank" rel="noreferrer"
    className="group flex items-center justify-center gap-2">
    <img className="w-5 h-5 invert group-hover:scale-110 transition" src="/linkedin.png"/>
    <p className="hidden sm:block text-white text-xs font-bold uppercase tracking-widest group-hover:text-orange-400">
      Linkedin
    </p>
  </a>

  <a href="https://leetcode.com/u/payal_gupta25/" target="_blank" rel="noreferrer"
    className="group flex items-center justify-center gap-2">
    <img className="w-5 h-5 invert group-hover:scale-110 transition" src="/leetcode.png"/>
    <p className="hidden sm:block text-white text-xs font-bold uppercase tracking-widest group-hover:text-orange-400">
      Leetcode
    </p>
  </a>

</div>

        {/* BUTTON */}
        <a
          href="https://drive.google.com/file/d/1ZRxDG6PzuUFIs_h-EbXFXJzMOINJzqHi/view"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center bg-white text-black px-4 sm:px-5 py-1.5 rounded-full font-bold text-sm sm:text-lg uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          View Resume
          <img className="h-4 w-4 sm:h-5 sm:w-5 ml-3 group-hover:invert" src="/drive.png" />
        </a>

      </div>
      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"></div>
    </div>
  );
}