"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutOurTeam = ({ content }) => {
  const { heading = "", subheading = "", cards = [] } = content || {};
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5" 
      )
      .fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
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
    <div ref={sectionRef} className="w-full about-expertise-element h-auto py-[5vh] md:py-[20vh]">
      <div className="about-expertise-container w-5/6 lg:w-2/4 mx-auto">
        <div>
        <h1
          ref={titleRef}
          className="text-faq-title team-title text-white mb-10 text-center opacity-0"
          style={{
            background: "linear-gradient(90deg, #FFFFFF 0%, #767585 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {heading}
        </h1>
          <p ref={subtitleRef} className="text-white text-center my-10 text-[16px] max-w-[70ch] mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {cards.length > 0 &&
            cards.map((data, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="p-4 border-[1px] border-[#2D2D2D] rounded-[1rem] opacity-0" 
              >
                <div className="w-full h-[420px] overflow-hidden rounded-[1rem]">
                  <img
                    src={data?.image?.sizes?.large}
                    alt="about-expertise"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h1 className="text-[22px] text-white">{data.name}</h1>
                    <h4 className="text-[14px] text-white">{data.job_title}</h4>
                  </div>

                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-4 py-2 border-[1px] border-[#2D2D2D] rounded-full cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;
