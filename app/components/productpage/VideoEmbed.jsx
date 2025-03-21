"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoEmbed = ({ content }) => {
  const { video = "" } = content || {};
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%", 
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <div className="w-full video-embed h-auto py-[20vh]">
      <div
        ref={videoRef}
        className="video-container w-[90%] max-w-[1140px] overflow-hidden mx-auto rounded-[2rem] relative border-2 border-white p-6 opacity-0 scale-50"
      >
        <div dangerouslySetInnerHTML={{ __html: video }} className="iframe-container"/>
      </div>
    </div>
  );
};

export default VideoEmbed;
