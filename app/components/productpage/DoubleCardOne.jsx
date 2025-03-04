"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DoubleCardOne = ({ core_package, title }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const cardIcon = (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4143_457)">
        <path
          d="M16.5 1.375L27.7984 3.88575C28.4267 4.026 28.875 4.58288 28.875 5.22775V18.9599C28.875 21.7181 27.4959 24.2949 25.201 25.8239L16.5 31.625L7.799 25.8239C5.50275 24.2935 4.125 21.7181 4.125 18.9613V5.22775C4.125 4.58288 4.57325 4.026 5.20162 3.88575L16.5 1.375ZM22.6215 11.3053L15.8152 18.1101L11.9267 14.2216L9.9825 16.1659L15.8166 22L24.5671 13.2495L22.6215 11.3053Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4143_457">
          <rect width="33" height="33" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none reset",
      },
    });

    // Animate each card with stagger
    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="h-full">
      <h1 className="text-white double-cards-title text-card-one-heading col-span-full">
        {title}
      </h1>

      <div
        ref={sectionRef}
        className="double-card border-2 border-[#2D2D2D] px-8 py-[5vh] rounded-[1rem] mt-10 h-full backdrop-blur-sm"
      >
        {core_package?.core_info?.length > 0 &&
          core_package.core_info.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="double-card-content flex gap-x-4 items-start mt-8 opacity-0"
            >
              <div className="double-card-icon">{cardIcon}</div>
              <p className="text-white text-card-content double-card-title -mt-2">
                {card.content}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DoubleCardOne;
