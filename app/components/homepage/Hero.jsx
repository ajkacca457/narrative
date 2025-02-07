import React from "react";
import CircularPattern from "../decors/CircularPattern";

const Hero = ({ content }) => {
  const {
    hero_heading = "Default Heading",
    hero_subheading = "Default Subheading",
  } = content || {};

  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center">
      <svg
        width="194"
        height="127"
        viewBox="0 0 194 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[200px] left-0"
      >
        <path
          d="M192.334 1.98498C192.334 1.98498 157.992 7.47165 139.18 18.3194C103.575 38.8496 41.9236 86.7784 78.7164 104.459C110.718 119.837 138.449 88.5693 133.493 62.6156C127.766 32.6285 73.6878 63.485 43.3135 83.0057C15.579 100.83 1.84912 124.936 1.84912 124.936"
          stroke="white"
          strokeOpacity="0.15"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <CircularPattern customClass="absolute -bottom-[100px] right-0" />
      <div className=" max-w-[1100px]">
        <h1 className="text-[96px] text-white font-semibold">
          {hero_heading
            ? hero_heading
            : "We are a digital marketing agency with expertise"}
        </h1>
        <h5 className="text-[20px] ml-[100px] tracking-[.3em] text-white mt-6 uppercase">
          {hero_subheading ? hero_subheading : "a brand design studio."}
        </h5>
      </div>
    </div>
  );
};

export default Hero;
