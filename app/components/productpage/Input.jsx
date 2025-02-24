"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Input = ({ content }) => {
  const {
    input_image = "",
    input_heading_highlight = "",
    input_heading_light = "",
    input_description = "",
    input_logos = [],
  } = content || {};

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const highlightRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", 
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    tl.fromTo(
      highlightRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.8" 
    );

    tl.fromTo(
      headingRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    tl.fromTo(
      logosRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <div ref={sectionRef} className="w-full input-element h-auto py-[20vh]">
      <div className="input-element-container w-3/4 mx-auto">
        <div className="flex gap-x-[5vw]">
          {/* Image */}
          <img ref={imageRef} src={input_image?.sizes?.large} alt="input-bg" className="opacity-0 scale-50" />

          <div className="text-white">
            {/* Heading */}
            <h3 className="text-[48px] font-semibold">
              <span ref={highlightRef} className="bg-[#00FFE1] text-black p-[5px] rounded-2xl opacity-0">
                {input_heading_highlight}
              </span>{" "}
              <span ref={headingRef} className="opacity-0">{input_heading_light}</span>
            </h3>

            <p ref={descriptionRef} className="text-[20px] text-[#929292] mt-6 opacity-0">
              {input_description}
            </p>

            {input_logos.length > 0 && (
              <div ref={logosRef} className="grid grid-cols-3 gap-4 mt-6 opacity-0">
                {input_logos.map((logo, index) => (
                  <img key={index} src={logo?.logo?.sizes?.medium} alt="logo" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
