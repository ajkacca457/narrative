import React from 'react'
import ProductHero from '../components/productpage/ProductHero'
import VideoEmbed from '../components/productpage/VideoEmbed'
import Input from '../components/productpage/Input'

const page = () => {
  return (
    <div className='product-page'>
        <ProductHero />
        <VideoEmbed />
        <Input />
    </div>
  )
}

export default page