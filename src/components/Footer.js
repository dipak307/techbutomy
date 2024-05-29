import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
        
           
          {/* About Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">About</h2>
            <ul className="mt-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
            </ul>
          </div>

          {/* Blog Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">Blog</h2>
            <ul className="mt-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Products</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Technology</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Crypto</a></li>
            </ul>
          </div>

          {/* Webflow Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">Webflow</h2>
            <ul className="mt-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Styleguide</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Licensing</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Changelog</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full lg:w-1/4">
            <h2 className="text-xl font-semibold text-gray-800">Social Media</h2>
            <ul className="mt-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
              <li className="mt-2"><a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-gray-600 text-center">&copy; Made by Pawel Gola. Powered by Webflow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;