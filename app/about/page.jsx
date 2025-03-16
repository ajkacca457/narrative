import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutHero from "../components/aboutpage/AboutHero";
import AboutExpertise from "../components/aboutpage/AboutExpertise";
import AboutTestimonial from "../components/aboutpage/AboutTestimonial";
import AboutOurTeam from "../components/aboutpage/AboutOurTeam";
import AboutEnquery from "../components/aboutpage/AboutEnquery";
import CircularPattern from "../components/decors/CircularPattern";

const page = async () => {
  const res = await fetch(
    "https://narrative-10a4cba.ingress-alpha.ewp.live/wp-json/wp/v2/pages?slug=about&acf_format=standard",
    { cache: "no-store" }
  );
  const data = await res.json();
  const acfContent = data?.[0]?.acf?.about_page || [];

  return (
    <div className="relative overflow-hidden">
      {acfContent.map((block, index) => {
        if (
          block.acf_fc_layout === "about_hero" &&
          block.show_about_hero === true
        ) {
          return <AboutHero key={index} content={block} />;
        }
        return null; // Ensures that if the condition is not met, nothing is rendered for that block
      })}

      <div className="relative">
        <div className="hidden md:block w-[800px] h-[800px] absolute -right-[150px] top-[200px] -z-[1] radial-light opacity-40"></div>
      </div>

      <div className="relative">
        {acfContent.map((block, index) => {
          if (
            block.acf_fc_layout === "testimonials" &&
            block.show_testimonials === true
          ) {
            return (
              <>
                <div className="absolute top-[250px]">
                  <img
                    src="/about/worldwide.svg"
                    alt="worldwide"
                    className="opacity-20"
                  />
                </div>
                <AboutTestimonial key={index} content={block} />
              </>
            );
          }
          return null;
        })}
      </div>
      <div className="relative">
        <div className="hidden md:block w-[800px] h-[800px] absolute -left-[150px] top-[200px] -z-[1] radial-light opacity-40"></div>
        <div className="hidden md:block w-[800px] h-[800px] absolute left-1/2 transform -translate-x-1/2 bottom-[200px] -z-[1] radial-light opacity-40"></div>
        <CircularPattern
          customClass="absolute left-[150px] top-[500px]"
          width="189.5"
          height="183"
        />

        <CircularPattern
          customClass="absolute -right-[250px] bottom-[50px]"
          width="600px"
          height="600px"
        />
        {acfContent.map((block, index) => {
          if (block.acf_fc_layout === "our_team" && block.show_team === true) {
            return <AboutOurTeam key={index} content={block} />;
          }
          return null;
        })}
      </div>

      <div className="relative">
        {acfContent.map((block, index) => {
          if (
            block.acf_fc_layout === "display" &&
            block.show_display === true
          ) {
            return <AboutEnquery key={index} content={block} />;
          }
          return null;
        })}
        <CircularPattern
          customClass="absolute -left-[150px] -bottom-[100px] z-10"
          width="600px"
          height="600px"
        />
      </div>
    </div>
  );
};

export default page;
