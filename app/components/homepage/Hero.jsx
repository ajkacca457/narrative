import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center">
      <div className=" max-w-[1100px]">
        <h1 className="text-[96px] text-white font-semibold">
          We are a digital marketing agency with expertise
        </h1>
        <h5 className="text-[20px] ml-[100px] tracking-[.3em] text-white mt-6 uppercase">
          a brand design studio.
        </h5>
      </div>
    </div>
  );
};

export default Hero;
