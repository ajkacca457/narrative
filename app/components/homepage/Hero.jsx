"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CircularPattern from "../decors/CircularPattern";

const Hero = ({ content }) => {
  const {
    hero_heading = "Default Heading",
    hero_subheading = "Default Subheading",
  } = content || {};

  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const patternRef = useRef(null);
  const svgPathRef = useRef(null);

  useEffect(() => {
    const path = svgPathRef.current;
    const pathLength = path.getTotalLength();

    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    const tl = gsap.timeline();
    tl.to(path, {
      strokeDashoffset: 0, 
      duration: 2.5,
      ease: "power2.out",
    });

    // Heading fade-in
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      },
      "-=1.5"
    );

    tl.fromTo(
      subheadingRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=1" 
    );

    gsap.to(patternRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full h-[50vh] sm:h-screen relative flex flex-col items-center justify-center">
      {/* SVG Decoration with Draw Effect */}
      <svg
        width="194"
        height="127"
        viewBox="0 0 194 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[200px] left-0"
      >
        <path
          ref={svgPathRef}
          d="M192.334 1.98498C192.334 1.98498 157.992 7.47165 139.18 18.3194C103.575 38.8496 41.9236 86.7784 78.7164 104.459C110.718 119.837 138.449 88.5693 133.493 62.6156C127.766 32.6285 73.6878 63.485 43.3135 83.0057C15.579 100.83 1.84912 124.936 1.84912 124.936"
          stroke="white"
          strokeOpacity="0.15"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Rotating Circular Pattern */}
      <div ref={patternRef} className="absolute -bottom-[100px] right-0">
        <CircularPattern />
      </div>

      {/* Hero Content */}
      <div className="max-w-[1100px] text-center">
        <h1
          ref={headingRef}
          className="text-hero-front text-white font-semibold opacity-0"
        >
          {hero_heading}
        </h1>
        <h5
          ref={subheadingRef}
          className="text-[20px] ml-[100px] tracking-[.3em] text-white mt-6 uppercase opacity-0 hidden sm:block"
        >
          {hero_subheading}
        </h5>
      </div>
    </div>
  );
};

export default Hero;
