"use client";

import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    content:
      "We were facing constant cyber threats and had no idea how vulnerable our systems were. The team at Protecure not only identified the gaps but also implemented a comprehensive security solution that gave us peace of mind. Their professionalism and dedication to protecting our business have been outstanding.",
    person: {
      profileImg: (
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5Z"
            fill="#D9D9D9"
          />
        </svg>
      ),
      name: "John Doe",
      details: "CEO,ABC Company",
    },
  },

  {
    id: 2,
    content:
      "We were facing constant cyber threats and had no idea how vulnerable our systems were. The team at Protecure not only identified the gaps but also implemented a comprehensive security solution that gave us peace of mind. Their professionalism and dedication to protecting our business have been outstanding.",
    person: {
      profileImg: (
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5Z"
            fill="#D9D9D9"
          />
        </svg>
      ),
      name: "John Doe",
      details: "CEO,ABC Company",
    },
  },

  {
    id: 3,
    content:
      "We were facing constant cyber threats and had no idea how vulnerable our systems were. The team at Protecure not only identified the gaps but also implemented a comprehensive security solution that gave us peace of mind. Their professionalism and dedication to protecting our business have been outstanding.",
    person: {
      profileImg: (
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5Z"
            fill="#D9D9D9"
          />
        </svg>
      ),
      name: "John Doe",
      details: "CEO,ABC Company",
    },
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full testimonial h-auto pb-[20vh] z-50 relative">
      <div className="testimonial-container w-3/4 mx-auto">
        <p className="text-center text-blue-800 font-semibold">Testimonials</p>
        <h1 className="text-white text-center text-[85px] max-w-[18ch] mx-auto">
          What Do Clients Say About Our Services?
        </h1>

        <Slider {...settings}>
          {testimonialData.map((data) => (
            <div key={data.id} className="testimonial-card px-4">
              <div className="testimonial-card-content bg-white mt-10 rounded-[1rem] p-8">
                <p className="text-black text-[16px]">{data.content}</p>

                <div className="flex mt-8">
                    <div className="profile-img mr-4">{data.person.profileImg}</div>
                    <div>
                        <h3 className="text-black text-[24px] font-semibold">{data.person.name}</h3>
                        <p className="text-black text-[16px]">{data.person.details}</p>
                    </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
