import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './screens/Home';
import Sign_in from './screens/Sign_in';
import Sign_up from './screens/Sign_up';
import Catalog from './screens/Catalog';
import Contact from './components/Contact';

const WebRoutes = () => {
  return (
  <Router> {/* Wrap everything in Router */}
  <Routes> {/* Use Routes to define route mappings */}
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/home" element={<Home />} /> {/* Home route */}
        <Route path="/sign_in" element={<Sign_in />} /> {/* Sign-in route */}
        <Route path="/sign_up" element={<Sign_up />} /> {/* Sign-up route */}
        <Route path="/catalog" element={<Catalog />} /> {/* Catalog route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}

      </Routes>
    </Router>
      
  )
}

export default WebRoutes
