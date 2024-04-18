import React from 'react'
import MainLogo from '../assets/images/main-logo.png'
import { navbardata } from '../data/sitedata'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='grid grid-cols-6 place-items-center'>
        
        <img src={MainLogo} alt='Main Logo' className='col-span-1'/>
        
        <div className='col-span-4'>
            {navbardata.map((item, index) => {
                return(
                    <NavLink key={index} to={item.path} activeClassName='text-red-500'>{item.name}</NavLink>
                )
            })}
        </div>

        <div className='col-span-1'>
            <button >Book a Call</button>
        </div>

    </div>
  )
}

export default Navbar