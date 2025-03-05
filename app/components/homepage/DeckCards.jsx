import { useState } from "react";

const StackedCards = ({ review }) => {
  const totalCards = review.length;
  const visibleCards = 5; // Show only 5 cards at a time
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[450px] mx-auto flex items-center justify-center -ml-[35px] mt-8 md:ml-0 md:mt-0">
      {review.length > 0 &&
        review.map((block, i) => {
          if (i < currentIndex || i >= currentIndex + visibleCards) return null; // Show only 5

          const relativeIndex = i - currentIndex;
          const offset = relativeIndex * 15; // Shift right
          const rotation = relativeIndex * 3; // Slight rotation

          return (
            <div
              key={i}
              className={`absolute w-full h-full flex flex-col items-center justify-between p-4
                        rounded-lg text-white font-bold text-2xl transition-all duration-500 ease-in-out
                        shadow-lg`}
              style={{
                transform: `translateX(${offset}px) rotate(${rotation}deg)`,
                backgroundColor: "#E5ECE4",
                color: "#333",
                zIndex: 20 - relativeIndex, // Ensure proper stacking
                opacity: relativeIndex === 0 ? 1 : 0.8, // Top card is most visible
              }}
            >
              <div className="w-5/6 mx-auto review-container">
                <div className="bg-[#D3DED2] w-fit px-4 py-2 rounded-full text-sm">
                  {currentIndex + 1} of {totalCards}
                </div>

                <div className="mt-8">
                  <p className="text-we-do-card-text">{block.review_content}</p>
                  <hr className="mt-20 mb-2 border-[1px] border-gray-300" />

                  <div className="flex items-center gap-4">
                    <img
                      src={block?.reviewer_image?.sizes?.thumbnail}
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-extrabold text-input-highlight">
                        {block.reviewer_name}
                      </p>
                      <p className="text-input-highlight opacity-50">
                        {block.reviewer_title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons only on topmost card */}
              {relativeIndex === 0 && (
                <div className="absolute bottom-4 flex gap-4 w-4/5 mx-auto justify-between">
                  {/* Previous Button with Left Pointing SVGs */}
                  <button
                    className="px-3 py-1 flex gap-x-2 text-white rounded-md disabled:opacity-50"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                  >
                    <svg
                      width="20pt"
                      height="20pt"
                      version="1.1"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-point-left"
                    >
                      <path d="m32.66 15.898c0.63672-0.76563 1.5703-1.2266 2.5664-1.2695 0.99609-0.046875 1.9648 0.32812 2.6719 1.0352 0.70312 0.70313 1.0781 1.6719 1.0352 2.668-0.046875 0.99609-0.50781 1.9297-1.2734 2.5664l-25.512 25.543h84.32c1.8906 0.097656 3.3711 1.6602 3.3711 3.5547 0 1.8906-1.4805 3.4531-3.3711 3.5547h-84.32l25.551 25.508c1.3359 1.3984 1.3359 3.6016 0 5-0.66016 0.66406-1.5625 1.0391-2.5 1.0391s-1.8359-0.375-2.5-1.0391l-31.602-31.602 0.003906 0.003907c-0.67969-0.65625-1.0664-1.5586-1.0664-2.5 0-0.94531 0.38672-1.8477 1.0664-2.5z" />
                    </svg>
                    <svg
                      width="20pt"
                      height="20pt"
                      version="1.1"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-point-left"
                    >
                      <path d="m32.66 15.898c0.63672-0.76563 1.5703-1.2266 2.5664-1.2695 0.99609-0.046875 1.9648 0.32812 2.6719 1.0352 0.70312 0.70313 1.0781 1.6719 1.0352 2.668-0.046875 0.99609-0.50781 1.9297-1.2734 2.5664l-25.512 25.543h84.32c1.8906 0.097656 3.3711 1.6602 3.3711 3.5547 0 1.8906-1.4805 3.4531-3.3711 3.5547h-84.32l25.551 25.508c1.3359 1.3984 1.3359 3.6016 0 5-0.66016 0.66406-1.5625 1.0391-2.5 1.0391s-1.8359-0.375-2.5-1.0391l-31.602-31.602 0.003906 0.003907c-0.67969-0.65625-1.0664-1.5586-1.0664-2.5 0-0.94531 0.38672-1.8477 1.0664-2.5z" />
                    </svg>
                  </button>

                  {/* Next Button with Right Pointing SVGs */}
                  <button
                    className="px-3 py-1 bg-transparent text-white rounded-md flex gap-x-2 disabled:opacity-50"
                    onClick={handleNext}
                    disabled={currentIndex >= totalCards - 1}
                  >
                    <svg
                      width="20pt"
                      height="20pt"
                      version="1.1"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-point-right"
                    >
                      <path d="m67.34 15.898c-0.63672-0.76563-1.5703-1.2266-2.5664-1.2695-0.99609-0.046875-1.9648 0.32812-2.6719 1.0352-0.70312 0.70313-1.0781 1.6719-1.0352 2.668 0.046875 0.99609 0.50781 1.9297 1.2734 2.5664l25.512 25.543h-84.32c-1.8906 0.097656-3.3711 1.6602-3.3711 3.5547 0 1.8906 1.4805 3.4531 3.3711 3.5547h84.32l-25.551 25.508c-1.3359 1.3984-1.3359 3.6016 0 5 0.66016 0.66406 1.5625 1.0391 2.5 1.0391s1.8359-0.375 2.5-1.0391l31.602-31.602-0.003906 0.003907c0.67969-0.65625 1.0664-1.5586 1.0664-2.5 0-0.94531-0.38672-1.8477-1.0664-2.5z" />
                    </svg>
                    <svg
                      width="20pt"
                      height="20pt"
                      version="1.1"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="animate-point-right"
                    >
                      <path d="m67.34 15.898c-0.63672-0.76563-1.5703-1.2266-2.5664-1.2695-0.99609-0.046875-1.9648 0.32812-2.6719 1.0352-0.70312 0.70313-1.0781 1.6719-1.0352 2.668 0.046875 0.99609 0.50781 1.9297 1.2734 2.5664l25.512 25.543h-84.32c-1.8906 0.097656-3.3711 1.6602-3.3711 3.5547 0 1.8906 1.4805 3.4531 3.3711 3.5547h84.32l-25.551 25.508c-1.3359 1.3984-1.3359 3.6016 0 5 0.66016 0.66406 1.5625 1.0391 2.5 1.0391s1.8359-0.375 2.5-1.0391l31.602-31.602-0.003906 0.003907c0.67969-0.65625 1.0664-1.5586 1.0664-2.5 0-0.94531-0.38672-1.8477-1.0664-2.5z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default StackedCards;
