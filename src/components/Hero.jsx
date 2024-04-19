import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <h1 className='text-7xl text-dark-blue font-bold w-2/4 mx-auto text-center'>Welcome to <span className='text-dark-pink'>Narrative</span>. Crafting your Social Media Success Story</h1>
        <p className='w-2/5 text-center my-[50px] text-dark-purple'>At Narrative, as a premier social media marketing agency, we understand the power of storytelling in capturing attention, fostering engagement, and driving conversions.</p>
        <div>
            <button className='bg-dark-blue text-yellow-600 px-4 py-2 rounded-full mx-4'>View Services</button>
            <button className='border-[1px] mx-4 px-4 py-2 text-dark-blue border-dark-blue rounded-full'>Watch Video</button>
        </div>
    </div>
  )
}

export default Hero