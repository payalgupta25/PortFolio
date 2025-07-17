import React from "react";
import { FaMapSigns, FaPhoneAlt, FaPaperPlane, FaGlobe } from "react-icons/fa";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaMapSigns size={24} className="text-white" />,
      title: "ADDRESS",
      value: "New Delhi, India",
    },
    {
      icon: <FaPhoneAlt size={24} className="text-white" />,
      title: "CONTACT NUMBER",
      value: "+91 9210726789",
    },
    {
      icon: <FaPaperPlane size={24} className="text-white" />,
      title: "EMAIL ADDRESS",
      value: "payalgupta425@gmail.com",
    },
    {
      icon: <FaGlobe size={24} className="text-white" />,
      title: "OPEN TO WORK",
      value: "Always there to contribute",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center px-4 justify-between" >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-['Saira_Stencil_One'] underline text-center mb-10 pt-30">
        Contact Me
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {contactInfo.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-4 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-900 flex items-center justify-center shadow-md">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold tracking-wide">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-400">{item.value}</p>
          </div>
        ))}
      </div>

      <footer className="mt-16 w-full bg-[#232323] py-5 px-4 rounded-t-3xl flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-center mb-0">
        <p className="text-sm text-gray-400">Create.Code.Connect 📩🤝💻</p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Payal Gupta. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">❤️ Designed and Developed by Payal Gupta</p>
      </footer>
    </div>
  );
};

export default ContactSection;
