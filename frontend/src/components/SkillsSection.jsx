// import React, { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const SkillsSection = () => {
//   const [selected, setSelected] = useState("Skills");
//   const wheelRef = useRef(null);
//   const outerImagesRef = useRef([]);
//   const innerImagesRef = useRef([]);

//   const outerSources = [
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
//     "https://cdn-icons-png.flaticon.com/512/919/919825.png",
//     "https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.13.0/1743770490090/Microsoft.VisualStudio.Services.Icons.Default",
//     "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
//     "https://img.icons8.com/fluent/512/css3.png",
//     "https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg",
//     "https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png",
//     "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
//     "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256",
//   ];

//   const Outername =[
//     "React",
//     "Node.js",
//     "MongoDB",
//     "Express",
//     "HTML",
//     "CSS",
//     "Java",
//     "TypeScript",
//     "JavaScript",
//     "Postman",
//   ]

//   const innerSources = [
//     "https://cdn.freelogovectors.net/wp-content/uploads/2022/03/azure_sql_database_logo_freelogovectors.net_.png", 
//     "https://img.icons8.com/color/200/GeeksforGeeks.png",
//     "https://img.icons8.com/color/480/figma--v1.png", // Figma
//     "https://img.icons8.com/color/480/npm.png", // npm
//     "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png",
//     "https://img.icons8.com/ios_filled/512/FFFFFF/github.png"
//   ];

//   const Innername = [
//     "SQL",
//     "Geeks for Geeks",
//     "Figma",
//     "npm",
//     "LeetCode",
//     "GitHub",
//   ];

//   useEffect(() => {
//     const wheel = wheelRef.current;
//     const outer = outerImagesRef.current;
//     const inner = innerImagesRef.current;

//     const positionImages = (images, radius, rotationOffset = 0) => {
//       const centerX = wheel.offsetWidth / 2;
//       const centerY = wheel.offsetHeight / 2;
//       const total = images.length;
//       const slice = (2 * Math.PI) / total;

//       images.forEach((item, i) => {
//         const angle = i * slice + rotationOffset;
//         const x = centerX + radius * Math.cos(angle);
//         const y = centerY + radius * Math.sin(angle);

//         gsap.set(item, {
//           x,
//           y,
//           xPercent: -50,
//           yPercent: -50,
//         });
//       });
//     };

//     const resizeHandler = () => {
//       const outerRadius = wheel.offsetWidth / 2.5;
//       const innerRadius = wheel.offsetWidth / 5;
//       positionImages(outer, outerRadius);
//       positionImages(inner, innerRadius);
//     };

//     window.addEventListener("resize", resizeHandler);

//     ScrollTrigger.create({
//       trigger: wheel.parentElement,
//       start: "top center",
//       end: "bottom center",
//       scrub: true,
//       markers: false,
//       onUpdate: (self) => {
//         const rotation = self.progress * Math.PI * 2;
//         const outerRadius = wheel.offsetWidth / 2.5;
//         const innerRadius = wheel.offsetWidth /5;
//         positionImages(outer, outerRadius, rotation);
//         positionImages(inner, innerRadius, -rotation); // Counter rotation
//       },
//     });

//     resizeHandler();

//     return () => window.removeEventListener("resize", resizeHandler);
//   }, []);

//   return (
    
//     <div className="bg-black from-[#303030] via-black to-gray-900 text-white py-20 px-10 flex flex-col md:flex-row items-center justify-around gap-12 overflow-hidden scroller h-screen">
//       {/* Left Text Section */}
//       <div className="relative flex flex-col gap-6 text-white max-w-[600px] px-6">
//   {/* Floating blobs / deco behind */}
//   <h1 className="text-8xl font-['Saira_Stencil_One'] mb-15">SKILLS</h1>
//   <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full -z-10 animate-pulse" />
//   <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 blur-2xl rounded-full -z-10 animate-spin-slow" />

//   {/* Hero style typography */}
//   <h1 className="text-[3rem] sm:text-[4rem] leading-tight font-bold tracking-tight font-[saira]">
//     CREATE. <br />
//     <span className="text-orange-400">CODE.</span> <br />
//     CONNECT.
//   </h1>

//   {/* Tagline floating below */}
//   <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
//   {/* Let's give life to your ideas... */}
//   </p>

//   {/* Artistic floated words / traits */}
//   <div className="flex flex-wrap gap-3 mt-4">
//     {[ "Open Source Enthusiast", "MERN Stack Developer", "Problem Solving skills"].map((word, i) => (
//       <span key={i} className="px-4 py-1 border border-orange-400 text-orange-300 rounded-full text-sm font-medium bg-orange-400/10 backdrop-blur-sm shadow-md hover:scale-105 transition">
//         {word}
//       </span>
//     ))}
//   </div>
// </div>



