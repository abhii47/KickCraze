import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="Navbar-container bg-zinc-100 text-black w-full">
      {/* Top Marquee */}
      {/* <div className="Headline text-center text-white bg-[#415a77] text-sm py-1">
        <marquee>Free Shipping On All Prepaid Orders</marquee>
      </div> */}

      {/* Main Navbar */}
      <div className="Navbar bg-zinc-200 flex flex-col sm:flex-row items-center justify-between sm:h-20 drop-shadow-md px-4 py-2 sm:py-0">
        {/* Left Spacer or Menu Button (future use) */}
        <div className="hidden sm:block sm:w-1/3" />

        {/* Logo */}
        <div className="Navbar-logo w-full sm:w-1/3 flex justify-center mb-2 sm:mb-0">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Kick<span className="text-[#415a77]">Craze</span>
          </h1>
        </div>

        {/* Icons */}
        <div className="Navbar-icons w-full sm:w-1/3 flex justify-center sm:justify-end gap-6 sm:gap-5 text-[#415a77] text-xl sm:text-2xl">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>

      {/* Policy / Categories - Optional Responsive Bar */}
      {/* You can uncomment and customize this for more links */}
      
      {/* <div className="header-policy flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-[#415a77] border border-[#415a77] rounded-lg mx-2 sm:mx-[20%] my-2 px-4 py-3 overflow-x-auto">
        <a href="">Category</a>
        <a href="">Shipping Policy</a>
        <a href="">Payment Policy</a>
        <a href="">Return & Refund</a>
        <a href="">About Us</a>
        <a href="">Follow On Instagram</a>
      </div>  */}
     
    </div>
  );
}

export default Navbar;
