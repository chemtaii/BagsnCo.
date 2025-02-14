import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DarkMode from '../components/DarkMode';

const Catalog = () => {
  return (
    <div className='grid grid-cols-2'>
        <div>
        <Sidebar/>
        <Navbar/>
        </div>
        <div>
      <h1 className='text-black'>HELLO</h1>
      </div>
    </div>
  )
}

export default Catalog
