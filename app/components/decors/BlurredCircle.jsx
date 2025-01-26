import React from "react";

const BlurredCircle = ({customClass}) => {
  return (
    <svg
      width="776"
      height="947"
      viewBox="0 0 776 947"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <g filter="url(#filter0_f_2184_34)">
        <circle cx="188" cy="359" r="188" fill="#00FFFF" fillOpacity="0.7" />
      </g>
      <defs>
        <filter
          id="filter0_f_2184_34"
          x="-400"
          y="-229"
          width="1176"
          height="1176"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur_2184_34"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BlurredCircle;
