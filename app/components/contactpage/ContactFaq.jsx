"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Accordion from '../Accordion';

gsap.registerPlugin(ScrollTrigger);

const ContactFaq = ({ content }) => {
  const { title = "Contact Faq", subtitle = "Contact Faq subtitle", faq_item = [] } = content || {};
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

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3" 
      );
  }, []);

  return (
    <div ref={sectionRef} className="faq">
      <div className="w-2/4 mx-auto py-[10vh]">
        <h1
          ref={titleRef}
          className="text-[96px] text-white mb-10 text-center uppercase"
          style={{
            background: "linear-gradient(90deg, #FFFFFF 0%, #767585 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h1>
        <p ref={subtitleRef} className="text-white text-center text-[16px] opacity-60 mb-10">
          {subtitle}
        </p>
        <div>
          <Accordion accordionItems={faq_item} />
        </div>
      </div>
    </div>
  );
}

export default ContactFaq;
