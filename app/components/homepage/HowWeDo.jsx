import React from "react";

const HowWeDo = ({content}) => {

  const {title_thin="How", title_strong="we do it", cards=[]}= content||{};


  return (
    <div className="w-full how-we-do h-auto py-[10vh]">
      <div className="how-we-do-container w-3/4 mx-auto">
        <div className="how-we-do-tite mb-[5vh] ml-[10vw]">
          <h3 className="text-[75px] text-white uppercase">
            <span className="opacity-60">{title_thin}</span> <span className="text-highlight text-[75px]">{title_strong}</span>
          </h3>
        </div>

        <div className="how-we-do-content grid grid-cols-1 md:grid-cols-3 gap-x-4">
          {cards.length>0 && cards.map((data,index) => (
            <div
              key={index}
              className="how-we-do-card how-we-do-gradient flex items-start gap-x-6 text-white px-[25px] rounded-[20px]"
            >
              <h4
                className="text-[60px] uppercase tracking-[0.3em]"
                style={{
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                }}
              >
                {data.card_title}
              </h4>
              <p className="text-[25px] opacity-60">{data.card_content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
