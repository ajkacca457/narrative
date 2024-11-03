import React from "react";

const Reveal = ({ title, items }) => {
  return (
    <div className="bg-[#343434]">
      <div className="max-w-[90rem] w-[90%] mx-auto py-[10vh]">
        <h1 className="text-6xl text-white mb-10">{title}</h1>
        <div className="w-full grid grid-cols-3 gap-x-4">
          {items.length > 0 &&
            items.map((item, index) => (
              <div className="col-span-1 flex items-center relative group min-h-[300px] overflow-hidden">
                <div className="absolute top-0 left-0 bg-black w-full h-full flex flex-col justify-center items-center transition-all duration-200 group-hover:translate-x-[50vw]">
                  <h4 className="text-5xl text-white gap-x-4">{item.title}</h4>
                </div>
                <div className="text-white ml-6 h-full">
                  <h2 className="text-3xl mb-4">{item.title}</h2>
                  <p className="max-w-[30ch]">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Reveal;
