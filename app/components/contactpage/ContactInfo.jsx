import React from "react";
const ContactInfo = ({ content }) => {
  const { cards = [] } = content || {};

  return (
    <div className="w-full contact-cards-element h-auto pb-[20vh]">
      <div className="contact-cards-container w-3/5 mx-auto">
        <div className="grid grid-cols-3 gap-6 mt-12">
          {cards.length > 0 &&
            cards.map((card, index) => (
              <div key={index} className="contact-card text-center">
                {card?.card_icon?.sizes?.large && (
                  <div className="contact-card-icon mx-auto w-fit">
                    <img src={card?.card_icon?.sizes?.large} alt="icon" />
                  </div>
                )}

                <h3 className="text-white text-[28px] font-semibold mt-4 contact-card-title">
                  {card.card_title}
                </h3>
                <p className="text-[#A7A7A7] mt-4 text-[16px] contact-card-description">
                  {card.card_info}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
