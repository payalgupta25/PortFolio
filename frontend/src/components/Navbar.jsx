import React from 'react'

function Navbar() {
    return (
        <div className=' bg-[#303030] z-1000 w-full h-20 text-white flex justify-between items-center px-5 text-2xl font-["Saira_Stencil_One"] sticky top-0 shadow-bottom shadow-white'>
            <div className='flex items-center'>
                <a href="/">PAYAL GUPTA</a><span className='text-orange-400'>!</span>
            </div>
            <div className='flex items-center space-x-5 font-["Saira_Stencil_One"] max-sm:hidden '>
                <a href="" className='hover:text-orange-400 transition-colors'>Home</a>
                <a href="#about" className='hover:text-orange-400 transition-colors'>About</a>
                <a href="#" className='hover:text-orange-400 transition-colors'>Projects</a>
                <a href="#" className='hover:text-orange-400 transition-colors'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar
