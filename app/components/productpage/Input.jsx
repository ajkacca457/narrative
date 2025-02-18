import React from "react";

const Input = ({ content }) => {
  const {
    input_image = "",
    input_heading_highlight = "",
    input_heading_light = "",
    input_description = "",
    input_logos = [],
  } = content || {};

  return (
    <div className="w-full input-element h-auto py-[20vh]">
      <div className="input-element-container w-3/4 mx-auto">
        <div className="flex gap-x-[5vw]">
          <img src={input_image?.sizes?.large} alt="input-bg" />

          <div className="text-white">
            <h3 className="text-[48px] font-semibold">
              <span className="bg-[#00FFE1] text-black p-[5px] rounded-2xl">
                {input_heading_highlight}
              </span>{" "}
              {input_heading_light}
            </h3>
            <p className="text-[20px] text-[#929292] mt-6">
              {input_description}
            </p>
          
            {input_logos.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-6">
                {input_logos.map((logo, index) => (
                  <img key={index} src={logo?.logo?.sizes?.medium} alt="logo" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
