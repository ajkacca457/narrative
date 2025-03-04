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
        start: "top 60%", 
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
      <div className="how-we-do-tite mb-[5vh] text-center lg:text-left lg:ml-[20vw]">
        <h3 ref={titleRef} className="text-square-card-heading text-white uppercase opacity-0">
          <span className="opacity-60">{heading_}</span>{" "}
          <span className="text-highlight text-square-card-heading">{heading_strong}</span>
        </h3>
      </div>
      <div className="square-cards-container w-4/5 lg:w-3/4 mx-auto backdrop-blur-sm border border-gray-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-5/6 lg:w-4/6 mx-auto py-[20vh]">
          {cards.length > 0 &&
            cards.map((card, index) => (
              <div className="text-center w-full max-w-[422px] [background:linear-gradient(45deg,#172033,theme(colors.gray.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.gray.600/.48)_80%,_theme(colors.teal.500)_86%,_theme(colors.teal.300)_90%,_theme(colors.teal.500)_94%,_theme(colors.gray.600/.48))_border-box] border border-transparent animate-border" 
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              >
                <div class="p-5">
                  <div class="flex justify-between items-center">
                    <div>
                      <h3 className="text-white text-[22px] font-semibold brand-card-title mt-4">
                        {card.id}{" . "}{card.title}
                      </h3>
                      <p className="text-[#A7A7A7] mt-6 text-[18px] brand-card-description">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSquareCards;
