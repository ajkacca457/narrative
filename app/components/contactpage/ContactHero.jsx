import React from "react";

const ContactHero = () => {
  return (
    <div className="w-full reviews h-auto py-[20vh] relative">
      <img
        src="/product/Line_BG.png"
        alt="product-grid"
        className="absolute h-full w-[600px] right-[100px] top-0 z-20 opacity-60"
      />
      <img
        src="/product/Line_BG.png"
        alt="product-grid"
        className="absolute h-full w-[600px] left-[100px] top-0 z-20 opacity-60"
      />

      <div className="product-hero-container w-3/4 mx-auto relative z-50">
        <h1 className="text-white text-center text-[96px] font-extrabold">
          CONTACT US
        </h1>
      </div>
    </div>
  );
};

export default ContactHero;
