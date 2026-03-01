import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const BG_TEXT = "PROJECTS";

const projects = [
  {
    title: "GoTogether-Carpool Platform",
    bgText: "PLATFORM",
    tag: ["MERN Stack", "Cloudinary", "TomTom API", "Twilio",],
    image: "/carpool.png",
    git:"https://github.com/payalgupta25/GoTogether",
    live:"",
    description:
      "Developed a MERN-based ride-sharing platform enabling long-term commuting through Fixed Commuter Circles, eliminating repetitive daily ride bookings. It includes a Carbon Footprint Tracking feature to measure CO₂ savings from shared rides. User safety is enhanced by integrating a Twilio-powered SOS emergency alert system along with a women-only ride feature. The platform also implements multi-factor authentication using email OTP and JWT-based sessions, and integrates the TomTom Maps API and accurate ETA prediction.",
  },

  {
    title: "LeetMark Chrome Extension",
    bgText: "EXTENSION",
    tag: ["Groq API", "JavaScript", "Markdown", "Chrome Extension"],
    image: "/leetmark.png",
    git: "https://github.com/payalgupta25/Extension-LeetMark",
    live:"https://drive.google.com/file/d/1EyfZ9O3AZKaitXdcqE5TqMkuGVDUme3t/view",
    description:
      "Developed a productivity-focused Chrome extension that automatically generates well-structured Markdown templates for LeetCode problems, including sections such as intuition, code implementation, and computational complexity, significantly reducing manual documentation effort. The extension integrates the Groq API for context-aware summarization and features a real-time Markdown editor with live preview, enabling seamless solution writing, organization, and export for interview preparation and portfolio building.",
  },

  {
    title: "T&C Analyzer",
    bgText: "AI TOOL",
    tag: ["Gemini API", "JavaScript", "BERT","Chrome Extension"],
    image: "/tandc.png",
    git:"https://github.com/payalgupta25/tandc-analyzer",
    live:"",
    description:
      "Built an AI-powered Chrome extension that analyzes Terms of Service and Privacy Policies in real time, highlighting potentially risky clauses and generating simplified summaries for better user understanding. The system integrates LLM capabilities using the Gemini API along with NLP models such as BERT to classify legal text, evaluate content risk, compute an overall risk score, and present key insights outlining what users are agreeing to before accepting digital policies.",
  },

  {
    title: "Twitter Clone",
    bgText: "SOCIAL",
    tag: ["MongoDB", "Express", "React", "Node", "Cloudinary"],
    image: "/twitter.png",
    git:"https://github.com/payalgupta25/Twitter-Clone",
    live:"https://twitter-clone-p1l6.onrender.com/",
    description:
      "Developed a full-stack Twitter-like social media application using React, Node.js, Express, MongoDB, and TailwindCSS, enabling users to create profiles and interact through posts in a dynamic social environment. The platform includes secure user authentication, post creation, editing and deletion, likes, comments, and follow/unfollow functionality along with real-time notifications for user interactions. Real-time data synchronization is handled using React Query, while Cloudinary is integrated for efficient upload and management of post images and profile pictures.",
  },

  {
    title: "Playlist Converter",
    bgText: "WEB APP",
    tag: ["React", "NodeJS", "Express", "yt-dlp"],
    image: "/playlist.png",
    git: "https://github.com/payalgupta25/Converter-MP4-playlist-to-MP3-",
    live: "",
    description:
      "Built a web-based playlist converter that transforms MP4 playlists into downloadable MP3 audio files through a media-processing pipeline. As someone who enjoys listening to music, I often found existing platforms limited to downloading one song at a time, which made the process repetitive and time-consuming. To solve this personal problem, I developed a playlist converter that enables users to download entire playlists seamlessly in one go — reflecting the core idea of development: identifying everyday inefficiencies and building practical solutions to simplify life.",
  },
];

