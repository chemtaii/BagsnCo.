import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from './Logo'; 
import DarkMode from './DarkMode';
import landing from '/src/assets/landing.png?component'

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
        <div className='hidden md:flex bg-[#fce1e6] w-1/2 h-screen flex flex-col justify-start items-center p-8'>
      <Logo />
      <nav className="grid grid-rows-6 gap-8 pt-12 text-xl font-bold ml-5">
        <div>
          <Link to="/home">HOME</Link>
        </div>
        <div>
          <Link to="/catalog">CATALOG</Link>
        </div>
        <div>
          <Link to="/cart">CART</Link>
        </div>
        <div>
          <Link to="/wishlist">WISHLIST</Link>
        </div>
        <div>
        <a href="#footer">CONTACTS</a>
        </div>
        {/* <div>
          <Link to="/sign_up">REGISTER</Link>
        </div>
        <div>
          <Link to="/sign_in">LOGIN</Link>
        </div> */}
      </nav>
      </div>
      <div className='w-full md:w-1/2 my-auto h-screen flex justify-center items-center bg-white '>
            <img src={landing} alt="Landing" className='max-w-full max-h-full'/>
      </div>
    </div>
  );
};

export default Sidebar;