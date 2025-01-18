import React from 'react'
import ProductHero from '../components/productpage/ProductHero'
import VideoEmbed from '../components/productpage/VideoEmbed'
import Input from '../components/productpage/Input'
import BrandCards from '../components/productpage/BrandCards'

const page = () => {
  return (
    <div className='product-page'>
        <ProductHero />
        <VideoEmbed />
        <Input />
        <BrandCards />
    </div>
  )
}

export default page