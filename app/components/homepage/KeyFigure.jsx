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
      if (!el) return;
      const targetValue = parseInt(el.dataset.value, 10);
      const numberText = el.dataset.text || "";

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
            el.innerText = `${Math.floor(this.targets()[0].innerText)}${numberText}`;
          },
        }
      );
    });
  }, []);

  // Dynamically set grid columns with a cap at 4
  const gridCols = figure.length > 0 ? `grid-cols-${Math.min(figure.length, 4)}` : "grid-cols-1";

  return (
    <div className="key-figure w-full h-auto py-[10vh] flex justify-center">
      <div
        className={`key-figure-container w-3/4 mx-auto grid ${gridCols} gap-x-6 justify-center`}
      >
        {figure.length > 0 &&
          figure.map((data, index) => (
            <div
              key={index}
              className="key-figure-card text-center text-white p-[25px] rounded-[20px]"
            >
              <h4
                ref={(el) => (numberRefs.current[index] = el)}
                data-value={data.number}
                data-text={data.number_text}
                className="text-key-figure-number uppercase"
              >
                0{data.number_text}
              </h4>
              <p className="text-key-figure-content opacity-60">{data.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default KeyFigure;
