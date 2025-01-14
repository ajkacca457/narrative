"use client";

import React from 'react'
import Slider from "react-slick";



const logoData = [

    {
        id:1,
        imgSrc:"/logoslider/company-1.png",
    },

    {
        id:2,
        imgSrc:"/logoslider/company-2.png",
    },

    {
        id:3,
        imgSrc:"/logoslider/company-3.png",
    },
    {
        id:4,
        imgSrc:"/logoslider/company-1.png",
    },

    {
        id:5,
        imgSrc:"/logoslider/company-2.png",
    },

    {
        id:6,
        imgSrc:"/logoslider/company-3.png",
    },

];

const LogoSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings} className="w-3/4 mx-auto my-[10vh]">
        {logoData.map((data) => (
            <div key={data.id} className="logo-card">
                <img src={data.imgSrc} alt="logo" />
            </div>
        ))}
    </Slider>
  )
}

export default LogoSlider