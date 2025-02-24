"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProductHero = ({ content }) => {
  const { heading = "" } = content || {};

  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Title animation: Staggered fade-in while keeping spaces
    gsap.set(titleRef.current, { opacity: 1 }); // Ensure visibility
    const words = heading.split(" "); // Split words instead of letters
    titleRef.current.innerHTML = words
      .map(word => `<span class="inline-block opacity-0">${word}&nbsp;</span>`)
      .join("");

    tl.to(titleRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.05,
      ease: "power2.out",
      stagger: 0.1, // Stagger effect for words
    });

    // Image animation: Slide in from the right
    tl.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5" // Start before title animation ends
    );

    // Button animation: Slide up from bottom with bounce effect
    tl.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "bounce.out" },
      "-=0.3" // Start slightly before image animation ends
    );
  }, [heading]);

  return (
    <div className="w-full reviews h-auto py-[10vh] relative">
      <img
        src="/product/Line_BG.png"
        alt="product-grid"
        className="absolute h-full w-[600px] right-[100px] top-0 z-20 opacity-60"
      />
      <div className="product-hero-container w-3/4 mx-auto relative z-50">
        <div className="grid grid-cols-4 place-items-center">
          <div className="col-span-3">
            <h1 ref={titleRef} className="text-white text-[96px] max-w-[17ch] opacity-0">
              {heading}
            </h1>
          </div>

          <div className="relative col-span-1">
            <img
              ref={imageRef}
              src="/product/product-hero.png"
              alt="product-hero"
              className="relative z-50 opacity-0"
            />
            <button
              ref={buttonRef}
              className="text-white text-[18px] mt-6 py-6 px-8 w-full mx-auto font-bold bg-[#1E1E21] rounded-full opacity-0"
            >
              Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
