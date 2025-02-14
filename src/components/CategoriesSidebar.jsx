import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from './Logo'; 
import Navbar from './Navbar';

const CategoriesSidebar = () => {
  return (
    <div className="sticky top-0 h-screen w-full bg-[#fce1e6] hidden md:flex flex flex-col justify-start items-center p-8">
        <div className='bg-[#fce1e6] h-screen w-[300px] flex flex-col justify-start items-center p-8'>
      <Logo />
      <Navbar/>
      <nav className="grid grid-rows-7 gap-8 sm:gap-4 pt-12 sm:pt-4 text-xl font-bold ml-5">
      <div className='m-2'>
          <Link to="/home">HOME</Link>
        </div>
        <div className='m-2'>
        <a href="#baguette">BAGUETTES</a>
        </div>
        <div className='m-2'>
        <a href="#crossbody">CROSSBODY BAGS</a>
        </div>
        <div className='m-2'>
        <a href="#bucket">BUCKET BAGS</a>
        </div>
        <div className='m-2'>
        <a href="#tote">TOTE BAGS</a>
        </div>
        <div className='m-2'>
        <a href="#clutch">CLUTCH BAGS</a>
        </div>
        <div className='m-2'>
        <a href="#wallet">WALLETS & PURSES</a>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default CategoriesSidebar
