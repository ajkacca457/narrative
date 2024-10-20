import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='max-w-[90rem] mx-auto w-[90%] flex justify-between items-center py-4'>
        <h2>Narrative</h2>
        <Image src='/arrow.svg' alt='logo' width={30} height={30} />
    </div>
  )
}

export default Navbar