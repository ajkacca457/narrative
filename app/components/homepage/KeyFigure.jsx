"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KeyFigure = ({ content }) => {
  const { figure = [] } = content || {};
  const numberRefs = useRef([]);

  useEffect(() => {
    numberRefs.current.forEach((el, index) => {
      const targetValue = parseInt(el.dataset.value, 10); 
      
      gsap.fromTo(
        el,
        { innerText: 0 }, 
        {
          innerText: targetValue, 
          duration: 3, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
          snap: { innerText: 1 }, 
          onUpdate: function () {
            el.innerText = Math.floor(this.targets()[0].innerText); 
          },
        }
      );
    });
  }, []);

  return (
    <div className="key-figure w-full h-auto py-[10vh]">
      <div className="key-figure-container w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6">
        {figure.length > 0 &&
          figure.map((data, index) => (
            <div
              key={index}
              className="key-figure-card text-center text-white p-[25px] rounded-[20px]"
            >
              <h4
                ref={(el) => (numberRefs.current[index] = el)}
                data-value={data.number}
                className="text-key-figure-number uppercase"
              >
                0
              </h4>
              <p className="text-key-figure-content opacity-60">{data.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default KeyFigure;
