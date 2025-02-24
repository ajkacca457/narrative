"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from "../Accordion";

gsap.registerPlugin(ScrollTrigger);

const Faq = ({ content }) => {
  const { title = "FAQ", subtitle = "Frequently asked questions", faq_item = [] } = content || {};

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", 
        toggleActions: "play none none reset",
      },
    });

    // Title animation
    tl.fromTo(
      titleRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Subtitle animation
    tl.fromTo(
      subtitleRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5" 
    );
  }, []);

  return (
    <div ref={sectionRef} className="faq">
      <div className="w-[90%] md:w-3/4 xl:w-2/4 mx-auto py-[10vh]">
        <h1
          ref={titleRef}
          className="text-faq-title text-white mb-10 text-center opacity-0"
          style={{
            background: "linear-gradient(90deg, #FFFFFF 0%, #767585 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h1>
        <p ref={subtitleRef} className="text-white text-center text-[16px] mb-10">
          {subtitle}
        </p>
        <div>
          <Accordion accordionItems={faq_item} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
