import React from 'react'
import ProductHero from '../components/productpage/ProductHero'
import VideoEmbed from '../components/productpage/VideoEmbed'
import Input from '../components/productpage/Input'
import BrandCards from '../components/productpage/BrandCards'
import BrandSquareCards from '../components/productpage/BrandSquareCards'

const page = () => {
  return (
    <div className='product-page'>
        <ProductHero />
        <VideoEmbed />
        <Input />
        <BrandCards />
        <BrandSquareCards />
    </div>
  )
}

export default page