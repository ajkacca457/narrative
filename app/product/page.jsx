import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductHero from "../components/productpage/ProductHero";
import VideoEmbed from "../components/productpage/VideoEmbed";
import Input from "../components/productpage/Input";
import BrandCards from "../components/productpage/BrandCards";
import BrandSquareCards from "../components/productpage/BrandSquareCards";
import Testimonials from "../components/productpage/Testimonials";
import DoubleCards from "../components/productpage/DoubleCards";

const page = () => {
  return (
    <div className="product-page">
      <ProductHero />
      <div className="relative">
        <div className="w-[800px] h-[800px] absolute -right-[150px] bottom-[500px] -z-[1] radial-light opacity-40"></div>
        <VideoEmbed />
        <Input />
      </div>
      <BrandCards />
      <BrandSquareCards />
      <Testimonials />
      <DoubleCards />
    </div>
  );
};

export default page;
