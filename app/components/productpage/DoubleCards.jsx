import React from "react";
import DoubleCardOne from "./DoubleCardOne";
import DoubleCardTwo from "./DoubleCardTwo";
const DoubleCards = ({ content }) => {
  const { core_package = {}, additional_package = {} } = content || {};
  return (
    <div className="w-full double-cards h-auto py-[20vh] z-50 relative">
      <div className="double-cards-container w-3/4 mx-auto block xl:grid xl:grid-cols-2 gap-x-8">
        <DoubleCardOne core_package={core_package} title={core_package?.title||"core packages"}/>
        <DoubleCardTwo additional_package={additional_package} title={additional_package?.title || "additional packages"} />
      </div>
    </div>
  );
};

export default DoubleCards;
