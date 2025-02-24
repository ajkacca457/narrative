"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Expertise = ({ content }) => {
  const {
    title_start = "",
    title_end = "",
    cards = [],
    scrollable_image = "",
  } = content || {};

  const titleStartRef = useRef(null);
  const titleEndRef = useRef(null);
  const arrowRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollableImageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".expertise",
        start: "top 80%", 
        toggleActions: "play none none reset",
      },
    });


    tl.fromTo(
      titleStartRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    tl.fromTo(
      titleEndRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5" 
    );

    tl.fromTo(
      arrowRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5" 
    );

    cardRefs.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        `-=${0.4 - index * 0.1}` 
      );
    });

    // Infinite Horizontal Scroll for Scrollable Image
    if (scrollableImageRef.current) {
      gsap.to(scrollableImageRef.current, {
        x: "-100%", 
        repeat: -1, 
        duration: 15,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="w-full expertise h-auto py-[10vh] relative overflow-hidden">
      <div className="expertise-container w-3/4 mx-auto z-50 relative">
        {/* Title Section */}
        <div className="expertise-title flex items-center gap-x-[5vw] mb-[5vh]">
          <h3 className="text-expertise-heading-narrow text-white">
            <span ref={titleStartRef}>{title_start}</span>{" "}
            <span ref={titleEndRef} className="text-highlight text-expertise-heading-highlight">
              {title_end}
            </span>
          </h3>
          <img
            ref={arrowRef}
            src="/arrow.png"
            alt="link-arrow"
            className="w-[40px] h-[40px]"
          />
        </div>
        
        <div className="expertise-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-50">
          {cards.length > 0 &&
            cards.map((data, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="expertise-card expertise-gradient text-center text-white p-[25px] rounded-[20px] relative opacity-0"
              >
                <h4 className="text-expertise-card-heading uppercase mb-10 expertise-card-title">
                  {data.card_title}
                </h4>
                <p className="text-expertise-card-description opacity-60">{data.card_content}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Scrollable Image with Infinite Horizontal Scroll */}
      {scrollable_image && (
        <img
          ref={scrollableImageRef}
          src={scrollable_image?.sizes?.large}
          alt="scrollable"
          className="scrollable-logo absolute bottom-0 right-0 z-20 overflow-hidden"
        />
      )}
    </div>
  );
};

export default Expertise;
