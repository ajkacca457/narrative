import React from 'react'
import MainLogo from '../assets/images/main-logo.png'

const Branding = () => {
  return (
    <div className='w-4/6 mx-auto flex items-center justify-between'>
        <img src={MainLogo} alt='Main Logo' className='w-[50%]'/>
        <h1 className='text-dark-blue text-4xl font-bold'>Shape your brand's success.<br/>Contact us now.</h1>
    </div>
  )
}

export default Branding