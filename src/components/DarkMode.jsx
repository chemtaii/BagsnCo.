import React from 'react'
import dark from '/src/assets/dark.svg?component';
import light from '/src/assets/light.svg?component';



const DarkMode = () => {
  return (
    <div className='h-[20px] w-[20px] justify-start'>
      <img src={light }/>
      <img src={dark} alt='dark'/>
    </div>
  )
}

export default DarkMode
