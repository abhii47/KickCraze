import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping,faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='Navbar-container bg-zinc-300 text-black w-screen'>
        <div className='Headline text-center' >
            <marquee >Free Shipping On All Prepaid Order</marquee>
        </div>
        
        {/* <button className='btn btn-primary'>Home</button> */}
        {/* it is navbar holder in which there are three div */}
        <div className='Navbar bg-zinc-200 text-center flex items-center justify-between h-20' >
            {/* empty div  */}
            <div className='w-[33%]' >
            </div>
            {/* this div contain logo */}
            <div className='Navbar-logo flex justify-center w-[34%]'>
                <h1 className='text-4xl' >KickCraze</h1>
            </div>
            {/* this div contain icons */}
            <div className='Navbar-icons w-[33%] flex justify-end gap-5 pr-6'>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                <FontAwesomeIcon icon={faUser} size="xl" />
                <FontAwesomeIcon icon={faBagShopping} size="xl" />
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
