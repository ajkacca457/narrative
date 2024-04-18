import React, {useEffect} from 'react'
import MainLogo from '../assets/images/main-logo.png'
import { navbardata } from '../data/sitedata'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    useEffect(() => {

        // add navbar background color when scrolled and clear it when scrolled back to top

        const navbar = document.querySelector('.navbar');

        const handleScroll = () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-primary');
            } else {
                navbar.classList.remove('bg-primary');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])


  return (
    <div className='navbar grid grid-cols-6 place-items-center fixed top-0 left-0 w-screen'>
        
        <img src={MainLogo} alt='Main Logo' className='col-span-1'/>
        
        <div className='col-span-4'>
            {navbardata.map((item, index) => {
                return(
                    <NavLink key={index} to={item.path} activeClassName='text-red-500' className="text-dark-purple mx-6">{item.name}</NavLink>
                )
            })}
        </div>

        <div className='col-span-1'>
            <button className='bg-dark-blue text-yellow-600 px-4 py-2 rounded-full mx-4'>Book a Call</button>
        </div>

    </div>
  )
}

export default Navbar