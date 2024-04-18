import React from 'react'
import DemoImage from '../assets/images/demo.jpg'

const ScrollInfo = () => {
  return (
    <div className='w-3/6 mx-auto mt-[15vh]'>
        <h1 className='text-dark-blue text-5xl w-3/4 mx-auto font-bold text-center'>We believe that every brand has a <span className='text-dark-pink'>unique story </span>to tell</h1>
        <div className='w-3/4 mx-auto my-[10vh]'>
            <img src={DemoImage} alt='Demo Image' className='w-[80%] mx-auto rounded-lg'/>
        </div>
        <h1 className='text-dark-blue text-5xl w-3/4 mx-auto font-bold text-center'>Our <span className='text-dark-pink'>experienced storytellers </span>is dedicated to bringing that story to life</h1>
        <p className='text-dark-purple text-center w-3/4 mx-auto my-[10vh]'>We don’t just create content for the sake of it.Our strategies are backed by data-driven insights and industry expertise,ensuring maximum impact and ROI.</p>

    </div>
  )
}

export default ScrollInfo