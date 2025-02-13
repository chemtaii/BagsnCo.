import React from 'react'
import logo from '/src/assets/logo.svg?component';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
        <img src={logo} className="h-[200px] w-[400px] lg:w-[400px] sm:w-[300px]"/>
    </div>
  )
}

export default Logo
