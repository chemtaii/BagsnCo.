import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Home = () => {
  return (
    <div>
    <div className="bg-white dark:bg-black h-screen w-full overflow-hidden">
    <div className="grid grid-cols-2 h-screen mr-16">
    <div>
    <Sidebar/>
    </div>
      <div className="m-auto">
                <div>
                    <h1 className="text-6xl mb-8">Welcome to Bags & Co.</h1>
                </div>
                <div>
                    <p className="text-xl ml-1 my-4">Discover our exclusive collection of bags. 
                    Perfect for every occasion.
                    </p>
                    <p>
                    <Link to="/catalog">
                        <button className="mt-2 text-xl rounded-xl p-2 w-1/2 font-bold hover:bg-black hover:text-[#fce1e6] border hover:border-[#fce1e6] bg-[#fce1e6] border-transparent">
                        SHOP NOW
                        </button>
                    </Link>
                    </p>
                </div>
            </div>
      </div>
      </div>

      <Navbar/>
      <div id="footer" alt="footer">
      <Footer/>
      </div>
      </div>

    
  )
}

export default Home
