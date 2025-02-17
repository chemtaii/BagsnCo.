import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <div className='h-[60px] w-full bg-black flex justify-around items-center text-white'>
      <div className='flex flex-row items-center gap-20'>
        {/* Instagram Link */}
        <a
          href="https://instagram.com/bagsnco.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaInstagram className="text-2xl" />
          <span className="text-sm">@bagsnco.ke</span>
        </a>

        {/* Email */}
        <a
          href="mailto:bagsnco.ke@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaEnvelope className="text-2xl" />
          <span className="text-sm">bagsnco.ke@gmail.com</span>
        </a>

        {/* Phone */}
        <a
          href="tel:0718186669"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <FaPhone className="text-2xl" />
          <span className="text-sm">+254 718 186 669</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;