import React from 'react';
import { FaCheckCircle, FaPaypal, FaApplePay, FaGoogle, FaAmazon, FaBitcoin, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const integrations = [
  { icon: FaPaypal, label: "PayPal" },
  { icon: FaApplePay, label: "Apple Pay" },
  { icon: FaGoogle, label: "Google Pay" },
  { icon: FaAmazon, label: "Amazon Pay" },
  { icon: FaBitcoin, label: "Bitcoin" },
  { icon: FaCcVisa, label: "Visa" },
  { icon: FaCcMastercard, label: "MasterCard" }
];

const SeamlessIntegrationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
          {/* Left column: Tools and description */}
          <div className="flex justify-center md:justify-start items-center space-x-12 mb-30 flex-wrap">
              {integrations.map((integration, index) => (
                <div key={index} className="text-3xl text-gray-600 mx-2">
                  <integration.icon />
                </div>
              ))}
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-500 mb-4">Tools</h2>
            <h3 className="text-3xl font-bold mb-6">Seamless integration</h3>
            <p className="text-gray-600 mb-12">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            
          </div>

          {/* Right column: Integration details */}
          <div className="text-left">
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaCheckCircle className="text-teal-600 mr-2" /> Secure and encrypted integration
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-teal-600 mr-2" /> Fully API interface
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-teal-600 mr-2" /> Payments worldwide
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegrationSection;