export default function SelectedWork() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${panels.length * 900}`,
          scrub: 1,
          pin: true,
          snap: 1 / (panels.length - 1),
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-black overflow-hidden text-white"
    >
      {/* TITLE */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
        <h2 className="text-3xl underline md:text-7xl font-semibold font-['Saira_Stencil_One']">
          PROJECTS
        </h2>
      </div>

      {/* SLIDER */}
      <div
        className="flex h-full items-center mt-10"
        style={{ width: `${projects.length * 100}vw` }}
      >
            {/* BACKGROUND TEXT */}
            <div className="absolute w-full overflow-hidden whitespace-nowrap pointer-events-none">
              <div className="animate-marquee text-[48vw] md:text-[18vw] font-bold text-zinc-900">
                PROJECTS • PROJECTS
              </div>
            </div>
        {projects.map((item, i) => (
          <div
            key={i}
            className="panel w-screen h-full flex items-center justify-center relative px-6"
          >

            {/* CARD */}
            <div className="
              relative z-10
              flex flex-col md:flex-row
              gap-10
              bg-[#1c1c1c]
              rounded-2xl
              p-6
              w-[92%]
              max-w-[1100px]
              shadow-2xl
            ">
              
              {/* IMAGE */}
              <img
                src={item.image}
                className="rounded-xl md:w-[55%] h-[260px] md:h-[420px] object-cover"
              />

              {/* CONTENT */}
              <div className="flex flex-col justify-between md:w-[45%]">
                <h3 className="text-lg md:text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-300 leading-relaxed hidden sm:block ">
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="flex text-xs md:text-lg flex-wrap gap-2 mt-6">
                  {item.tag.map((t, k) => (
                    <span
                      key={k}
                      className="text-xs border border-white/30 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end gap-4">
                  <a
                    href={item.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs invert px-2 py-2 hover:bg-white hover:invert-0 hover:rounded-full rounded-full mt-4 inline-block"
                  >
                    <img className="h-6" src="/github.png" alt="" />
                  </a>
                  <a className="text-xl px-2 py-2 hover:bg-white hover:text-black hover:rounded-full rounded-full mt-4 inline-block" href={item.live}><ArrowUpRight/></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MARQUEE */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}





// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     title: "Playlist Converter",
//     tag: ["ExpressJs", "ReactJs","NodeJs"],
//     image:
//       "/playlist.png",
//     bgText: "",
//   },
//   {
//     title: "Twitter Clone",
//     tag: ["MongoDB", "ExpressJS", "NodeJS", "React", "Cloudinary", "Tailwind CSS"],
//     image:
//       "/twitter.png",
//     bgText: "",
//     head:"Twitter Clone",
//     description: "A full-stack Twitter-like social media application that allows users to create profiles, share posts, like and comment, and follow or unfollow other users. The platform includes secure user authentication along with a notification system for likes and follows, providing an interactive social networking experience. Built using React.js, Node.js, Express.js, and MongoDB, the application ensures efficient data handling and scalable backend operations. React Query enables real-time UI updates, while Cloudinary is used for profile image uploads and management. The interface is designed with TailwindCSS, making the application fully responsive across all devices."
//   },
//   {
//     title: "LeetMark - Chrome Extension",
//     tag: ["Groq API", "JavaScript"],
//     image:
//       "/leetmark.png",
//     bgText: "PROJECTS",
//     head:"LeetMark - Chrome Extension",
//     description: "LeetMark is a productivity-focused Chrome extension that helps you instantly capture, preview, and organize your LeetCode solutions in Markdown format. Whether you're preparing for interviews or building a personal portfolio, LeetMark makes documenting and exporting your LeetCode submissions effortless and beautiful."
//   },
// ];

// export default function SelectedWork() {
//   const sectionRef = useRef();
//   const sliderRef = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray(".panel");

//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=3000",
//           scrub: 1,
//           pin: true,
//           snap: 1 / (panels.length - 1),
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full h-screen bg-black overflow-hidden flex flex-col justify-center text-white"
//     >
//       {/* Title */}
//       <div className="absolute top-10 left-10 z-20">
//         <h2 className="text-3xl md:text-5xl font-semibold">
//           Selected work <sup>(3)</sup>
//         </h2>
//       </div>

//       {/* Slider */}
//       <div
//         ref={sliderRef}
//         className="flex h-full items-center"
//         style={{ width: `${projects.length * 100}vw` }}
//       >
//         {projects.map((item, i) => (
//           <div
//             key={i}
//             className="panel relative w-screen h-full flex items-center justify-center"
//           >
//             {/* Moving Background Text */}
//             <div className="absolute w-full overflow-hidden whitespace-nowrap pointer-events-none">
//               <div className="animate-marquee text-[18vw] font-bold text-zinc-900">
//                 {item.bgText} {item.bgText} {item.bgText} {item.bgText}
//               </div>
//             </div>

//             {/* Card */}
//             <div className="relative flex flex-row z-10 bg-[#232323] rounded-2xl p-4 w-[90%] md:w-[1000px] shadow-2xl">
//              <div>
//               <img
//                 src={item.image}
//                 className="rounded-xl w-full h-[300px] md:h-[420px] object-cover"
//               />

//               <div className="flex justify-between items-center w-[500px] mt-4 text-white">
//                 <div>
//                   <h3 className="text-lg md:text-xl font-semibold">
//                     {item.title}
//                   </h3>

//                   <div className="flex gap-2 mt-2 flex-wrap">
//                     {item.tag.map((t, k) => (
//                       <span
//                         key={k}
//                         className="text-xs border border-white/40 px-2 py-1 rounded"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="text-xl">↗</div>
//               </div>
//             </div>
//               <div>
//                 <h1 className="text-3xl flex justify-center pt-5 font-bold">{item.head}</h1>
//               <p className="mt-4 text-sm md:text-base p-7">
//                 {item.description}
//               </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .animate-marquee {
//           animation: marquee 18s linear infinite;
//         }

//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function SelectedWork() {

//   const sectionRef = useRef();
//   const trackRef = useRef();

//   const projects = [
//     {
//       title: "AI Gift Finder",
//       description:
//         "AI-powered platform recommending personalized gifts using user intent.",
//       tech: ["React", "Node", "MongoDB"],
//       image:
//         "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
//     },
//     {
//       title: "Women Safety Analytics",
//       description:
//         "Detects unsafe crowd situations using real-time surveillance analytics.",
//       tech: ["Python", "OpenCV", "AI"],
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
//     },
//     {
//       title: "Smart Carpool System",
//       description:
//         "Ride-sharing platform with authentication & route optimization.",
//       tech: ["React", "JWT", "Node"],
//       image:
//         "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
//     },
//   ];

//   useEffect(() => {

//     const ctx = gsap.context(() => {

//       const totalWidth =
//         trackRef.current.scrollWidth - window.innerWidth;

//       gsap.to(trackRef.current, {
//         x: -totalWidth,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: () => `+=${totalWidth}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//     });

