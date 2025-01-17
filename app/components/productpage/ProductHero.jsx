import React from "react";
import ProductHeroImage from "../../../public/product/product-hero.png";

const ProductHero = () => {
  return (
    <div className="w-full reviews h-auto py-[10vh]">
      <div className="product-hero-container w-3/4 mx-auto">
        <div className="grid grid-cols-4 place-items-center">
            <div className="col-span-3">
          <h1 className="text-white text-[96px] max-w-[17ch]">
            Power your social media growth in hours, not weeks
          </h1>
          </div>

            <div>
                <img src="/product/product-hero.png" alt="product-hero" />
                <button className="text-white text-[18px] mt-6 py-6 px-8 w-full mx-auto font-bold bg-[#1E1E21] rounded-full">Product</button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
