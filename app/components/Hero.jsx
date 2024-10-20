import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[90rem] w-[90%] mx-auto">
        <h1 className='text-8xl text-center mt-[20vh] w-[80%] mx-auto'>We make <span className='font-bold'>motion design</span> and animations for brands.</h1>
        <iframe className='w-full aspect-video mt-[10vh]' src="https://www.youtube.com/embed/mZ5hnNRBFsc?si=kxF37tb8Nm-BoeNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default Hero