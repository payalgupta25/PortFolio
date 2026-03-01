// import React from "react";
// import Threads from "./Threads";
// import ScrollVelocity from "./ScrollVelocity";
// import SpotlightCard from "./SpotlightCard";
// import TiltedCard from "./TitledCard.jsx";

// export default function About() {
//   return (
//     <div id="about" className="bg-black">
//       <ScrollVelocity
//         texts={["About", "Know me more!"]}
//         velocity={40}
//         className="custom-scroll-text text-amber-50"
//       />

//       <div className="p-4 sm:p-8 md:p-16 flex flex-col-reverse md:flex-row items-center justify-around gap-10">
//         {/* Left Section - Text */}
//         <SpotlightCard
//           className="w-full md:w-3/5"
//           spotlightColor="rgba(255, 255, 255, 0.25)"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white py-2 px-3 text-center font-['Saira_Stencil_One']">
//             About
//           </h1>
//           <div className="text-white flex flex-col items-center justify-center px-4 sm:px-6 py-8">
//             <h2 className="text-xl sm:text-2xl font-[poppins] p-3 underline text-center">
//               Let’s Build Something Great Together
//             </h2>
//             <p className="text-base sm:text-lg md:text-lg font-[poppins] text-center">
//             Hey, I’m Payal Gupta — a passionate developer, open-source enthusiast, and designer who loves transforming ideas into intuitive, beautiful, and impactful solutions. Whether it's innovative hackathon builds or thoughtful personal projects, I believe in creating with purpose. Every line of code and every design decision reflects my dedication to making things that truly matter.
//             <br />
//             <br />
//             Currently, I’m pursuing my B.Tech in Computer Science and Engineering from Maharaja Surajmal Institute of Technology, where I’m constantly learning, building, and pushing the boundaries of what technology can do.
//             </p>
//           </div>
//         </SpotlightCard>

//         {/* Right Section - Image */}
//         <div className="w-full md:w-auto flex justify-center">
//           <TiltedCard
//             imageSrc="/payal.png"
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

//       {/* Threads animation below */}
//       <div className="w-full h-[300px] sm:h-[400px] relative p-0 m-0">
//         <Threads
//           amplitude={2}
//           distance={0}
//           speed={0.5}
//           enableMouseInteraction={true}
//         />
//       </div>
//     </div>
//   );
// }import React from "react";
import {
  Code2,
  Cpu,
  Laptop,
  Sparkles,
  Database,
  Globe,
} from "lucide-react";

export default function About() {

  const icons = [
    { Icon: Code2, top: "10%", left: "8%" },
    { Icon: Cpu, top: "20%", right: "10%" },
    { Icon: Laptop, bottom: "15%", left: "12%" },
    { Icon: Database, bottom: "18%", right: "10%" },
    { Icon: Globe, top: "55%", left: "5%" },
    { Icon: Sparkles, top: "60%", right: "5%" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-24 overflow-hidden"
    >

      {/* FLOATING BACKGROUND ICONS */}
      {icons.map(({ Icon, ...pos }, i) => (
        <div
          key={i}
          className="absolute opacity-20 animate-float hidden md:block"
          style={pos}
        >
          <Icon size={50} />
        </div>
      ))}

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SIDE */}
        <div className="flex justify-center relative">

          {/* glow */}
          <div className="absolute w-[300px] h-[380px] bg-orange-500/20 blur-3xl rounded-full"></div>

          <div className="relative bg-neutral-900/60 backdrop-blur-xl 
          border border-white/10 rounded-2xl p-4 shadow-2xl">

            <img
              src="/payal.png"
              alt="Payal Gupta"
              className="w-[260px] md:w-[320px] h-[340px] md:h-[420px]
              object-cover rounded-xl grayscale hover:grayscale-0 transition duration-500"
            />

            <p className="text-center mt-4 text-xl tracking-wider uppercase font-semibold font-['Saira_Stencil_One']">
              Payal Gupta
            </p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Saira_Stencil_One']">
            About Me
          </h1>

          <div className="w-24 h-[3px] bg-orange-400 mb-8"></div>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Hey, I’m <span className="text-white font-semibold">Payal Gupta</span>,
            a passionate developer, open-source contributor, and designer
            who loves transforming ideas into intuitive digital experiences.
            <br /><br />

            From hackathons to real-world projects, I enjoy building
            scalable and meaningful solutions that combine creativity
            with technology.
            <br /><br />

            Currently pursuing B.Tech in Computer Science while constantly
            exploring modern web technologies, animation, and system design.
          </p>

          {/* SKILL TAGS */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Full Stack Developer", "Graphic Designer", "Open Source Contributor"].map(skill => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full hover:bg-orange-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}