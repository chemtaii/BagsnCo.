import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './screens/Home';
import Sign_in from './screens/Sign_in';
import Sign_up from './screens/Sign_up';

const WebRoutes = () => {
  return (
  <Router> {/* Wrap everything in Router */}
  <Routes> {/* Use Routes to define route mappings */}
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/sign_in" element={<Sign_in />} /> {/* Sign-in route */}
        <Route path="/sign_up" element={<Sign_up />} /> {/* Sign-up route */}
      </Routes>
    </Router>
      
  )
}

export default WebRoutes
