import React from "react";

const About = () => {
  return (
    <div className="relative text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0 aspect-video"
      >
        <source src="/communication.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-[#343434] opacity-[95%]"></div>
      <div className="max-w-[90rem] w-[90%] min-h-[100vh] mx-auto about relative">
        <div className="grid grid-cols-4 absolute w-full h-full top-0 left-0 z-30 py-[10vh]">
          <h1 className="text-8xl col-span-3">
            WE CREATE <span className="font-bold">VIDEOS</span>,{" "}
            <span className="font-bold">BRANDS</span>,{" "}
            <span className="font-bold">NARRATIVES</span>
          </h1>
          <p className="col-span-3 text-4xl">
            We fuel organic growth— enhancing your brand’s identity, driving
            real engagement, and generating leads across all social media
            platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
