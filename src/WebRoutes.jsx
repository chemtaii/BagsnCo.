import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './screens/Home';
import Sign_in from './screens/Sign_in';
import Sign_up from './screens/Sign_up';
import Catalog from './screens/Catalog';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Cart from './screens/Cart';
import Wishlist from './screens/Wishlist';

const WebRoutes = () => {
  return (
  <Router> {/* Wrap everything in Router */}
  <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  <Routes> {/* Use Routes to define route mappings */}
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/home" element={<Home />} /> {/* Home route */}
        <Route path="/sign_in" element={<Sign_in />} /> {/* Sign-in route */}
        <Route path="/sign_up" element={<Sign_up />} /> {/* Sign-up route */}
        <Route path="/catalog" element={<Catalog />} /> {/* Catalog route */}
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/wishlist" element={<Wishlist />} /> 


      </Routes>
    </Router>
      
  )
}

export default WebRoutes
