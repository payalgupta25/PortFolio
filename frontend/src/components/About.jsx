import React from "react";
import Threads from "./Threads";
import ScrollVelocity from "./ScrollVelocity";
import SpotlightCard from "./SpotlightCard";
import TiltedCard from "./TitledCard.jsx";

export default function About() {
  return (
    <div id="about" className="bg-black">
      <ScrollVelocity
        texts={["About", "Know me more!"]}
        velocity={40}
        className="custom-scroll-text text-amber-50"
      />

      <div className="p-4 sm:p-8 md:p-16 flex flex-col-reverse md:flex-row items-center justify-around gap-10">
        {/* Left Section - Text */}
        <SpotlightCard
          className="w-full md:w-3/5"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white py-2 px-3 text-center font-['Saira_Stencil_One']">
            About
          </h1>
          <div className="text-white flex flex-col items-center justify-center px-4 sm:px-6 py-8">
            <h2 className="text-xl sm:text-2xl font-[poppins] p-3 underline text-center">
              Let’s Build Something Great Together
            </h2>
            <p className="text-base sm:text-lg md:text-lg font-[poppins] text-center">
            Hey, I’m Payal Gupta — a passionate developer, open-source enthusiast, and designer who loves transforming ideas into intuitive, beautiful, and impactful solutions. Whether it's innovative hackathon builds or thoughtful personal projects, I believe in creating with purpose. Every line of code and every design decision reflects my dedication to making things that truly matter.
            <br />
            <br />
            Currently, I’m pursuing my B.Tech in Computer Science and Engineering from Maharaja Surajmal Institute of Technology, where I’m constantly learning, building, and pushing the boundaries of what technology can do.
            </p>
          </div>
        </SpotlightCard>

        {/* Right Section - Image */}
        <div className="w-full md:w-auto flex justify-center">
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
              <p className="flex tilted-card-demo-text text-4xl text-center p-5 font-[stencil] text-white">
                Payal Gupta
              </p>
            }
          />
        </div>
      </div>

      {/* Threads animation below */}
      <div className="w-full h-[300px] sm:h-[400px] relative p-0 m-0">
        <Threads
          amplitude={2}
          distance={0}
          speed={0.5}
          enableMouseInteraction={true}
        />
      </div>
    </div>
  );
}
