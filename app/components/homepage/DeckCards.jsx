import { useState } from "react";

const StackedCards = () => {
  const totalCards = 25; // Total number of cards
  const visibleCards = 5; // Number of cards visible at a time

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-[350px] h-[400px] mx-auto flex items-center justify-center">
      {Array.from({ length: visibleCards }).map((_, i) => {
        const index = currentIndex + i; // Track visible cards

        // Adjust position & rotation for stacking effect
        const offset = i * 15;
        const rotation = i * 2;

        return (
          <div
            key={index}
            className={`absolute w-full h-full flex flex-col items-center justify-center -ml-[50px] 
                        rounded-lg text-white font-bold text-2xl transition-all duration-500 ease-in-out 
                        shadow-lg ${i === 0 ? "z-20 scale-100 opacity-100 rotate-0" : "z-10 scale-90 opacity-70"}`}
            style={{
              transform: `translateX(${offset}px) rotate(${rotation}deg)`,
              backgroundColor: "#2A9D8F",
            }}
          >
            Card {index + 1}

            {/* Buttons inside the card */}
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
          </div>
        );
      })}
    </div>
  );
};

export default StackedCards;
