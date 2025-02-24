import React from "react";

const BrandCards = ({content}) => {

  const {title="", subtitle="", cards=[]} = content || {};


  return (
    <div className="w-full brand-cards-element h-auto py-[20vh]">
      <div className="brand-cards-container w-3/5 mx-auto">
        <h1 className="brand-cards-title text-white text-center text-[75px] max-w-[17ch] mx-auto">
          {title}
        </h1>
        <p className="text-[#A7A7A7] max-w-[55ch] text-center mx-auto mt-6">
          {subtitle}
        </p>

        <div className="grid grid-cols-3 gap-6 mt-12">
          {cards.length>0 && cards.map((card) => (
            <div key={card.id} className="brand-card text-center">
              <h3 className="text-white text-[22px] font-semibold brand-card-title mt-4">
                {card.title}
              </h3>
              <p className="text-[#A7A7A7] mt-6 text-[18px] brand-card-description">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCards;
