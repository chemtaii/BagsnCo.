import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
// import landing from '/src/assets/landing.png'


const Home = () => {
  return (
    <div>
    <div className="bg-white dark:bg-black h-screen w-full">
    <div className="grid grid-cols-2">
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
                <Link to="/sign_in">LOGIN</Link>
                </div>
    
            </div>
          </div>
      <div className="m-auto">
                <div>
                    <h1 className="text-6xl mb-8">Welcome to Bags & Co.</h1>
                </div>
                <div>
                    <p className="text-xl ml-1 my-4">Discover our exclusive collection of bags. 
                    Perfect for every occasion.
                    </p>
                    <p><button className="mt-2 text-xl font-extrabold rounded-xl px-2 hover:bg-[] hover:text- border hover:border-transparent bg-black text-white border-transparent">SHOP NOW</button></p>
                </div>
            </div>
      </div>
      </div>
      </div>

    
  )
}

export default Home
