import React from "react";

const ShowReel = () => {
  return (
    <div className="w-full h-screen show-reel rounded-[2rem] relative">
      <div className="overlay bg-black opacity-30 w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="content z-50 absolute w-full h-full flex flex-col items-center justify-center">
        <div className="content-container w-3/4 h-3/4 mx-auto flex flex-col justify-between">
          <div className="text-white">
            {" "}
            <p className="tracking-wide text-[24px] mb-20">Watch Our</p>
            <h1 className="text-white text-[128px] font-semibold">Showreel</h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="icon-container flex gap-x-4">
              <img src="./Prev.png" alt="previous" />
              <img src="./Next.png" alt="next" />
            </div>

            <div>
              <div className="flex items-start gap-x-4 text-white">
                <img src="./Icon.png" alt="icon" className="-mt-[20px]" />
                <div>
                    <p className="tracking-wide text-[24px] mb-12">Drop your query!</p>
                    <h4 className="tracking-wide text-[24px] font-semibold underline text-white">How can we Help!</h4>
                </div>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowReel;
