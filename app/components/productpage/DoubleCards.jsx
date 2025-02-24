import React from "react";
import DoubleCardOne from "./DoubleCardOne";
import DoubleCardTwo from "./DoubleCardTwo";
const DoubleCards = ({ content }) => {
  const { core_package = {}, additional_package = {} } = content || {};
  return (
    <div className="w-full double-cards h-auto py-[20vh] z-50 relative">
      <div className="double-cards-container w-3/4 mx-auto grid grid-cols-2 gap-x-8">
        <h1 className="text-white double-cards-title text-[64px]">
          {core_package?.title}
        </h1>
        <h1 className="text-white double-cards-title text-[64px]">
          {additional_package?.title}
        </h1>
      </div>

      <div className="double-cards-container w-3/4 mx-auto grid grid-cols-2 gap-x-8">
        <DoubleCardOne core_package={core_package} />
        <DoubleCardTwo additional_package={additional_package} />
      </div>
    </div>
  );
};

export default DoubleCards;
