import React from 'react'
import { offeringsdata } from '../data/sitedata'
import Offering from './Offering'

const Offerings = () => {
  return (
    <div className='bg-dark-blue py-[10vh]'>
        <div className='w-4/6 mx-auto mb-[10vh]'>
            <h1 className='text-yellow-600 text-6xl w-full mx-auto font-bold text-center'>We offer<br/><span className='text-white'>a comprehensive suite of services</span><br/>tailored to your brand’s needs</h1>
        </div>

        <div className='w-4/6 mx-auto'>
            {offeringsdata.map((item, index) => {
                return(
                    <Offering key={index} {...item}/>
                )
            })}
        </div>

    </div>
  )
}

export default Offerings