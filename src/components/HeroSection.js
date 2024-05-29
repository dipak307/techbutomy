import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-center py-20 bg-teal-50">
      <h1 className="text-5xl font-bold mb-6">All in one card.</h1>
      <p className="text-gray-600 mb-8">Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
      <div className="space-x-4">
        <a href="#" className="bg-teal-600 text-white py-3 px-6 rounded">Open Account</a>
        <a href="#" className="bg-gray-200 text-gray-700 py-3 px-6 rounded">Compare Cards</a>
      </div>
    </section>
  );
};

export default HeroSection;
