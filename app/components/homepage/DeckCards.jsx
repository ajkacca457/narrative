import { useState } from "react";

const StackedCards = ({review}) => {

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
      {review.length>0 && review.map((block, i) => {
        if (i < currentIndex || i >= currentIndex + visibleCards) return null; // Show only 5

        const relativeIndex = i - currentIndex;
        const offset = relativeIndex * 15; // Shift right
        const rotation = relativeIndex * 3; // Slight rotation

        return (
          <div
            key={i}
            className={`absolute w-full h-full flex flex-col items-center justify-center
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
            Card {i + 1}/{totalCards}

            <div>
                <p>{block.review_content}</p>
                <p>{block.reviewer_name}</p>
                <p>{block.reviewer_title}</p>
            </div>

            {/* Buttons only on topmost card */}
            {relativeIndex === 0 && (
              <div className="absolute bottom-4 flex gap-4">
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
