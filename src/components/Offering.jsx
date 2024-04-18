import React from 'react'

const Offering = ({heading,description,image}) => {

  return (
    <div className='flex items-center justify-between my-10'>
        <div className='w-1/2'>
            <h3 className='font-bold text-yellow-600 text-3xl mb-6'>{heading}</h3>
            <p className='text-white'>{description}</p>
        </div>
        <div className='w-1/2 '>
            <img src={image} alt={heading} className='w-[50%] ml-auto' />
        </div>
    </div>
  )
}

export default Offering