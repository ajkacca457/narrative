"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContentGrid from "./ContentGrid";

gsap.registerPlugin(ScrollTrigger);

const Display = ({content}) => {

  const { title="Narratives", top_title="We Create", display_videos=[] } = content || {};

  const svgRef = useRef(null);
  const h3Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".display",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      svgRef.current,
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );


    tl.fromTo(
      h3Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5" 
    );


    tl.fromTo(
      h2Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5" 
    );
  }, []);

  return (
    <div className="w-full h-auto pt-[20px] pb-[10vh] display">
      <div className="text-center">
        {/* SVG Slide Up Animation */}
        <svg
          width="213"
          height="230"
          ref={svgRef}
          viewBox="0 0 213 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <g opacity="0.3" clip-path="url(#clip0_2184_71)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M98.1349 99.4937C98.7027 100.104 99.1761 100.841 99.6484 101.577C102.365 105.322 105.58 109.627 106.965 114.158C108.744 120.148 107.783 124.721 105.236 128.135C101.647 132.937 94.4492 135.294 87.3242 134.774C80.2439 134.287 73.2441 131.123 69.751 125.638C67.331 121.914 66.5196 117.022 68.4976 111.042C70.7008 104.251 75.9865 100.104 82.5063 97.8361C84.9983 96.9226 87.5462 96.4414 90.2392 96.0651C88.4439 94.1661 86.6288 92.2522 84.7838 90.317C78.5743 84.2131 71.4502 78.6131 64.1613 73.8689C54.6085 67.4707 44.3413 62.8957 33.1658 60.1951C32.1869 59.8704 31.56 58.8252 31.7924 57.8224C32.0261 56.8203 33.0533 56.205 34.1247 56.4023C45.7316 59.222 56.4414 63.9253 66.357 70.59C73.7574 75.6104 81.185 81.2382 87.5044 87.6178C90.0968 90.295 92.6343 92.9312 95.046 95.6723C100.961 95.5024 106.829 96.276 111.419 97.4824C141.786 106.008 165.438 141.085 178.678 168.352C179.155 169.287 178.791 170.39 177.833 170.862C176.873 171.333 175.748 170.901 175.271 169.966C162.447 143.588 139.788 109.432 110.374 101.212C106.914 100.246 102.588 99.6231 98.1349 99.4937ZM93.2796 99.6572C94.4558 100.907 95.5311 102.279 96.5087 103.775C98.9286 107.303 102.012 111.121 103.326 115.209C104.681 119.717 104.114 123.212 102.228 125.741C99.2078 129.786 93.3475 131.362 87.6232 130.889C81.7617 130.512 75.8465 128.141 73.0211 123.534C71.1671 120.616 70.6067 116.883 72.0963 112.306C73.9651 106.637 78.4433 103.269 83.7538 101.485C86.7885 100.382 90.0362 99.8257 93.2796 99.6572Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M177.797 170.052C177.813 169.086 177.606 167.958 177.397 166.828C177.033 164.608 176.498 162.457 176.519 160.91C176.531 151.539 176.662 140.301 179.631 131.334C179.926 130.377 181.024 129.812 182.025 130.153C183.025 130.493 183.621 131.515 183.233 132.599C180.449 141.116 180.431 151.851 180.332 160.963C180.37 162.554 181.002 165.165 181.399 167.409C181.687 169.378 181.747 171.181 181.235 172.566C180.999 173.37 179.907 174.33 177.915 174.046C175.138 173.579 168.842 170.344 168.203 170.072C161.738 167.299 155.938 165.012 148.907 167.297C147.939 167.566 146.874 166.982 146.462 166.095C146.143 165.08 146.735 163.949 147.704 163.68C155.689 161.116 162.446 163.322 169.778 166.534C170.181 166.828 173.926 168.785 176.829 169.735C177.175 169.793 177.454 169.997 177.797 170.052Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2184_71">
              <rect
                width="165.307"
                height="189.429"
                fill="white"
                transform="translate(212.946 181.368) rotate(163.224)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Animated Headings */}
        <h3 ref={h3Ref} className="text-display-subheading text-white opacity-0">
          {top_title}
        </h3>
        <h2 ref={h2Ref} className="text-display-heading text-white uppercase opacity-0">
          {title}
        </h2>
      </div>

      <ContentGrid videos={display_videos} />
    </div>
  );
};

export default Display;