//     return () => ctx.revert();

//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#0b0b0b] text-white h-screen overflow-hidden"
//     >

//       {/* TITLE */}
//       <div className="absolute top-10 left-6 md:left-12 z-20">
//         <h2 className="text-3xl md:text-6xl font-bold">
//           Selected Work
//         </h2>
//       </div>

//       {/* HORIZONTAL TRACK */}
//       <div
//         ref={trackRef}
//         className="flex items-center h-full gap-16 px-[10vw]"
//       >
//         {projects.map((project, i) => (
//           <ProjectCard key={i} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ---------------- CARD ---------------- */

// function ProjectCard({ project }) {
//   return (
//     <div className="
//       min-w-[85vw]
//       md:min-w-[650px]
//       h-[70vh]
//       bg-neutral-900
//       rounded-3xl
//       overflow-hidden
//       shadow-2xl
//       flex flex-col
//       hover:scale-[1.02]
//       transition
//     ">

//       {/* IMAGE */}
//       <img
//         src={project.image}
//         className="h-[55%] w-full object-cover"
//       />

//       {/* CONTENT */}
//       <div className="p-6 flex flex-col justify-between flex-1">

//         <div>
//           <h3 className="text-2xl font-semibold mb-3">
//             {project.title}
//           </h3>

//           <p className="text-gray-400 text-sm leading-relaxed">
//             {project.description}
//           </p>
//         </div>

//         {/* TECH STACK */}
//         <div className="flex flex-wrap gap-2 mt-5">
//           {project.tech.map((t, i) => (
//             <span
//               key={i}
//               className="text-xs px-3 py-1
//               border border-white/20
//               rounded-full"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }