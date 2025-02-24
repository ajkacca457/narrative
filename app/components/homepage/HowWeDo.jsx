"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowWeDo = ({ content }) => {
  const { title_thin = "How", title_strong = "we do it", cards = [] } = content || {};

  const titleThinRef = useRef(null);
  const titleStrongRef = useRef(null);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null); 

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", 
        toggleActions: "play none none reset",
      },
    });


    tl.fromTo(
      titleThinRef.current,
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" } 
    );

    tl.fromTo(
      titleStrongRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5" 
    );

    cardRefs.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        `-=${0.4 - index * 0.1}` 
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="w-full how-we-do h-auto py-[10vh]">
      <div className="how-we-do-container w-3/4 mx-auto">
        <div className="how-we-do-title mb-[5vh] ml-[10vw]">
          <h3 className="text-expertise-heading-highlight text-white uppercase">
            <span ref={titleThinRef} className="opacity-60">{title_thin}</span>{" "}
            <span ref={titleStrongRef} className="text-highlight text-expertise-heading-highlight">{title_strong}</span>
          </h3>
        </div>

        <div className="how-we-do-content grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.length > 0 && cards.map((data, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)} 
              className="how-we-do-card how-we-do-gradient flex items-start gap-x-6 text-white px-[25px] rounded-[20px] opacity-0" // Initially hidden
            >
              <h4
                className="text-we-do-card-heading uppercase tracking-[0.3em]"
                style={{
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                }}
              >
                {data.card_title}
              </h4>
              <p className="text-we-do-card-text opacity-60">{data.card_content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
