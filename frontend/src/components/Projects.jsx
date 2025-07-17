import React from 'react';

function Projects() {
  const projectData = [
    {
      id: 1,
      title: 'GoTogether',
      desc: "GoTogether is a smart and intuitive ride-sharing platform I built to simplify everyday commuting while promoting eco-friendly travel. Designed with real-time ride creation, secure authentication, and easy user experience in mind, the app allows users to create or join rides based on their location, schedule, and preferences.",
      tech: ['MongoDB', 'ExpressJS', 'NodeJS', 'React', 'Cloudinary', 'Tailwind CSS'],
      github: '',
      live: '',
    },
    {
      id: 2,
      title: 'Twitter Clone',
      desc: 'A full-stack Twitter-like social media application with user authentication, posts, likes, comments, follows, image uploads, and JWT-based security.',
      tech: ['MongoDB', 'ExpressJS', 'NodeJS', 'React', 'Cloudinary', 'Tailwind CSS'],
      github: 'https://github.com/payalgupta25/Twitter-Clone',
      live: 'https://twitter-clone-p1l6.onrender.com',
    },
    {
      id: 3,
      title: 'Healing Touch',
      desc: 'A stress-relief website with curated playlists, calming podcasts, and mental wellness articles — made for the TechMinds hackathon under the Healthcare theme.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/payalgupta25/healing-touch',
      live: 'https://healingtouch-webwizard.netlify.app/',
    },
    {
      id: 4,
      title: 'Playlist Converter',
      desc: 'Convert music playlists from MP4 to MP3 with this seamless, web-based application.',
      tech: ['ExpressJS', 'NodeJS', 'React'],
      github: 'https://github.com/payalgupta25/Converter-MP4-playlist-to-MP3-.git',
      live: '',
    },
    {
      id: 5,
      title: 'TL;DR Genie',
      desc: 'TLDR Genie summarizes long content (articles, papers, transcripts) into concise summaries. Built for quick knowledge consumption.',
      tech: ['Gemini API', 'NodeJS', 'React'],
      github: '#',
      live: '#',
    }
  ];

  return (
    <section className="bg-black text-white py-10 px-4 md:px-12 min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 font-['Saira_Stencil_One'] underline">
        PROJECTS
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="border border-gray-700 shadow-md rounded-2xl p-6 bg-[#0e0e0e] hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs border rounded-full bg-[#232323] hover:bg-gray-800 text-gray-200 border-gray-600"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              <a
                href={project.github}
                className="text-orange-400 underline hover:text-orange-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.live}
                className="text-orange-400 underline hover:text-orange-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
