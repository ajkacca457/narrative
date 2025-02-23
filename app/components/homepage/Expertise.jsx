import React from "react";

const Expertise = ({ content }) => {
  const { title_start = "", title_end = "", cards = [], scrollable_image = "" } = content || {};

  return (
    <div className="w-full expertise h-auto py-[10vh] relative overflow-hidden">
      <div className="expertise-container w-3/4 mx-auto z-50 relative">
        <div className="expertise-title flex items-center gap-x-[5vw] mb-[5vh]">
          <h3 className="text-[50px] text-white">
            {title_start && title_start}{" "}
            {title_end && (
              <span className="text-highlight text-[75px]">{title_end}</span>
            )}
          </h3>
          <img
            src="/arrow.png"
            alt="link-arrow"
            className="w-[40px] h-[40px]"
          />
        </div>

        <div className="expertise-content grid grid-cols-1 md:grid-cols-3 gap-x-4 relative z-50">
          {cards.length > 0 &&
            cards.map((data, index) => (
              <div
                key={index}
                className="expertise-card expertise-gradient text-center text-white p-[25px] rounded-[20px] relative"
              >
                <h4 className="text-[40px] uppercase mb-10 expertise-card-title">
                  {data.card_title}
                </h4>
                <p className="text-[25px] opacity-60">{data.card_content}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Scrollable Image with Infinite Horizontal Scroll */}
      {scrollable_image && (
        <div className="absolute bottom-0 right-0 z-20 overflow-hidden w-full">
          <div className="scrollable-image-container flex animate-scroll">
            <img
              src={scrollable_image?.sizes?.large}
              alt="scrollable"
              className="scrollable-logo"
            />
            <img
              src={scrollable_image?.sizes?.large}
              alt="scrollable"
              className="scrollable-logo ml-[50%]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Expertise;
