
import React from 'react';
import { FaCheckCircle, FaRegBell } from 'react-icons/fa';

const notifications = [
  "Your payment of 49€ has been processed!",
  "You got a new support message!",
  "Your payment was declined!",
  "Please verify your payment of 99€!",
  "New account statistics are available!"
];

const NotificationsSection = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-md mb-8 md:mb-0">
          <h2 className="text-xl font-semibold text-gray-500 mb-4">Notifications</h2>
          <h3 className="text-3xl font-bold mb-6">Stay notified</h3>
          <p className="text-gray-600 mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <ul className="text-left space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-teal-600 mr-2" /> Malesuada Ipsum
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-teal-600 mr-2" /> Vestibulum
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-teal-600 mr-2" /> Parturient Lorem
            </li>
          </ul>
          <a href="#" className="text-teal-600 font-semibold mt-4 block">Compare Cards &rarr;</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-teal-600 text-white flex items-center justify-center rounded-full mr-2">
                    <FaRegBell />
                  </div>
                  <span>{notification}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
