import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import landing from '/src/assets/landing.png?component';

const UserMenu = ({ user, logout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {user && (
        <div className="group">
          <button onClick={toggleDropdown} className="text-xl font-bold focus:outline-none">
            {user.username} ▼ {/* Use user.username instead of user.name */}
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-red-500 text-white font-bold shadow-lg rounded-lg mt-2">
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-100"
              >
                LOGOUT
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  let user = null;
  try {
    const userString = localStorage.getItem('user');
    console.log('userString from localStorage:', userString); // Debugging log
    if (userString && userString !== 'undefined') {
      user = JSON.parse(userString);
    }
  } catch (error) {
    console.error('Failed to parse user data from localStorage:', error);
    localStorage.removeItem('user');
  }

  console.log('User:', user); // Debugging log

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate('/sign_in');
  }

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex bg-[#fce1e6] w-1/2 h-screen flex flex-col justify-start items-center p-8">
        <UserMenu user={user} logout={logout} />
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
          <div>
            {!user && <Link to="/sign_up">REGISTER</Link>}
          </div>
          <div>
            {!user && <Link to="/sign_in">LOGIN</Link>}
          </div>
          {/* <div>
            {user && (
              <button className="bg-white" onClick={logout}>
                Logout
              </button>
            )}
          </div> */}
        </nav>
      </div>
      <div className="w-full md:w-1/2 my-auto h-screen flex justify-center items-center bg-white">
        <img src={landing} alt="Landing" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default Sidebar;
