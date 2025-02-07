import React from "react";

const AboutExpertise = () => {
  return (
    <div className="w-full about-expertise-element h-auto py-[10vh] -mt-[30vh]">
      <div className="about-expertise-container w-2/4 mx-auto">
        <div className="grid grid-cols-2 gap-x-[100px]">
          <div className="text-white flex flex-col gap-y-4 justify-between">
            <h1 className="text-[48px]">
              Mastering the Art of Digital Solutions
            </h1>
            <p className="text-[16px] text-[#929292]">
              Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet
              id cursus id blandit. Consectetur maecenas id vivamus integer
              integer aliquam. Donec amet rhoncus ut turpis massa augue
              faucibus.
            </p>
            <div>
              <div className="my-4">
                <div className="flex justify-between">
                  <h4>Client Satisfaction</h4>
                  <h4>98%</h4>
                </div>
                <progress value="98" max="100" className="w-full"></progress>
              </div>
              <div className="my-4">
                <div className="flex justify-between">
                  <h4>Client Satisfaction</h4>
                  <h4>98%</h4>
                </div>
                <progress value="98" max="100" className="w-full"></progress>
              </div>
              <div className="my-4">
                <div className="flex justify-between">
                  <h4>Client Satisfaction</h4>
                  <h4>98%</h4>
                </div>
                <progress value="98" max="100" className="w-full"></progress>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 z-10">
              <svg
                width="612"
                height="329"
                viewBox="0 0 612 329"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M376.51 277.975C298.383 310.527 219.827 327.266 155.991 328.03C124.071 328.412 95.8583 324.8 73.2274 317.192C50.5997 309.585 33.5863 297.997 23.9877 282.436C14.3891 266.876 13.0723 248.748 18.9814 229.251C24.8913 209.752 38.0222 188.914 57.2638 167.979C95.746 126.112 158.607 83.9293 236.733 51.3777C314.86 18.8261 393.416 2.08744 457.253 1.32344C489.172 0.941426 517.385 4.55362 540.016 12.1614C562.644 19.7681 579.657 31.3561 589.256 46.9167C598.854 62.4774 600.171 80.6055 594.262 100.102C588.352 119.601 575.221 140.44 555.979 161.374C517.497 203.241 454.637 245.424 376.51 277.975Z"
                  stroke="#07C1C8"
                />
                <path
                  d="M362.329 282.961C279.617 307.064 198.502 315.595 134.233 309.92C102.097 307.083 74.1997 300.696 52.4273 290.947C30.6574 281.199 15.0486 268.11 7.40108 251.872C-0.246477 235.634 0.753517 217.705 9.19551 199.153C17.6385 180.599 33.5123 161.457 55.5416 142.835C99.5984 105.593 168.201 70.495 250.913 46.3921C333.625 22.2891 414.74 13.7578 479.009 19.4328C511.145 22.2704 539.043 28.6576 560.815 38.4063C582.585 48.1538 598.194 61.2432 605.841 77.4812C613.489 93.7193 612.489 111.649 604.047 130.2C595.604 148.754 579.73 167.896 557.701 186.518C513.644 223.76 445.041 258.858 362.329 282.961Z"
                  stroke="#1FCDD3"
                />
                <path
                  d="M4.80425 261.5C9.72744 258.784 13.7845 254.727 16.5 249.804C19.2155 254.727 23.2726 258.784 28.1957 261.5C23.2726 264.216 19.2155 268.273 16.5 273.196C13.7845 268.273 9.72744 264.216 4.80425 261.5Z"
                  fill="#1FD372"
                  stroke="white"
                  strokeWidth="4"
                />
                <path
                  d="M583.804 64.5C588.727 61.7845 592.784 57.7274 595.5 52.8042C598.216 57.7274 602.273 61.7845 607.196 64.5C602.273 67.2155 598.216 71.2726 595.5 76.1957C592.784 71.2726 588.727 67.2155 583.804 64.5Z"
                  fill="#1FD372"
                  stroke="white"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <img src="/about/about-expertise-image.png" alt="about-expertise" className="relative z-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExpertise;
