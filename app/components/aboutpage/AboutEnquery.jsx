import React from "react";

const AboutEnquery = ({content}) => {

  const {top_heading="",heading="", subheading="", button_text=""} = content||{};

  return (
    <div className="w-full about-enquiry h-auto py-[20vh] relative z-50">
      <div className="about-enquiry-container w-[1140px] mx-auto rounded-[2rem] relative border-2 border-white p-6">
        <div className="bg-[#1E1E21] rounded-[2rem] py-[10vh]">
          <div className="flex items-center gap-4 w-fit mx-auto">
            <svg
              width="21"
              height="6"
              viewBox="0 0 21 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="20" height="6" rx="3" fill="#00FFFF" />
            </svg>
            <p className="text-white text-[16px]">{top_heading}</p>
            <svg
              width="21"
              height="6"
              viewBox="0 0 21 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="20" height="6" rx="3" fill="#00FFFF" />
            </svg>
          </div>

          <h1 className="text-white text-[64px] font-bold text-center max-w-[15ch] mx-auto">
            {heading}
          </h1>
          <p className="text-[#929292] max-w-[60ch] text-center mx-auto">
            {subheading}
          </p>

          <div className="flex justify-center mt-10">
            <button className="uppercase bg-[#00FFFF] px-4 py-2 rounded-full w-fit mx-auto">
              {button_text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEnquery;
