import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div>
    <div className="max-w-[90rem] w-[90%] mx-auto py-[10vh]">
      <h1 className="text-6xl text-white mb-10">
        Have Questions? We Have Answers
      </h1>
      <div className="w-full grid grid-cols-3 gap-x-4">
            <Accordion/>
            <div className='col-span-1 flex justify-center items-center'>
                <button className='bg-[#FFD700] text-black px-4 py-2 rounded-lg'>Book a call now</button>
            </div>
      </div>
    </div>
  </div>
  )
}

export default Faq