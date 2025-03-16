"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CircularPattern from "../decors/CircularPattern";
import RotatingImages from "./RotatingImages";

const ProductHero = ({ content }) => {
  const { heading = "", social_media = [] } = content || {};

  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const svgPathRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const path = svgPathRef.current;
    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.out",
    });
    // Title animation: Staggered fade-in while keeping spaces
    gsap.set(titleRef.current, { opacity: 1 }); // Ensure visibility
    const words = heading.split(" "); // Split words instead of letters
    titleRef.current.innerHTML = words
      .map(
        (word) => `<span class="inline-block opacity-0">${word}&nbsp;</span>`
      )
      .join("");

    tl.to(titleRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      ease: "power2.out",
      stagger: 0.1, // Stagger effect for words
    });

    // Image animation: Slide in from the right
    tl.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5" // Start before title animation ends
    );

    // Button animation: Slide up from bottom with bounce effect
    tl.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "bounce.out" },
      "-=0.3" // Start slightly before image animation ends
    );
  }, [heading]);

  return (
    <div className="w-full reviews h-auto py-[10vh] relative">
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
      <div className="absolute -bottom-[100px] left-[150px]">
        <CircularPattern />
      </div>

      <img
        src="/product/Line_BG.png"
        alt="product-grid"
        className="absolute h-full w-[600px] right-[100px] top-0 z-20 opacity-60"
      />
      <div className="product-hero-container w-3/4 mx-auto relative z-50 mt-[15vh]">
        <div className="grid grid-cols-4 place-items-center">
          <div className="col-span-full lg:col-span-3">
            <h1
              ref={titleRef}
              className="text-white text-hero-front max-w-[17ch] opacity-0 font-[600] leading-[1.2]"
            >
              {heading}
            </h1>
          </div>
          <RotatingImages social_media={social_media} />
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
