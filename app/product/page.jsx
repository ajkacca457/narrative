import React from 'react'
import ProductHero from '../components/productpage/ProductHero'
import VideoEmbed from '../components/productpage/VideoEmbed'

const page = () => {
  return (
    <div className='product-page'>
        <ProductHero />
        <VideoEmbed />
    </div>
  )
}

export default page