import React, { useState } from 'react';
import { FiPhone, FiMail, FiArrowRight, FiPlus, FiX } from 'react-icons/fi';
import mobimg from "./mob.jpeg"
const ContactComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const content = [
    { title: 'How do i open an Banko account', details: ' llerlks slkelskdfkskfk lsekffsklekfksekefkleklfksl lfsk efklkslf ekfilksekfsime slkfoklsklie' },
    { title: 'How do i order a new card?', details: 'llerlks slkelskdfkskfk lsekffsklekfksekefkleklfksl lfsk efklkslf ekfilksekfsime slkfoklsklie' },
    { title: 'How to change my account limits?', details: 'llerlks slkelskdfkskfk lsekffsklekfksekefkleklfksl lfsk efklkslf ekfilksekfsime slkfoklsklie' },
    { title: 'How does Banko premium works', details: 'llerlks slkelskdfkskfk lsekffsklekfksekefkleklfksl lfsk efklkslf ekfilksekfsime slkfoklsklie' },
    { title: 'Can I have two Banko accounts', details: 'llerlks slkelskdfkskfk lsekffsklekfksekefkleklfksl lfsk efklkslf ekfilksekfsime slkfoklsklie' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="flex justify-center items-center ">
  <img src={mobimg} alt="imgscf" className="object-contain" />
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Need Help?</h2>
          <div className="flex items-center mb-4">
            <FiPhone className="text-gray-500 mr-2" />
            <div>
              <p className="text-gray-700 font-medium">Support Helpline</p>
              <p className="text-gray-500">1-800-123-456</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FiMail className="text-gray-500 mr-2" />
            <div>
              <p className="text-gray-700 font-medium">Support Email</p>
              <p className="text-gray-500">support@example.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 font-medium">Support</p>
            <FiArrowRight className="text-gray-500 ml-2 cursor-pointer" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {content.map((item, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleContent(index)}
              >
                <p className="text-gray-700 font-medium">{item.title} <hr/></p>
                <hr/>
                {activeIndex === index ? (
                  <FiX className="text-gray-500" />
                ) : (
                  <FiPlus className="text-gray-500" />
                )}
              </div>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg border">
                  <p className="text-gray-600">{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
