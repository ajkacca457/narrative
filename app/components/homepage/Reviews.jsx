import React from "react";

const Reviews = () => {
  return (
    <div className="w-full reviews h-auto py-[10vh]">
      <div className="reviews-container w-3/5 mx-auto">
        <div className="reviews-tite flex items-center gap-x-[5vw] mb-[5vh]">
          <h3 className="text-highlight text-[75px] text-white uppercase">
            Reviews
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-x-8">
          <div className="col-span-1">
            <img
              src="/reviews/person.png"
              alt="review1"
              className="w-full h-auto"
            />
          </div>

          <div className="col-span-1 flex items-center">
            <img
              src="/reviews/review-card.png"
              alt="review1"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
