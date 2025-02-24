"use client";

import React from 'react'
import Slider from "react-slick";

const LogoSlider = ({content}) => {

    const {logos= []} = content|| {};   
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };

  return (
    <Slider {...settings} className="w-3/4 mx-auto my-[10vh]">
        {logos.length>0 && logos.map((data) => (
            <div key={data.id} className="logo-card">
                <img src={data?.logo?.sizes?.large} alt="logo" />
            </div>
        ))}
    </Slider>
  )
}

export default LogoSlider