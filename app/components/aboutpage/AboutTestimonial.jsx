"use client";
import React from "react";
import Slider from "react-slick";



const aboutTestimonialData = [
    {
      id: 1,
      title:"That was incredible !",
      content:
        "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
      reviewer: "Byeon Wo Soek"
    },
  
    {
        id: 2,
        title:"That was incredible !",
        content:
          "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
        reviewer: "Byeon Wo Soek"
      },
      {
        id: 3,
        title:"That was incredible !",
        content:
          "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
        reviewer: "Byeon Wo Soek"
      },
  ];



const AboutTestimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    

  return (
    <div className="w-full about-testimonial-element h-auto py-[10vh] overflow-hidden">
      <div className="about-testimonial-container text-center">
        <button className="text-white mx-auto w-fit flex px-4 py-2 rounded-[2rem] border-[1px] border-[#2D2D2D] mb-6">
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
            <path
              d="M18.4169 0.308838L19.8456 2.98774L22.5245 4.41648L19.8456 5.84522L18.4169 8.52412L16.9881 5.84522L14.3093 4.41648L16.9881 2.98774L18.4169 0.308838ZM8.66688 3.69425L11.5558 9.11092L16.9724 11.9998L11.5558 14.8887L8.66688 20.3054L5.77799 14.8887L0.361328 11.9998L5.77799 9.11092L8.66688 3.69425ZM21.3058 16.6943L19.5003 13.3089L17.6947 16.6943L14.3093 18.4998L17.6947 20.3054L19.5003 23.6908L21.3058 20.3054L24.6912 18.4998L21.3058 16.6943Z"
              fill="url(#paint0_linear_4170_2422)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4170_2422"
                x1="6.00932"
                y1="23.6908"
                x2="23.8571"
                y2="2.52816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1B8591" />
                <stop offset="0.671875" stop-color="#90F8FF" />
                <stop offset="1" stop-color="#038185" />
              </linearGradient>
            </defs>
          </svg>
          <span>narratives</span>
        </button>
        <h1 className="bg-double-gradient bg-clip-text text-transparent about-testimonial-title text-center text-[60px] max-w-[15ch] mx-auto">
          Don’t Trust Us, Trust Their Voice
        </h1>

        <Slider {...settings} className="mt-10">
          {aboutTestimonialData.map((data) => (
            <div key={data.id} className="about-testimonial-card px-4">
              <div className="about-testimonial-card-content bg-about-testimonial-gradient mt-10 rounded-[1rem] p-8">
                <h3 className="text-white text-[40px] font-semibold">{data.title}</h3>
                <p className="text-white text-[18px] text-center my-5">{data.content}</p>
                <div className="seperator w-1/5 mx-auto h-[2px] bg-white my-8"></div>
                <h4 className="text-white text-[30px]">{data.reviewer}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutTestimonial;
