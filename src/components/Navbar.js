import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow">
      <div className="text-2xl font-bold text-teal-600">banquee.</div>
      <div className="space-x-6">
        <a href="#" className="text-gray-700">Features</a>
        <a href="#" className="text-gray-700">Compare</a>
        <a href="#" className="text-gray-700">Support</a>
        <a href="#" className="text-gray-700">Blog</a>
      </div>
      <div className="space-x-4">
        <a href="#" className="text-gray-700">Login</a>
        <a href="#" className="bg-teal-600 text-white py-2 px-4 rounded">Open Account</a>
      </div>
    </nav>
  );
};

export default Navbar;
