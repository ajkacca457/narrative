"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutEnquery = ({ content }) => {
  const { top_heading = "", heading = "", subheading = "", button_text = "" } = content || {};
  const sectionRef = useRef(null);
  const topHeadingRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", 
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      topHeadingRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(
        mainHeadingRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3" 
      )
      .fromTo(
        subheadingRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3" 
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3" 
      );
  }, []);

  return (
    <div ref={sectionRef} className="w-full about-enquiry h-auto py-[20vh] relative z-50">
      <div className="about-enquiry-container w-[95%] max-w-[1140px] mx-auto rounded-[2rem] relative border-2 border-[#1FCDD3] p-6">
        <div className="bg-[#1E1E21] rounded-[2rem] py-[10vh]">
          <div className="flex items-center gap-4 w-fit mx-auto">
            <svg
              width="21"
              height="6"
              viewBox="0 0 21 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="20" height="6" rx="3" fill="#00FFFF" />
            </svg>
            <p ref={topHeadingRef} className="text-white text-[16px]">
              {top_heading}
            </p>
            <svg
              width="21"
              height="6"
              viewBox="0 0 21 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="20" height="6" rx="3" fill="#00FFFF" />
            </svg>
          </div>

          <h1 ref={mainHeadingRef} className="about-inquiry-title bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-we-do-card-heading font-bold text-center max-w-[15ch] mx-auto">
            {heading}
          </h1>
          <p ref={subheadingRef} className="text-[#929292] max-w-[60ch] text-center mx-auto">
            {subheading}
          </p>

          <div className="flex justify-center mt-10">
            <button ref={buttonRef} className="uppercase bg-[#00FFFF] px-4 py-2 rounded-full w-fit mx-auto">
              {button_text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEnquery;
