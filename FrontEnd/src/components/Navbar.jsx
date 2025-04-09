import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping,faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='Navbar-container bg-zinc-100 text-black w-[100%]'>
        <div className='Headline text-center text-white bg-[#415a77]' >
            <marquee >Free Shipping On All Prepaid Order</marquee>
        </div>
        
        {/* <button className='btn btn-primary'>Home</button> */}
        {/* it is navbar holder in which there are three div */}
        <div className='Navbar bg-zinc-200 text-center flex items-center justify-between h-20 drop-shadow-md' >
            {/* empty div  */}
            <div className='w-[33%]' >
            </div>
            {/* this div contain logo */}
            <div className='Navbar-logo flex justify-center w-[34%]'>
                <h1 className='text-4xl' >Kick<span className='text-[#415a77]'>Craze</span></h1>
            </div>
            {/* this div contain icons */}
            <div className='Navbar-icons w-[30%] flex justify-end gap-5 pr-6 text-[#415a77]'>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                <FontAwesomeIcon icon={faUser} size="xl" />
                <FontAwesomeIcon icon={faBagShopping} size="xl" />
                <span ></span>
            </div>    
        </div>
        {/* policy and categories div */}
        '<div className='header-policy flex bg-zinc-100 justify-center items-center gap-8 text-sm text-[[#415a77]] box-content border border-[#415a77] rounded-lg mx-[23%] my-3 py-3 overflow-scroll' >
            <a href="">Category</a>
            <a href="">Shipping Policy</a>
            <a href="">Payment Policy</a>
            <a href="">Return & Refund Policy</a>
            <a href="">About Us</a>
            <a href="">Follow On Instagram</a>
        </div>'
    </div>
  )
}

export default Navbar
