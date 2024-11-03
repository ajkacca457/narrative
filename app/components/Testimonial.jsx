"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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
    <div className="bg-[#343434]">
      <div className="max-w-[90rem] w-[90%] mx-auto py-[20vh]">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="min-h-[300px] m-4 text-white">
            <p>
              "It was truly a pleasure working with the team at Buff on our 10
              Years of Magic Moments campaign. Excellent technical skills, a
              very good understanding of our needs, always on time delivery and
              well organized feedback meetings have led to an extraordinary
              result that we are very proud of! We see Buff as a great partner
              and look forward to future projects."
            </p>
          </div>
          <div className="min-h-[300px] m-4 text-white">
            <p>
              "The process was clearly defined upfront and the team were
              proactive in suggesting other solutions when we faced blockers. We
              very much enjoyed working with Buff and we're really happy with
              the result. Hope to collaborate again on other videos in the
              future!"
            </p>
          </div>
          <div className="min-h-[300px] m-4 text-white">
            <p>
              "It was truly a pleasure working with the team at Buff on our 10
              Years of Magic Moments campaign. Excellent technical skills, a
              very good understanding of our needs, always on time delivery and
              well organized feedback meetings have led to an extraordinary
              result that we are very proud of! We see Buff as a great partner
              and look forward to future projects."
            </p>
          </div>
          <div className="min-h-[300px] m-4 text-white">
            {" "}
            <p>
              "The process was clearly defined upfront and the team were
              proactive in suggesting other solutions when we faced blockers. We
              very much enjoyed working with Buff and we're really happy with
              the result. Hope to collaborate again on other videos in the
              future!"
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
