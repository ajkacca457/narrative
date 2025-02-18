import React from "react";

const squareCardsData = [
  {
    id: 1,
    title: "1.Deep-Dive Strategy Call",
    description:
      "Start with a 3-4 hour video call to dive into your brand DNA, values, and vision. We’ll uncover every essential detail to ensure your content aligns with your brand's unique identity.",
  },
  {
    id: 2,
    title: "2.Content Creation",
    description:
      "Our expert video editors and scriptwriters turn your brand insights into powerful short-form videos and engaging written content tailored for LinkedIn and Facebook",
  },
  {
    id: 3,
    title: "3.Strategic Scheduling",
    description:
      "We plan each post for optimal engagement, creating a content calendar so your brand connects with your audience at the right times throughout the month.",
  },
  {
    id: 4,
    title: "4.Optimize for Maximum Reach",
    description:
      "By analyzing performance metrics, we refine every element to maximize reach and engagement. This meticulous approach ensures each piece of content is optimized to boost visibility, grow your audience, and keep them engaged.",
  },
];

const BrandSquareCards = ({ content }) => {

  const {heading_="hello World", heading_strong="", cards}=content||{};

  return (
    <div className="w-full square-cards h-auto py-[20vh] z-50 relative">
      <div className="how-we-do-tite mb-[5vh] ml-[20vw]">
        <h3 className="text-[75px] text-white uppercase">
          <span className="opacity-60">{heading_}</span>{" "}
          <span className="text-highlight text-[75px]">{heading_strong}</span>
        </h3>
      </div>
      <div className="square-cards-container w-3/4 mx-auto">
        <div className="grid grid-cols-2 gap-6 w-4/6 mx-auto py-[20vh]">
          {cards.length>0 && cards.map((card) => (
            <div
              key={card.id}
              className="border-2 border-[#2D2D2D] p-8 bg-[#2D2D2D]"
            >
              <h3 className="text-white text-[24px] font-semibold brand-card-title mt-4">
                {card.id}{" . "}{card.title}
              </h3>
              <p className="text-[#A7A7A7] mt-4 text-[17px]">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSquareCards;
