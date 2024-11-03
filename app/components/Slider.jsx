"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

import React from "react";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div className="w-[90%] mx-auto py-[5vh]">
      <div className="carousel-container overflow-x-auto flex space-x-4 p-4">
  <div className="min-h-[300px] flex-shrink-0 text-white">
    <div className="w-full relative">
      <Image
        src="/project1.jpg"
        alt="logo"
        className="w-full h-full rounded-lg"
        width={800}
        height={800}
      />
      <div className="tags absolute bottom-2 left-2">
        <span className="bg-black text-white px-2 py-1 rounded">Design</span>
      </div>
    </div>
    <h3 className="text-2xl mt-2">
      Digital transformation for a leading office and interior company.
    </h3>
  </div>

  <div className="min-h-[300px] flex-shrink-0 text-white">
    <div className="w-full relative">
      <Image
        src="/project1.jpg"
        alt="logo"
        className="w-full h-full rounded-lg"
        width={800}
        height={800}
      />
      <div className="tags absolute bottom-2 left-2">
        <span className="bg-black text-white px-2 py-1 rounded">Design</span>
      </div>
    </div>
    <h3 className="text-2xl mt-2">
      Digital transformation for a leading office and interior company.
    </h3>
  </div>

  <div className="min-h-[300px] flex-shrink-0 text-white">
    <div className="w-full relative">
      <Image
        src="/project1.jpg"
        alt="logo"
        className="w-full h-full rounded-lg"
        width={800}
        height={800}
      />
      <div className="tags absolute bottom-2 left-2">
        <span className="bg-black text-white px-2 py-1 rounded">Design</span>
      </div>
    </div>
    <h3 className="text-2xl mt-2">
      Digital transformation for a leading office and interior company.
    </h3>
  </div>


  <div className="min-h-[300px] flex-shrink-0 text-white">
    <div className="w-full relative">
      <Image
        src="/project1.jpg"
        alt="logo"
        className="w-full h-full rounded-lg"
        width={800}
        height={800}
      />
      <div className="tags absolute bottom-2 left-2">
        <span className="bg-black text-white px-2 py-1 rounded">Design</span>
      </div>
    </div>
    <h3 className="text-2xl mt-2">
      Digital transformation for a leading office and interior company.
    </h3>
  </div>


  {/* Add more carousel items as needed */}
</div>

      </div>
    </div>
  );
};

export default Slider;
