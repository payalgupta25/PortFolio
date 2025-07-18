import React from 'react';

function Navbar() {
  return (
    <div className="w-full px-6 py-12 sm:p-16 md:p-20 bg-black flex flex-col justify-center items-center">
      {/* Title */}
      <div className="z-50 w-full text-center text-white text-3xl sm:text-5xl md:text-7xl font-['Saira_Stencil_One'] mb-8">
        <a href="/">PAYAL GUPTA</a>
        <span className="text-orange-400">!</span>
      </div>

      {/* Social Links */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 mb-8">
        {/* GitHub */}
        <a
          href="https://github.com/payalgupta25"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-2">
            <img className="w-6 h-6 filter invert" src="/github.png" alt="GitHub" />
            <p className="text-white text-base font-[poppins]">Github</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=payalgupta425@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <img className="w-6 h-6 filter invert" src="./email.png" alt="Email" />
            <p className="text-white text-base font-[poppins]">Email</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/payal-gupta-6a681a291/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-2">
            <img className="w-7 h-7 filter invert" src="/linkedin.png" alt="LinkedIn" />
            <p className="text-white text-base font-[poppins]">Linkedin</p>
          </div>
        </a>

        {/* Leetcode */}
        <a
          href="https://leetcode.com/u/payal_gupta25/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <img className="w-6 h-6 filter invert" src="/leetcode.png" alt="Leetcode" />
            <p className="text-white text-base font-[poppins]">Leetcode</p>
          </div>
        </a>
      </div>

      {/* Resume Button */}
      <div className="text-center py-20 flex justify-center">
        <a
          href="https://drive.google.com/file/d/1m4w_niD8TQCHODT13c3UilxkyG9c0BVr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-black filter invert px-7 py-2 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-gray-900 transition hover:invert-0"
        >
          Resume
          <img className='h-5 w-5 ml-2' src="/drive.png" alt="Drive icon" />
        </a>
      </div>

    </div>
  );
}

export default Navbar;
