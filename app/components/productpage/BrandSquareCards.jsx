import React from "react";

const BrandSquareCards = ({ content }) => {

  const {heading_="hello World", heading_strong="", cards}=content||{};

  return (
    <div className="w-full square-cards h-auto py-[20vh] z-50 relative">
      <div className="how-we-do-tite mb-[5vh] ml-[20vw]">
        <h3 className="text-[75px] text-white uppercase">
          <span className="opacity-60">{heading_}</span>{" "}
          <span className="text-highlight text-[75px]">{heading_strong}</span>
        </h3>
      </div>
      <div className="square-cards-container w-3/4 mx-auto">
        <div className="grid grid-cols-2 gap-6 w-4/6 mx-auto py-[20vh]">
          {cards.length>0 && cards.map((card) => (
            <div
              key={card.id}
              className="border-2 border-[#2D2D2D] p-8 bg-[#2D2D2D]"
            >
              <h3 className="text-white text-[24px] font-semibold brand-card-title mt-4">
                {card.id}{" . "}{card.title}
              </h3>
              <p className="text-[#A7A7A7] mt-4 text-[17px]">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSquareCards;
