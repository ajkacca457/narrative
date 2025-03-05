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
    <div className="relative w-[350px] h-[400px] mx-auto flex items-center justify-center">
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
              <div className="w-5/6 mx-auto">
                <div className="bg-[#D3DED2] w-fit px-4 py-2 rounded-full">
                  {currentIndex + 1} of {totalCards}
                </div>

                <div className="mt-8">
                  <p>{block.review_content}</p>
                  <hr className="my-4 border-[1px] border-gray-300" />

                  <div className="flex items-center gap-4">
                    <img src={block?.reviewer_image?.sizes?.thumbnail} alt="Reviewer" className="w-10 h-10 rounded-full" />
                    <div>
                      <p>{block.reviewer_name}</p>
                      <p>{block.reviewer_title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons only on topmost card */}
              {relativeIndex === 0 && (
                <div className="absolute bottom-4 flex gap-4 w-full justify-center">
                  <button
                    className="px-3 py-1 bg-gray-800 text-white rounded-md disabled:opacity-50"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                  >
                    Prev
                  </button>
                  <button
                    className="px-3 py-1 bg-black text-white rounded-md disabled:opacity-50"
                    onClick={handleNext}
                    disabled={currentIndex >= totalCards - 1}
                  >
                    Next
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
