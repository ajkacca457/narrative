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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0A3635] via-[#3A6B68] to-[#0A3635] opacity-90"></div>
      <div className="max-w-[90rem] w-[90%] min-h-[100vh] mx-auto about relative">
        <div className="grid grid-cols-4 absolute w-full h-full top-0 left-0 z-30 py-[10vh]">
          <h1 className="text-8xl col-span-3">
            We fuel organic growth enhancing your brand’s{" "}
            <span className="font-bold">identity</span>, driving real{" "}
            <span className="font-bold">engagement</span>, and generating{" "}
            <span className="font-bold">leads</span> across all{" "}
            <span className="font-bold">social media platforms</span>.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
