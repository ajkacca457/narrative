import React from 'react'

const ShowReel = () => {
  return (
    <div className="w-full h-screen show-reel rounded-[2rem] relative">
        <div className='overlay bg-black opacity-30 w-full h-full absolute top-0 left-0 z-10'></div>    
        <div className='content z-50 absolute w-full h-full'>
            <h1 className='text-white text-[96px] font-semibold'>We are a digital marketing agency with expertise</h1>
            <h5 className='text-white text-[20px] ml-[100px] tracking-[.3em] mt-6 uppercase'>a brand design studio.</h5>
        </div>
    </div>
  )
}

export default ShowReel