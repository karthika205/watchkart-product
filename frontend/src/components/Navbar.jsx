import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-200 text-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-blue-600">WatchKart</div>
      <div className="space-x-6">
        <a href="#home" className="hover:text-blue-600 font-medium">Home</a>
        <a href="#about" className="hover:text-blue-600 font-medium">About</a>
        <a href="#products" className="hover:text-blue-600 font-medium">Products</a>
      </div>
    </nav>
  );
};

export default Navbar;
