"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const titleRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".reviews",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    // Title Animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0 }, // Initial state
      { opacity: 1, duration: 0.8, ease: "power2.out" } // Final state
    );

    // Column 1 Animation (Slide from Left)
    tl.fromTo(
      column1Ref.current,
      { x: -100, opacity: 0 }, // Initial state
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, // Final state
      "-=0.5" // Start this animation 0.5 seconds before the title completes
    );

    // Column 2 Animation (Slide from Right)
    tl.fromTo(
      column2Ref.current,
      { x: 100, opacity: 0 }, // Initial state
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, // Final state
      "-=0.5" // Start this animation 0.5 seconds before the title completes
    );
  }, []);

  return (
    <div className="w-full reviews h-auto py-[10vh]">
      <div className="reviews-container w-3/5 mx-auto">
        <div className="reviews-title flex items-center gap-x-[5vw] mb-[5vh]">
          <h3 ref={titleRef} className="text-highlight text-[75px] text-white uppercase">
            Reviews
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-x-8">
          <div ref={column1Ref} className="col-span-1 opacity-0">
            <img
              src="/reviews/person.png"
              alt="review1"
              className="w-full h-auto"
            />
          </div>

          <div ref={column2Ref} className="col-span-1 opacity-0 flex items-center">
            <img
              src="/reviews/review-card.png"
              alt="review1"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
