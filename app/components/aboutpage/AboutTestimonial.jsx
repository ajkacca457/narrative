"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutTestimonial = ({ content }) => {
  const { top_heading = "", heading = "", cards = [] } = content || {};
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1208, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5" 
      );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full about-testimonial-element h-auto py-[10vh] overflow-hidden"
    >
      <div className="about-testimonial-container text-center">
        <button
          ref={buttonRef}
          className="text-white mx-auto w-fit flex px-4 py-2 rounded-[2rem] border-[1px] border-[#2D2D2D] mb-6"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4169 0.308838L19.8456 2.98774L22.5245 4.41648L19.8456 5.84522L18.4169 8.52412L16.9881 5.84522L14.3093 4.41648L16.9881 2.98774L18.4169 0.308838ZM8.66688 3.69425L11.5558 9.11092L16.9724 11.9998L11.5558 14.8887L8.66688 20.3054L5.77799 14.8887L0.361328 11.9998L5.77799 9.11092L8.66688 3.69425ZM21.3058 16.6943L19.5003 13.3089L17.6947 16.6943L14.3093 18.4998L17.6947 20.3054L19.5003 23.6908L21.3058 20.3054L24.6912 18.4998L21.3058 16.6943Z"
              fill="white"
            />
          </svg>
          <span>{top_heading}</span>
        </button>
        <h1
          ref={headingRef}
          className="bg-double-gradient bg-clip-text text-transparent about-testimonial-title text-center text-about-testimonial-heading max-w-[15ch] mx-auto"
        >
          {heading}
        </h1>

        <Slider {...settings} className="mt-10">
          {cards.length > 0 &&
            cards.map((data, index) => (
              <div key={index} className="about-testimonial-card px-4">
                <div className="about-testimonial-card-content bg-about-testimonial-gradient mt-10 rounded-[1rem] p-8">
                  <h3 className="text-white text-about-testimonial-card-title font-semibold">{data.title}</h3>
                  <p className="text-white text-key-figure-content text-center my-5">{data.content}</p>
                  <div className="seperator w-1/5 mx-auto h-[2px] bg-white my-8"></div>
                  <h4 className="text-white text-[30px]">{data.name}</h4>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutTestimonial;
