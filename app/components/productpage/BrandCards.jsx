"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandCards = ({ content }) => {
  const { title = "", subtitle = "", cards = [] } = content || {};

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
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5" 
    );

    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, 
      },
      "-=0.5"
    );
  }, []);

  return (
    <div ref={sectionRef} className="w-full brand-cards-element h-auto py-[20vh]">
      <div className="brand-cards-container w-3/5 mx-auto">
        <h1 ref={titleRef} className="brand-cards-title text-white text-center text-[75px] max-w-[17ch] mx-auto opacity-0">
          {title}
        </h1>

        <p ref={subtitleRef} className="text-[#A7A7A7] max-w-[55ch] text-center mx-auto mt-6 opacity-0">
          {subtitle}
        </p>

        <div className="grid grid-cols-3 gap-6 mt-12">
          {cards.length > 0 &&
            cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="brand-card text-center opacity-0"
              >
                <h3 className="text-white text-[22px] font-semibold brand-card-title mt-4">
                  {card.title}
                </h3>
                <p className="text-[#A7A7A7] mt-6 text-[18px] brand-card-description">
                  {card.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
