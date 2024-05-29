import React from 'react';
import cardimg from './cardimg.jpeg';

const CardShow = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="text-center mb-8">
        <h2 className="text-sm font-medium text-gray-500">Account</h2>
        <h1 className="text-5xl font-bold text-gray-900 mt-2">Perfect card for your needs.</h1>
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.
        <p className="text-gray-500 mt-4">
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="space-y-12 mb-20">
          <div className="relative w-72 h-44 rounded-lg flex items-center justify-center overflow-hidden mt-4">
            <img src={cardimg} className="w-full h-full object-cover" alt="Card" />
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg font-medium">Open Account</button>
          <button className="bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-lg font-medium">Compare Cards</button>
        </div>
      </div>
    </div>
  );
};

export default CardShow;
