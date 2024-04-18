import React from 'react'

const Notes = () => {
  return (
    <div className='w-4/6 mx-auto grid grid-cols-5 gap-4 mb-[15vh]'>
        <div className='bg-yellow-600 w-full h-[15vh] flex flex-col justify-center items-center'>
            <h3 className='text-dark-blue font-semibold text-3xl'>Ideation</h3>
        </div>
        <div className='bg-dark-pink w-full h-[15vh] flex flex-col justify-center items-center'>
            <h3 className='text-dark-blue font-semibold text-3xl'>Graphics</h3>
        </div>
        <div className='bg-dark-blue w-full h-[15vh] flex flex-col justify-center items-center'>
            <h3 className='text-yellow-600 font-semibold text-3xl'>Strategy</h3>
        </div>
        <div className='bg-dark-pink w-full h-[15vh] flex flex-col justify-center items-center'>
            <h3 className='text-dark-blue font-semibold text-3xl'>Analytics</h3>
        </div>
        <div className='bg-yellow-600 w-full h-[15vh] flex flex-col justify-center items-center'>
            <h3 className='text-dark-blue font-semibold text-3xl'>Growth</h3>
        </div>


    </div>
  )
}

export default Notes