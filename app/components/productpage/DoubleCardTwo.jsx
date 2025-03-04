"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DoubleCardTwo = ({ additional_package, title }) => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Animate each additional info item
    tl.fromTo(
      cardRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=0.5" // Overlap the first animation
    );
  }, []);

  const cardBlueIcon = (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_4143_515)">
        <circle cx="13.5" cy="13.5" r="7.5" fill="#00FFE1" />
      </g>
      <defs>
        <filter
          id="filter0_f_4143_515"
          x="0.8"
          y="0.8"
          width="25.4"
          height="25.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.6"
            result="effect1_foregroundBlur_4143_515"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <div className="h-full">
      <h1 className="text-white double-cards-title text-card-one-heading col-span-full">
        {title}
      </h1>
      <div
        ref={sectionRef}
        className="double-card border-2 border-[#2D2D2D] px-8 py-[5vh] rounded-[1rem] mt-10 flex flex-col justify-between opacity-0 h-full backdrop-blur-md"
      >
        <div className="text-white text-[36px]">
          {additional_package?.additional_info?.length > 0 &&
            additional_package.additional_info.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)} // Assign each ref
                className="double-card-content flex gap-x-4 items-center opacity-0" // Ensure opacity is 0 initially
              >
                <div className="double-card-icon">{cardBlueIcon}</div>
                <p className="text-white text-card-content double-card-title -mt-2">
                  {card.content}
                </p>
              </div>
            ))}
        </div>

        <p className="text-white text-accordion-heading uppercase">
          {additional_package?.package_content}
        </p>

        <button className="bg-[#05A895] text-white w-fit mx-auto text-accordion-heading px-4 py-2 rounded-md mb-[10vh]">
          Schedule a call
        </button>
      </div>
    </div>
  );
};

export default DoubleCardTwo;
