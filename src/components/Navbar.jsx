import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaHome, FaThList, FaUserPlus, FaSignInAlt } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FADCE3] w-full py-3">
      <div className="flex justify-around items-center">
        <Link to="/home" className="flex flex-col items-center">
          <FaHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
        <Link to="/catalog" className="flex flex-col items-center">
          <FaThList className="text-2xl" />
          <span className="text-sm">Catalog</span>
        </Link>
        <Link to="/sign_up" className="flex flex-col items-center">
          <FaUserPlus className="text-2xl" />
          <span className="text-sm">Register</span>
        </Link>
        <Link to="/sign_in" className="flex flex-col items-center">
          <FaSignInAlt className="text-2xl" />
          <span className="text-sm">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;