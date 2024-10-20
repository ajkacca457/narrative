import React from "react";

const ImageLink = () => {
  return (
    <div className="bg-[#292929]">
      <div className="max-w-[90rem] w-[90%] mx-auto py-[20vh]">
        <img src="/project1.jpg" alt="image" className="w-full" />
        <div className="w-full flex justify-end mt-4">
            <a href="" className="text-white underline">Meet our team</a>
        </div>
      </div>
    </div>
  );
};

export default ImageLink;