//       {/* Right Spinning Wheel */}
//       <section className="relative h-[100vh] flex items-center justify-center overflow-hidden w-full">
//         <div ref={wheelRef} className="relative w-[70vw] max-w-[600px] h-[70vw] max-h-[600px]">
//           {[...outerSources].map((src, i) => (
//             <div
//               key={`outer-${i}`}
//               ref={(el) => (outerImagesRef.current[i] = el)}
//               className="absolute w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
//             >
//               <img src={src} alt={`outer-${i}`} className="w-full h-full object-contain" title={`${Outername[i]}`}/>
//               <div className="z-10 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                 {Outername[i]}
//               </div>  

//             </div>
//           ))}
//           {[...innerSources].map((src, i) => (
//             <div
//               key={`inner-${i}`}
//               ref={(el) => (innerImagesRef.current[i] = el)}
//               className="absolute w-[40px] h-[40px] sm:w-[40px] sm:h-[40px]"
//             >
//               <img src={src} alt={`inner-${i}`} className="w-full h-full object-contain" title={`${Innername[i]}`}/>
//               <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                 {Innername[i]}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SkillsSection;


import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const wheelRef = useRef(null);
  const outerImagesRef = useRef([]);
  const innerImagesRef = useRef([]);

  const outerSources = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    "https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.13.0/1743770490090/Microsoft.VisualStudio.Services.Icons.Default",
    "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    "https://img.icons8.com/fluent/512/css3.png",
    "https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg",
    "https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png",
    "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256",
  ];

  const Outername = [
    "React", "Node.js", "MongoDB", "Express", "HTML",
    "CSS", "Java", "TypeScript", "JavaScript", "Postman"
  ];

  const innerSources = [
    "https://cdn.freelogovectors.net/wp-content/uploads/2022/03/azure_sql_database_logo_freelogovectors.net_.png",
    "https://img.icons8.com/color/200/GeeksforGeeks.png",
    "https://img.icons8.com/color/480/figma--v1.png",
    "https://img.icons8.com/color/480/npm.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png",
    "https://img.icons8.com/ios_filled/512/FFFFFF/github.png"
  ];

  const Innername = [
    "SQL", "Geeks for Geeks", "Figma", "npm", "LeetCode", "GitHub"
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);

    if (!isLargeScreen) return;

    const wheel = wheelRef.current;
    const outer = outerImagesRef.current;
    const inner = innerImagesRef.current;

    const positionImages = (images, radius, rotationOffset = 0) => {
      const centerX = wheel.offsetWidth / 2;
      const centerY = wheel.offsetHeight / 2;
      const total = images.length;
      const slice = (2 * Math.PI) / total;

      images.forEach((item, i) => {
        const angle = i * slice + rotationOffset;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        gsap.set(item, {
          x,
          y,
          xPercent: -50,
          yPercent: -50,
        });
      });
    };

    const outerRadius = wheel.offsetWidth / 2.5;
    const innerRadius = wheel.offsetWidth / 5;

    positionImages(outer, outerRadius);
    positionImages(inner, innerRadius);

    ScrollTrigger.create({
      trigger: wheel.parentElement,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        const rotation = self.progress * Math.PI * 2;
        positionImages(outer, outerRadius, rotation);
        positionImages(inner, innerRadius, -rotation);
      },
    });

    return () => window.removeEventListener("resize", handleResize);
  }, [isLargeScreen]);

  return (
    <div className="bg-black text-white px-4 py-20 flex flex-col lg:flex-row items-center justify-center gap-16 max-w-screen-xl mx-auto">

      {/* LEFT TEXT */}
      <div className="flex flex-col gap-6 max-w-xl w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl sm:text-7xl font-['Saira_Stencil_One'] mb-8">SKILLS</h1>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
          {[
            "Open Source Enthusiast", "MERN Stack Developer", "Problem Solver",
            "Good Communication Skills", "Data Analysis", "Designing"
          ].map((text, i) => (
            <span
              key={i}
              className="px-4 py-1 border border-orange-400 text-orange-300 rounded-full text-sm font-medium bg-orange-400/10 backdrop-blur-sm"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT SKILLS DISPLAY */}
      {isLargeScreen ? (
        <div className="relative w-full max-w-[600px] h-auto aspect-square flex items-center justify-center">
          <div ref={wheelRef} className="relative w-[70vw] h-[70vw] max-w-[600px] max-h-[600px]">
            {outerSources.map((src, i) => (
              <div
                key={`outer-${i}`}
                ref={(el) => (outerImagesRef.current[i] = el)}
                className="absolute w-[50px] h-[50px]"
              >
                <img src={src} alt={Outername[i]} title={Outername[i]} className="w-full h-full object-contain" />
              </div>
            ))}
            {innerSources.map((src, i) => (
              <div
                key={`inner-${i}`}
                ref={(el) => (innerImagesRef.current[i] = el)}
                className="absolute w-[40px] h-[40px]"
              >
                <img src={src} alt={Innername[i]} title={Innername[i]} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 w-full max-w-xs justify-items-center">
          {[...outerSources, ...innerSources].map((src, i) => (
            <div key={i} className="w-[50px] h-[50px]">
              <img src={src} alt="skill" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
