import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-[#faebdf] w-1/2 h-screen'>
          <Logo/>
            <div className='grid grid-rows-5 gap-8 pt-15 text-xl font-bold ml-5'>
                <div className=''>
                <Link to="/home">HOME</Link>
                </div>
                <div className=''>
                <Link to="/catalog">CATALOG</Link>
                </div>
                <div className=''>
                <Link to="/sign_up">REGISTER</Link>
                </div>
                <div className=''>
                <Link to="/sign_up">LOGIN</Link>
                </div>
    
            </div>
          </div>
  )
}

export default Sidebar
