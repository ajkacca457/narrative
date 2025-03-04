import Link from "next/link";
import React from "react";

const ShowReel = () => {
  return (
    <div className="w-full h-screen show-reel rounded-[2rem] relative overflow-hidden group">
      <iframe
        className="absolute top-0 left-0 min-w-full min-h-full object-cover scale-[350%] md:scale-[200%] lg:scale-[150%]"
        src="https://www.youtube.com/embed/axK-ieZp1vo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=axK-ieZp1vo"
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Dark overlay */}
      <div className="overlay bg-black opacity-50 w-full h-full absolute top-0 left-0 z-10"></div>

      {/* Content */}
      <div className="content z-50 absolute w-full h-full flex flex-col items-center justify-center">
        <div className="content-container w-3/4 h-3/4 mx-auto flex flex-col justify-center relative">
          {/* Text Content */}
          <div className="text-white text-container transition-all duration-500 ease-in-out xl:group-hover:-translate-x-5">
            <p className="tracking-wide text-[24px] mb-8">Watch Our</p>
            <h1 className="text-white text-showreel-heading font-semibold">
              Showreel
            </h1>
          </div>

          {/* Link with Hover Effect */}
          <Link
            className="flex items-start gap-x-4 text-white cursor-pointer transition-all duration-700 ease-in-out transform xl:group-hover:translate-x-[80%] group-hover:text-teal-400 xl:group-hover:scale-125"
            href="/contact"
          >
            <img
              src="./Icon.png"
              alt="icon"
              className="mt-0 xl:-mt-[5px] transition-all duration-500 group-hover:rotate-[360deg] w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]"
            />
            <div className="transition-all duration-500 group-hover:text-till-400">
              <p className="tracking-wide text-[24px] mb-12">
                Drop your query!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowReel;
