import React from "react";

const Input = () => {
  return (
    <div className="w-full input-element h-auto py-[20vh]">
      <div className="input-element-container w-3/4 mx-auto">
        <div className="flex gap-x-[5vw]">
          <img src="/product/Frame.png" alt="input-bg" />

          <div className="text-white">
            <h3 className="text-[48px] font-semibold">
              <span className="bg-[#00FFE1] text-black p-[5px] rounded-2xl">One Time</span> Input
            </h3>
            <p className="text-[20px] text-[#929292] mt-6">
              One 1-2 hour call, and you're set with a full month of tailored,
              high-impact video and written content-no ongoing input required.
              From strategy to creation, we handle every detail, freeing up your
              time while delivering results that keep your business thriving and
              your audience engaged.
            </p>
            <img src="/product/logo-client.png" alt="logo-placeholder" className="mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
