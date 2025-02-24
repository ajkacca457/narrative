"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ content }) => {
  const { project = [] } = content || {};
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    if (sliderContainerRef.current) {
      gsap.set(sliderContainerRef.current, { opacity: 0, y: 100 }); 

      ScrollTrigger.create({
        trigger: sliderContainerRef.current,
        start: "top 80%", 
        toggleActions: "play reverse play reverse", 
        onEnter: () => {
          gsap.to(sliderContainerRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(sliderContainerRef.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets & mid-size screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For small screens (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div ref={sliderContainerRef} className="w-3/4 mx-auto my-[10vh] opacity-0 translate-y-10">
      <Slider {...settings}>
        {project.length > 0 &&
          project.map((data, index) => (
            <div key={index} className="project-card px-4">
              <img
                src={data?.image?.sizes?.large}
                alt="project"
                className="w-full h-[300px] object-cover"
              />
              <div className="project-card-content mt-10">
                <div className="flex justify-between items-center mt-4 border-b border-[#1E1E21] pb-4">
                  <h4 className="text-white text-[28px] max-w-[15ch]">{data.title}</h4>
                  <img src="/preloader.png" alt="icon" />
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Projects;
