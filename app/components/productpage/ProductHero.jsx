import React from "react";

const ProductHero = ({content}) => {

  const {heading=""}= content || {};

  return (
    <div className="w-full reviews h-auto py-[10vh] relative">
      <img src="/product/Line_BG.png" alt="product-grid" className="absolute h-full w-[600px] right-[100px] top-0 z-20 opacity-60" />
      <div className="product-hero-container w-3/4 mx-auto relative z-50">
        <div className="grid grid-cols-4 place-items-center">
            <div className="col-span-3">
          <h1 className="text-white text-[96px] max-w-[17ch]">
            {heading}
          </h1>
          </div>

            <div className="relative col-span-1">
                <img src="/product/product-hero.png" alt="product-hero" className="relative z-50" />
                <button className="text-white text-[18px] mt-6 py-6 px-8 w-full mx-auto font-bold bg-[#1E1E21] rounded-full">Product</button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
