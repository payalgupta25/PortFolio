import React from 'react'

function Marque() {
    const MarqueeRibbon = ({ text, bgColor, textColor, rotateClass, speedClass }) => {
      // Repeat the string to ensure it fills the width and loops seamlessly
      const content = Array(15).fill(`${text}  •  `).join("");

      return (
        <div className={`opacity-70 absolute top-[90%] w-[150%] left-[-25%] overflow-hidden py-0.5 ${bgColor} ${textColor} ${rotateClass} z-10 shadow-2xl border-y border-white/10`}>
          <div className={`${speedClass} flex items-center`}>
            <span className="text-xl sm:text-3xl font-black uppercase tracking-[0.2em] whitespace-nowrap">
              {content}
            </span>
            <span className="text-xl sm:text-3xl font-black uppercase tracking-[0.2em] whitespace-nowrap">
              {content}
            </span>
          </div>
        </div>
      );
    };


    return (
        <div>
            <MarqueeRibbon 
              text="DEVELOPMENT • DESIGN • OPEN SOURCE • UI/UX" 
              bgColor="bg-white" 
              textColor="text-black" 
              rotateClass="rotate-[-5deg] top-[45%]"
              speedClass="animate-marquee"
            />
            
            <MarqueeRibbon 
              text="MERN STACK DEVELOPER • GRAPHIC DESIGNER • ANIMATION" 
              bgColor="bg-[#1a1a1a]" 
              textColor="text-white" 
              rotateClass="rotate-[10deg] top-[50%]"
              speedClass="animate-marquee-reverse"
            />
        </div>
    )
}

export default Marque
