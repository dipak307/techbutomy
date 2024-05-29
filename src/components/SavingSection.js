import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faBicycle, faPlane, faCamera, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const SavingSection = () => {
  const items = [
    { title: "New Laptop", amount: "$400", icon: faLaptop },
    { title: "Dream bike", amount: "$200", icon: faBicycle },
    { title: "Holiday", amount: "$1400", icon: faPlane },
    { title: "Camera", amount: "$100", icon: faCamera },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-500 mb-4">Saving Accounts</h2>
        <h3 className="text-3xl font-bold mb-6">Organize your money the right way</h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="text-right mt-4">
          <a href="#" className="text-teal-600 font-semibold">All Features &rarr;</a>
        </div>
        <div className="flex justify-center items-center space-x-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-md w-48">
              <FontAwesomeIcon icon={item.icon} className="text-3xl mb-4 text-teal-600" />
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.amount}</p>
            </div>
          ))}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-48">
            <FontAwesomeIcon icon={faPlusCircle} className="text-3xl mb-4 text-gray-600" />
            <h4 className="text-lg font-bold mb-2 cursor-pointer">Add more</h4>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default SavingSection;
