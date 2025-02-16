"use client";
import React from "react";
import Slider from "react-slick";

const projectData= [


    {
        id:1,
        imgSrc:"/slider/slide1.png",
        tags: ["Branding", "Photography"],
        title:"CLASSIC CONCRETE PLANTERS",
        icon:"/preloader.png"
    },

    {
        id:2,
        imgSrc:"/slider/slide2.png",
        tags: ["Branding", "Photography"],
        title:"CLASSIC CONCRETE PLANTERS",
        icon:"/preloader.png"
    },

    {
        id:3,
        imgSrc:"/slider/slide3.png",
        tags: ["Branding", "Photography"],
        title:"CLASSIC CONCRETE PLANTERS",
        icon:"/preloader.png"
    },
]



const Projects = ({content}) => {

    const {project} = content;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings} className="w-3/4 mx-auto my-[10vh]">
     
        {project.length && project.map((data,index) => (    

            <div key={index} className="project-card px-4">
                <img src={data?.image?.sizes?.medium} alt="project" className="w-full h-[300px] object-cover" />
                <div className="project-card-content mt-10">
 
                    <div className="flex justify-between items-center mt-4 border-b border-[#1E1E21] pb-4">
                        <h4 className="text-white text-[28px] max-w-[15ch]">{data.title}</h4>
                        <img src="/preloader.png" alt="icon" />
                    </div>
                </div>
            </div>
        ))}
    </Slider>
  );
};

export default Projects;
