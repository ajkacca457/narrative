"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Accordion = ({ accordionItems }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionRef = useRef(null); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    gsap.fromTo(
      accordionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 50%", 
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  const plusSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
    </svg>
  );

  const minusSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
    </svg>
  );

  return (
    <div ref={accordionRef} className="accordion w-full col-span-2 opacity-0 relative z-[100]">
      {accordionItems.map(({ id, title, content }) => (
        <div key={id} className="border border-[#45454b] px-10 py-4 my-2 rounded-[60px] backdrop-blur-sm">
          <button onClick={() => toggleAccordion(id)} className="w-full flex justify-between items-center py-5 text-white">
            <span className="text-accordion-heading text-left">{title}</span>
            <span className="text-black bg-white p-4 rounded-full transition-transform duration-300">
              {openIndex === id ? minusSVG : plusSVG}
            </span>
          </button>
          <div
            style={{
              maxHeight: openIndex === id ? "1000px" : "0",
            }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="pb-5 text-[#929292] text-accordion-content accordion-content" dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
