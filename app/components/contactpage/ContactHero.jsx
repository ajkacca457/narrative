"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactHero = ({ content }) => {
  const { contact_hero_heading = "Contact Us" } = content;
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "bounce.out",
        delay: 0.2, 
      }
    );
  }, []);

  return (
    <div className="w-full reviews h-auto py-[20vh] relative">
      <img
        src="/product/Line_BG.png"
        alt="product-grid"
        className="absolute h-full w-[600px] right-[100px] top-0 z-20 opacity-60"
      />
      <img
        src="/product/Line_BG.png"
        alt="product-grid"
        className="absolute h-full w-[600px] left-[100px] top-0 z-20 opacity-60"
      />

      <div className="product-hero-container w-3/4 mx-auto relative z-50">
        <h1
          ref={headingRef} 
          className="text-white text-center text-hero-front font-extrabold uppercase"
        >
          {contact_hero_heading}
        </h1>
      </div>
    </div>
  );
};

export default ContactHero;
