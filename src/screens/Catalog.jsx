import React from 'react';
import Navbar from '../components/Navbar';
import CategoriesSidebar from '../components/CategoriesSidebar';

const Catalog = () => {
  return (
    <div className="flex">
      {/* Sidebar (1/5 of the width) */}
      <div className="w-1/5">
        <CategoriesSidebar />
      </div>

      {/* Main Content (4/5 of the width) */}
      <div className="w-4/5 p-4">
        <h1 className="text-black">HELLO</h1>
      </div>
    </div>
  );
};

export default Catalog;