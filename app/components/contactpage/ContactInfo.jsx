"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactInfo = ({ content }) => {
  const { cards = [] } = content || {};
  const cardsRef = useRef([]);

  useEffect(() => {
    const cardsElements = cardsRef.current;

    // Animate the cards on render
    gsap.fromTo(
      cardsElements,
      { y: 30, opacity: 0 }, // Initial state (invisible and slightly lower)
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "bounce.out",
        stagger: 0.2, // Stagger the animations by 0.2 seconds
      }
    );
  }, [cards]);

  return (
    <div className="w-full contact-cards-element h-auto pb-[20vh]">
      <div className="contact-cards-container w-3/5 mx-auto">
        <div className="grid grid-cols-3 gap-6 mt-12">
          {cards.length > 0 &&
            cards.map((card, index) => (
              <div
                key={index}
                className="contact-card text-center"
                ref={(el) => (cardsRef.current[index] = el)} // Assign refs to each card
              >
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
