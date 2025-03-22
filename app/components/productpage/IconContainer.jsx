"use client";

import React, { useEffect, useState } from "react";

const IconContainer = ({ social_media }) => {
  return (
    <div className="relative col-span-full lg:col-span-1 grid grid-cols-3 lg:grid-cols-2 gap-x-4 w-full mt-20 lg:mt-0">
      {social_media.map((social, index) => {
        let bgColor = "bg-gradient-to-r from-sky-700 via-sky-500 to-sky-700";; // Default Blue for first item
        if (index === 1)
          bgColor =
            "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600"; // Instagram
        if (index === 2) bgColor = "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"; // TikTok (gradient from gray-700 to gray-400)
        if (index === 3) bgColor = "bg-gradient-to-r from-red-600 to-red-400"; // YouTube (gradient from red-600 to red-400)
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
