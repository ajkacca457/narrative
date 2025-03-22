"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const IconContainer = ({ social_media }) => {
  const imgRefs = useRef({});

  useEffect(() => {
    const images = Object.values(imgRefs.current); // Convert object refs to array

    if (images.length > 0) {
      gsap.fromTo(
        images,
        { opacity: 0, scale: 0.5 }, // Start state
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", stagger: 0.2 } // End state
      );
    }
  }, []);

  return (
    <div className="relative col-span-full lg:col-span-1 grid grid-cols-3 lg:grid-cols-2 gap-x-4 w-full mt-20 lg:mt-0">
      {social_media.map((social, index) => {
        let bgColor = "bg-gradient-to-r from-sky-700 via-sky-500 to-sky-700"; // Default Blue
        if (index === 1)
          bgColor =
            "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600"; // Instagram
        if (index === 2)
          bgColor = "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"; // TikTok
        if (index === 3)
          bgColor = "bg-gradient-to-r from-red-600 to-red-400"; // YouTube

        return (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center ${bgColor} p-4 rounded-full h-4/5 ${
              index === 0 || index === social_media.length - 1
                ? "col-span-2"
                : "col-span-1"
            }`}
          >
            <img
              ref={(el) => (imgRefs.current[index] = el)}
              src={social?.media_image?.sizes?.thumbnail}
              alt={social.alt}
              className="w-[70px] h-[70px] rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default IconContainer;
