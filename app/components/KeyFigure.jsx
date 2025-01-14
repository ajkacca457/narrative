import React from 'react'


const keyFigureData = [

    {
        id:1,
        title:"48",
        subtitle:"Expert Team Member"
    },
    {
        id:2,
        title:"20+",
        subtitle:"Years of Experience"
    },

    {
        id:3,
        title:"25",
        subtitle:"Awards Winning"
    },
    {
        id:4,
        title:"2K",
        subtitle:"Project’s Complete"
    },

];




const KeyFigure = () => {
  return (
    <div className='key-figure w-full h-auto py-[10vh]'>
        
        <div className='key-figure-container w-3/4 mx-auto grid grid-cols-4 gap-x-6'>

        {keyFigureData.map((data) => (
            <div key={data.id} className='key-figure-card text-center text-white p-[25px] rounded-[20px]'>
                <h4 className='text-[120px] uppercase'>{data.title}</h4>
                <p className='text-[18px] opacity-60'>{data.subtitle}</p>
            </div>
        ))}

        </div>

    </div>
  )
}

export default KeyFigure