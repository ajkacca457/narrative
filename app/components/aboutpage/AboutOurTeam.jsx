import React from "react";

const AboutOurTeam = ({content}) => {

  const {heading="",subheading="",cards=[]} = content||{};


  return (
    <div className="w-full about-expertise-element h-auto py-[20vh]">
      <div className="about-expertise-container w-2/4 mx-auto">
        <div>
          <h1 className="text-[96px] font-bold text-white text-center">
            {heading}
          </h1>
          <p className="text-white text-center my-10 text-[16px] max-w-[70ch] mx-auto">
            {" "}
            {subheading}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-20">

          {cards.length>0 && cards.map((data,index) => (
            <div key={index} className="p-4 border-[1px] border-[#2D2D2D] rounded-[1rem]">
              <div className="w-full h-[420px] overflow-hidden rounded-[1rem]">
                <img
                  src={data?.image?.sizes?.large}
                  alt="about-expertise"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h1 className="text-[22px] text-white">{data.name}</h1>
                  <h4 className="text-[14px] text-white">{data.job_title}</h4>
                </div>

                <a src={data.linkedin} target="_blank" className="text-white px-4 py-2 border-[1px] border-[#2D2D2D] rounded-full cursor-pointer">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;
