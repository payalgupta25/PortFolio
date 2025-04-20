import React from 'react';

function Projects() {
  const projectData = [
    {
      id: 1,
      title: 'GoTogether',
      desc: "GoTogether is a smart and intuitive ride-sharing platform I built to simplify everyday commuting while promoting eco-friendly travel. Designed with real-time ride creation, secure authentication, and easy user experience in mind, the app allows users to create or join rides based on their location, schedule, and preferences. Whether it's for daily college commutes or spontaneous travel plans, GoTogether connects like-minded travelers and helps reduce traffic, cost, and carbon footprint — all while building a reliable community of co-travelers.",
      tech: ['MongoDB', 'ExpressJS', 'NodeJS', 'React', 'Cloudinary', 'Tailwind CSS'],
      github: 'https://github.com/payalgupta25/Twitter-Clone',
      live: 'https://twitter-clone-p1l6.onrender.com',
      bgClass: 'parallax0'
    },
    {
      id: 2,
      title: 'Twitter Clone',
      desc: 'A full-stack Twitter-like social media application built using React, Node.js, Express, MongoDB, and TailwindCSS. This project replicates key features of Twitter including user authentication, post creation, likes, comments, follow system, and real-time updates. With a responsive design and intuitive UI, the app offers a seamless experience across devices. It also supports image uploads via Cloudinary and ensures secure access using JWT-based authentication. Ideal for learning and showcasing modern web development skills.',
      tech: ['MongoDB', 'ExpressJS', 'NodeJS', 'React', 'Cloudinary', 'Tailwind CSS'],
      github: 'https://github.com/payalgupta25/Twitter-Clone',
      live: 'https://twitter-clone-p1l6.onrender.com',
      bgClass: 'parallax1'
    },
    {
      id: 3,
      title: 'Healing Touch',
      desc: 'This is a stress-relieving website project made for the hackathon TechMinds. This project is under the theme Healthcare. Explore our curated playlists, calming podcasts, helpful articles, and proven stress-management tips, all designed to help you unwind and recharge.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/payalgupta25/healing-touch',
      live: 'https://healingtouch-webwizard.netlify.app/',
      bgClass: 'parallax2'
    },
    {
      id: 4,
      title: 'Playlist Converter',
      desc: 'Playlist Converter is a web-based application. The platform allows users to effortlessly convert music playlists from MP4 format to MP3, providing a seamless and user-friendly experience.',
      tech: ['ExpressJS', 'NodeJS', 'React'],
      github: 'https://github.com/payalgupta25/Converter-MP4-playlist-to-MP3-.git',
      live: 'https://github.com/payalgupta25/Twitter-Clone', // Update this if incorrect
      bgClass: 'parallax3'
    },
    {
      id: 5,
      title: 'TL;DR Genie',
      desc: "TLDR Genie is a powerful summarization tool I created to cut through information overload. Whether it's lengthy articles, research papers, or meeting transcripts, TLDR Genie instantly condenses content into concise, easy-to-understand summaries. With a clean UI and smart summarization logic, it helps users grasp key points quickly without missing the essence — perfect for students, professionals, and curious minds who want more knowledge in less time.",
      tech: ['Gemini API', 'NodeJS', 'React'],
      github: '#',
      live: '#', // Update this if incorrect
      bgClass: 'parallax4'
    }
  ];

  return (
    <>
      <h2 className=" bg-[white] w-100vw z-100 p-5 relative h-auto font-bold text-black text-center font-['Saira_Stencil_One'] text-7xl">PROJECTS</h2>

      {projectData.map((project, index) => (
        <React.Fragment key={project.id}>
          <div className={`${project.bgClass} relative h-[70vh]`}></div>

          <div className="w-full h-auto bg-black border border-white">
            <h2 className="font-bold text-white text-center font-['Saira_Stencil_One'] text-3xl p-6">{project.title}</h2>
            <p className="p-6 text-white">{project.desc}</p>

            <div className=" h-auto flex flex-row justify-between p-6 items-center bg-black text-white">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, idx) => (
                  <div key={idx} className="p-2 border border-white rounded-3xl">{techItem}</div>
                ))}
              </div>
              <div className="flex flex-row gap-3">
                <a href={project.github} className="underline">Github</a>
                <a href={project.live} className="underline">Live Link</a>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default Projects;