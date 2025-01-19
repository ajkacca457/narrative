import React from "react";

const AboutOurTeam = () => {
  return (
    <div className="w-full about-expertise-element h-auto py-[20vh]">
      <div className="about-expertise-container w-2/4 mx-auto">
        <div>
          <h1 className="text-[96px] font-bold text-white text-center">
            Our Team
          </h1>
          <p className="text-white text-center my-10 text-[16px] max-w-[70ch] mx-auto">
            {" "}
            Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet
            id cursus id blandit. Consectetur maecenas id vivamus integer
            integer aliquam. Donec amet rhoncus ut turpis massa augue faucibus.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-20">
          <div className="p-4 border-[1px] border-[#2D2D2D] rounded-[1rem]">
            <div className="w-full h-[420px] overflow-hidden rounded-[1rem]">
              <img
                src="/about/about-expertise-image.png"
                alt="about-expertise"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h1 className="text-[22px] text-white">John Doe</h1>
                <h4 className="text-[14px] text-white">Creative Director</h4>
              </div>

              <button className="text-white px-4 py-2 border-[1px] border-[#2D2D2D] rounded-full">
                Linkedin
              </button>
            </div>
          </div>
          <div className="p-4 border-[1px] border-[#2D2D2D] rounded-[1rem]">
            <div className="w-full h-[420px] overflow-hidden rounded-[1rem]">
              <img
                src="/about/about-expertise-image.png"
                alt="about-expertise"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h1 className="text-[22px] text-white">John Doe</h1>
                <h4 className="text-[14px] text-white">Creative Director</h4>
              </div>

              <button className="text-white px-4 py-2 border-[1px] border-[#2D2D2D] rounded-full">
                Linkedin
              </button>
            </div>
          </div>
          <div className="p-4 border-[1px] border-[#2D2D2D] rounded-[1rem]">
            <div className="w-full h-[420px] overflow-hidden rounded-[1rem]">
              <img
                src="/about/about-expertise-image.png"
                alt="about-expertise"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h1 className="text-[22px] text-white">John Doe</h1>
                <h4 className="text-[14px] text-white">Creative Director</h4>
              </div>

              <button className="text-white px-4 py-2 border-[1px] border-[#2D2D2D] rounded-full">
                Linkedin
              </button>
            </div>
          </div>
          <div className="p-4 border-[1px] border-[#2D2D2D] rounded-[1rem]">
            <div className="w-full h-[420px] overflow-hidden rounded-[1rem]">
              <img
                src="/about/about-expertise-image.png"
                alt="about-expertise"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h1 className="text-[22px] text-white">John Doe</h1>
                <h4 className="text-[14px] text-white">Creative Director</h4>
              </div>

              <button className="text-white px-4 py-2 border-[1px] border-[#2D2D2D] rounded-full">
                Linkedin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;
