import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutHero from "../components/aboutpage/AboutHero";
import AboutExpertise from "../components/aboutpage/AboutExpertise";
import AboutTestimonial from "../components/aboutpage/AboutTestimonial";
import AboutOurTeam from "../components/aboutpage/AboutOurTeam";
import AboutEnquery from "../components/aboutpage/AboutEnquery";

const page = () => {
  return (
    <div>
      <AboutHero />
      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -right-[150px] top-[200px] -z-[1] radial-light opacity-40"></div>
        <AboutExpertise />
      </div>
      <AboutTestimonial />
      <AboutOurTeam />
      <AboutEnquery />
    </div>
  );
};

export default page;
