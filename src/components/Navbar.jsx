import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaHome, FaThList, FaUserPlus, FaSignInAlt } from 'react-icons/fa'; // Import icons
import profile from '/src/assets/profile.svg';
import home from '/src/assets/home.svg';
import cart from '/src/assets/cart.svg';
import wishlist from '/src/assets/wishlist.svg';
import catalog from '/src/assets/catalog.svg';



const Navbar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FADCE3] w-full py-3">
      <div className="flex justify-around items-center">
      <Link to="/wishlist" className='flex flex-col items-center'>
        <img src={wishlist} className='h-[40px]'/>
        <span className="text-sm"></span>
      </Link>
      <Link to="/catalog" className='flex flex-col items-center'>
        <img src={catalog} className='h-[40px]'/>
        <span className="text-sm"></span>
      </Link>
        <Link to="/home" className='flex flex-col items-center'>
        <img src={home} className='h-[40px]'/>
        <span className="text-sm"></span>
      </Link>
      <Link to="/cart" className='flex flex-col items-center'>
        <img src={cart} className='h-[40px]'/>
        <span className="text-sm"></span>
      </Link>
        <Link to="/profile" className='flex flex-col items-center'>
        <img src={profile} className='h-[40px]'/>
        <span className="text-sm"></span>
      </Link>

      </div>
    </div>
  );
};

export default Navbar;