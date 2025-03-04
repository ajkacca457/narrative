"use client";
import React, { useState, useEffect } from "react";

const getRandomPosition = (safeZoneRadius = 100, maxRadius = 200, placedPositions = []) => {
  let x, y, validPosition = false;
  let maxAttempts = 50; // Avoid infinite loops

  while (!validPosition && maxAttempts > 0) {
    maxAttempts--;

    const angle = Math.random() * 2 * Math.PI; // Random angle
    const radius = Math.random() * (maxRadius - safeZoneRadius) + safeZoneRadius; // Ensure outside safe zone
    x = Math.cos(angle) * radius;
    y = Math.sin(angle) * radius;

    // Check for overlap with existing positions
    validPosition = placedPositions.every(({ px, py }) => {
      const distance = Math.sqrt((px - x) ** 2 + (py - y) ** 2);
      return distance > 60; // Minimum gap between reviews
    });
  }

  return { x, y };
};

const AboutHero = ({ content }) => {
  const { heading = "", reviews = [] } = content || {};
  const [positions, setPositions] = useState([]);


  useEffect(() => {
    let placedPositions = [];
    const newPositions = reviews.map(() => {
      const pos = getRandomPosition(400, 400, placedPositions);
      placedPositions.push({ px: pos.x, py: pos.y });
      return pos;
    });
    setPositions(newPositions);
  }, [reviews]);

  return (
    <div className="w-full reviews h-auto py-[10vh] relative">
      <div
        className="w-full h-[300px] absolute bottom-[50px] -z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0, 0, 0, 0.9), black 80%)",
        }}
      ></div>{" "}
      <div className="product-hero-container w-full mx-auto relative">
        <div className="absolute -top-[35px] left-1/2 transform -translate-x-1/2 -z-[3]">
          <svg
            viewBox="0 0 1296 1296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-screen h-screen scale-[110%]"
          >
            <circle
              cx="648"
              cy="648"
              r="607"
              stroke="url(#paint0_linear_4162_1526)"
              strokeWidth="2"
            />
            <g filter="url(#filter0_f_4162_1526)">
              <circle
                cx="648"
                cy="648"
                r="607.5"
                stroke="url(#paint1_linear_4162_1526)"
              />
            </g>
            <g filter="url(#filter1_f_4162_1526)">
              <circle
                cx="648"
                cy="648"
                r="607.5"
                stroke="url(#paint2_linear_4162_1526)"
              />
            </g>
            <g filter="url(#filter2_f_4162_1526)">
              <circle
                cx="648"
                cy="648"
                r="607.5"
                stroke="url(#paint3_linear_4162_1526)"
              />
            </g>
            <g filter="url(#filter3_f_4162_1526)">
              <circle
                cx="648"
                cy="648"
                r="607.5"
                stroke="url(#paint4_linear_4162_1526)"
              />
            </g>
            <g filter="url(#filter4_f_4162_1526)">
              <circle
                cx="648"
                cy="648"
                r="607.5"
                stroke="url(#paint5_linear_4162_1526)"
              />
            </g>
            <circle cx="648" cy="648" r="607.5" stroke="#29EAFF" />
            <path
              d="M1143 648C1143 914.731 921.404 1131 648 1131C374.596 1131 153 914.731 153 648C153 381.269 374.596 165 648 165C921.404 165 1143 381.269 1143 648Z"
              stroke="url(#paint6_linear_4162_1526)"
              strokeWidth="2"
            />
            <path
              d="M1005 651.5C1005 858.931 845.119 1027 648 1027C450.881 1027 291 858.931 291 651.5C291 444.069 450.881 276 648 276C845.119 276 1005 444.069 1005 651.5Z"
              stroke="url(#paint7_linear_4162_1526)"
              strokeWidth="2"
            />
            <defs>
              <filter
                id="filter0_f_4162_1526"
                x="0"
                y="0"
                width="1296"
                height="1296"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="20"
                  result="effect1_foregroundBlur_4162_1526"
                />
              </filter>
              <filter
                id="filter1_f_4162_1526"
                x="0"
                y="0"
                width="1296"
                height="1296"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="20"
                  result="effect1_foregroundBlur_4162_1526"
                />
              </filter>
              <filter
                id="filter2_f_4162_1526"
                x="0"
                y="0"
                width="1296"
                height="1296"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="20"
                  result="effect1_foregroundBlur_4162_1526"
                />
              </filter>
              <filter
                id="filter3_f_4162_1526"
                x="0"
                y="0"
                width="1296"
                height="1296"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="20"
                  result="effect1_foregroundBlur_4162_1526"
                />
              </filter>
              <filter
                id="filter4_f_4162_1526"
                x="0"
                y="0"
                width="1296"
                height="1296"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="20"
                  result="effect1_foregroundBlur_4162_1526"
                />
              </filter>
              <linearGradient
                id="paint0_linear_4162_1526"
                x1="1254.87"
                y1="509.818"
                x2="9.381"
                y2="512.665"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#8A4EF6" stop-opacity="0.5" />
                <stop offset="1" stop-color="#AF04FF" stop-opacity="0.2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4162_1526"
                x1="648"
                y1="40"
                x2="648"
                y2="1256"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.22" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_4162_1526"
                x1="648"
                y1="40"
                x2="648"
                y2="1256"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.22" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_4162_1526"
                x1="648"
                y1="40"
                x2="648"
                y2="1256"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.22" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_4162_1526"
                x1="648"
                y1="40"
                x2="648"
                y2="1256"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.22" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_4162_1526"
                x1="648"
                y1="40"
                x2="648"
                y2="1256"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.22" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_4162_1526"
                x1="1143.08"
                y1="538"
                x2="127.022"
                y2="540.38"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4EEBF6" stop-opacity="0.5" />
                <stop offset="1" stop-color="#04D1FF" stop-opacity="0.2" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_4162_1526"
                x1="1005.33"
                y1="565.931"
                x2="271.971"
                y2="567.526"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4EDDF6" stop-opacity="0.5" />
                <stop offset="1" stop-color="#04F7FF" stop-opacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute w-full h-full flex justify-center items-center">
          {reviews.map((review, index) => {
          const { x, y } = positions[index] || { x: 0, y: 0 };

            return (
              <div
                key={index}
                className="absolute bg-[#2A5155] p-3 rounded-full text-white text-center shadow-lg flex items-center w-fit transition-transform duration-700 ease-out m-4"
                style={{
                  transform: `translate(${x}px, ${y}px)`, // Apply random positioning
                }}
              >
                <img
                  src={
                    review?.image?.sizes?.thumbnail ||
                    "https://via.placeholder.com/50"
                  }
                  alt={review.name}
                  className="w-10 h-10 rounded-full mx-auto mb-2"
                />
                <p className="text-xs">{review.content}</p>
                <p className="text-[10px] font-bold">{review.name}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center h-screen flex flex-col justify-center items-center">
          <h1 className="text-white text-hero-front uppercase font-bold about-title z-[200]">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
