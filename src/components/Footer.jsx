import React from 'react'
import { Link } from 'react-router-dom'; // Import Link
import { FaHome, FaThList, FaUserPlus, FaSignInAlt, FaInstagram } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <div className='h-[150px] w-full bg-black flex justify-around items-center text-white overflow-hidden'>
        <a href="https://instagram.com/bagsnco.ke" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
  <FaInstagram className="text-2xl" />
  <span className="text-sm">Instagram</span>
</a>
      </div>
  )
}

export default Footer
