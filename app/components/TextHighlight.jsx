"use client";
import React from 'react'

const TextHighlight = (props) => {

  const {textClass, showButton} = props.settings

  return (
    <div>
      <div className="max-w-[90rem] w-[90%] mx-auto py-[20vh] border-b-2 border-white">
        <h1 className={`text-8xl text-center w-[80%] mx-auto ${textClass? textClass : 'text-white'}`}>We make <span className='font-bold'>motion design</span> and animations for brands.</h1>
        {showButton && <a href='#' className='bg-white text-black w-fit mx-auto py-2 px-4 rounded text-center block mt-4'>Contact Us</a>}
      </div>
    </div> 
  )
}
export default TextHighlight