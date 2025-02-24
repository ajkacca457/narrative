"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandSquareCards = ({ content }) => {
  const { heading_ = "Hello World", heading_strong = "", cards = [] } = content || {};
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
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
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

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
    <div ref={sectionRef} className="w-full square-cards h-auto py-[20vh] z-50 relative">
      <div className="how-we-do-tite mb-[5vh] ml-[20vw]">
        <h3 ref={titleRef} className="text-[75px] text-white uppercase opacity-0">
          <span className="opacity-60">{heading_}</span>{" "}
          <span className="text-highlight text-[75px]">{heading_strong}</span>
        </h3>
      </div>
      <div className="square-cards-container w-3/4 mx-auto">
        <div className="grid grid-cols-2 gap-6 w-4/6 mx-auto py-[20vh]">
          {cards.length > 0 &&
            cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="border-2 border-[#2D2D2D] p-8 bg-[#2D2D2D] opacity-0"
              >
                <h3 className="text-white text-[24px] font-semibold brand-card-title mt-4">
                  {card.id}{" . "}{card.title}
                </h3>
                <p className="text-[#A7A7A7] mt-4 text-[17px]">
                  {card.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSquareCards;
