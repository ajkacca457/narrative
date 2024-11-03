import React from "react";

const TextGrid = ({title, items}) => {
  return (
    <div>
      <div className="max-w-[90rem] w-[90%] mx-auto py-[10vh]">
        <h1 className="text-6xl text-white mb-10">
          {title}
        </h1>
        <div className="w-full grid grid-cols-3 gap-x-4">

           {items.length > 0 && items.map((item, index) => (
            
            <div key={index} className="col-span-1 flex items-start">
                <h4 className="text-5xl text-white gap-x-4">{`0${index+1}`}</h4>
                <div className="text-white ml-6">
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

export default TextGrid;
