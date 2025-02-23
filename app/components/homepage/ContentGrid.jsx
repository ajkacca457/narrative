// ImageGrid.js

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContentGrid = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".image-grid",
        start: "top 60%", 
        toggleActions: "play none none reset",
      },
    });

    imageRefs.current.forEach((image, index) => {
      imageTimeline.fromTo(
        image,
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-4 mt-10 w-[90%] mx-auto image-grid">
      {[1, 2, 3, 4].map((num, index) => (
        <img
          key={num}
          ref={(el) => (imageRefs.current[index] = el)}
          src={`/display/${num}.png`}
          alt={`image-${num}`}
          className="opacity-0"
        />
      ))}
    </div>
  );
};

export default ContentGrid;
