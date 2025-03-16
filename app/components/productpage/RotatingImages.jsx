"use client";

import React, { useEffect, useState } from "react";

const RotatingImages = ({ social_media }) => {
  const [images, setImages] = useState(social_media);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Start animation

      setTimeout(() => {
        setImages((prevImages) => {
          const newImages = [...prevImages];
          const lastImage = newImages.pop(); 
          newImages.unshift(lastImage); 
          return newImages;
        });

        setIsAnimating(false); 
      }, 500); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative col-span-full lg:col-span-1 grid grid-cols-3 lg:grid-cols-2 gap-4 w-full mt-20 lg:mt-0">
      {images.map((social, index) => (
        <div
          key={index}
          className={`transition-transform duration-500 ease-in-out ${
            isAnimating ? "translate-x-4 translate-y-2 opacity-80" : ""
          }`}
        >
          <img
            src={social?.media_image?.sizes?.thumbnail}
            alt={social.alt}
            className="w-[100px] h-[100px] lg:w-auto lg:h-auto object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default RotatingImages;
