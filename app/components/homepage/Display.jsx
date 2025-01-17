import React from "react";

const Display = () => {
  return (
    <div className="w-full h-auto py-[10vh] display">
      <div>
        <div className="text-center">
          <h3 className="text-[64px] text-white">WE CREATE </h3>
          <h2 className="text-[96px] text-white uppercase">Videos/Brands/Narrative</h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 mt-10 w-[90%] mx-auto">
          <img src="/display/1.png" alt="image-1" />
          <img src="/display/2.png" alt="image-2" />
          <img src="/display/3.png" alt="image-3" />
          <img src="/display/4.png" alt="image-4" />
        </div>
      </div>
    </div>
  );
};

export default Display;
