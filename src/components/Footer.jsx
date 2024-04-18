import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-dark-pink border-t-[10px] py-[5vh]'>
      
      <div className='w-4/6 mx-auto'>
        <div className='grid grid-cols-4 mb-[5vh]'>
          <div className='col-span-1'>Contact Us</div>
          <div className='col-span-1'>Useful Links</div>
          <div className='col-span-1'>Our Services</div>
        </div>

        <div className='flex justify-between'>
          <p>Copyright notice @2024</p>
          <div>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer