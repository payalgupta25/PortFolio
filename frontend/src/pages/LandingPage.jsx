// import { useEffect, useRef } from "react";
// import Typed from "typed.js";
// import TiltedCard from "../components/TitledCard.jsx";

// export default function LandingPage() {
//   const typingRef = useRef(null);

//   useEffect(() => {
//     if (typingRef.current) {
//       const typed = new Typed(typingRef.current, {
//         strings: ["Web Developer", "Designer", "Talented Coder"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true,
//       });
//       return () => typed.destroy();
//     }
//   }, []);

//   return (
//     <div className="bg-black min-h-screen flex items-center justify-center px-4 py-10">
//       <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-3 md:gap-30">
        
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 text-white text-center md:text-left flex flex-col items-center md:items-start gap-4">
//           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
//             Hello, <span>👋🏼</span>
//           </h1>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
//             This is{" "}
//             <span className="text-orange-400 text-3xl sm:text-4xl lg:text-6xl font-['Saira_Stencil_One']">
//               PAYAL GUPTA!
//             </span>
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[Poppins] mt-2">
//             I am a{" "}
//             <span
//               ref={typingRef}
//               className="text-[#ffc3a0b6] font-bold"
//             ></span>
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-4 pt-4">
//             <a href="https://github.com/payalgupta25" target="_blank" rel="noreferrer">
//               <img className="h-8 md:h-10 filter invert" src="/github.png" alt="GitHub" />
//             </a>
//             <a href="https://www.linkedin.com/in/payal-gupta-6a681a291/" target="_blank" rel="noreferrer">
//               <img className="h-8 md:h-10 filter invert" src="/linkedin.png" alt="LinkedIn" />
//             </a>
//             <a href="https://leetcode.com/u/payal_gupta25/" target="_blank" rel="noreferrer">
//               <img className="h-8 md:h-10 filter invert" src="/leetcode.png" alt="LeetCode" />
//             </a>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-6">
//             <a
//               href="https://mail.google.com/mail/?view=cm&to=payalgupta425@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="rounded-lg px-4 py-2 font-semibold text-lg text-white border border-orange-400 hover:bg-transparent hover:scale-105 transition duration-200 text-center"
//             >
//               Get in Touch
//             </a>
//             <a
//               href="https://drive.google.com/file/d/1m4w_niD8TQCHODT13c3UilxkyG9c0BVr/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border border-white px-4 py-2 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition text-center"
//             >
//               Resume
//             </a>
//           </div>
//         </div>

//         {/* Right Section - Image */}
//         <div className="w-full md:w-auto flex justify-center">
//           <TiltedCard
//             imageSrc="./payal.png"
//             altText="Payal Gupta"
//             captionText="Payal Gupta"
//             containerHeight="300px"
//             containerWidth="300px"
//             imageHeight="300px"
//             imageWidth="300px"
//             rotateAmplitude={12}
//             scaleOnHover={1.2}
//             showMobileWarning={false}
//             showTooltip={true}
//             displayOverlayContent={true}
//             overlayContent={
//               <p className="flex tilted-card-demo-text text-4xl text-center p-5 font-[stencil] text-white">
//                 Payal Gupta
//               </p>
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import TiltedCard from "../components/TitledCard.jsx";

export default function LandingPage() {
  const typingRef = useRef(null);

  useEffect(() => {
    if (typingRef.current) {
      const typed = new Typed(typingRef.current, {
        strings: ["Web Developer", "Designer", "Talented Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-y-10 lg:gap-x-20">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Hello, <span role="img" aria-label="wave">👋🏼</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            This is{" "}
            <span className="text-orange-400 text-4xl sm:text-5xl md:text-6xl font-['Saira_Stencil_One']">
              PAYAL GUPTA!
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-[Poppins] mt-2">
            I am a{" "}
            <span
              ref={typingRef}
              className="text-[#ffc3a0b6] font-bold"
            ></span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4 justify-center lg:justify-start">
            <a href="https://github.com/payalgupta25" target="_blank" rel="noreferrer">
              <img className="h-8 md:h-10 filter invert" src="/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/payal-gupta-6a681a291/" target="_blank" rel="noreferrer">
              <img className="h-8 md:h-10 filter invert" src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://leetcode.com/u/payal_gupta25/" target="_blank" rel="noreferrer">
              <img className="h-8 md:h-10 filter invert" src="/leetcode.png" alt="LeetCode" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto justify-center lg:justify-start">
            <a
              href="https://mail.google.com/mail/?view=cm&to=payalgupta425@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-2 font-semibold text-lg text-white border border-orange-400 hover:bg-transparent hover:scale-105 transition duration-200 text-center w-full sm:w-auto"
            >
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1m4w_niD8TQCHODT13c3UilxkyG9c0BVr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-4 py-2 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition text-center w-full sm:w-auto"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full flex justify-center lg:w-auto">
          <TiltedCard
            imageSrc="./payal.png"
            altText="Payal Gupta"
            captionText="Payal Gupta"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="flex text-4xl text-center p-5 font-[stencil] text-white">
                Payal Gupta
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}
