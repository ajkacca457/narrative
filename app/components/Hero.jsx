import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[90rem] w-[90%] mx-auto mt-[5vh]">
<div className="relative w-full pt-[56.25%]">
  <iframe 
    className="w-full h-full absolute top-0 left-0" 
    src="https://www.youtube.com/embed/mZ5hnNRBFsc?si=kxF37tb8Nm-BoeNI&autoplay=1&loop=1&controls=0&playlist=mZ5hnNRBFsc&mute=1" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin">
  </iframe>
  <div className="absolute top-0 left-0 w-full h-full"></div> 
</div>

    </div>
  );
};

export default Hero;
