import React from 'react'

const KeyFigure = ({content}) => {

const {figure= []} = content|| {};
  return (
    <div className='key-figure w-full h-auto py-[10vh]'>
        
        <div className='key-figure-container w-3/4 mx-auto grid grid-cols-4 gap-x-6'>

        {figure.length>0 && figure.map((data,index) => (
            <div key={index} className='key-figure-card text-center text-white p-[25px] rounded-[20px]'>
                <h4 className='text-[120px] uppercase'>{data.number}</h4>
                <p className='text-[18px] opacity-60'>{data.title}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default KeyFigure