import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { faApple, faAmazon, faTwitter, faMicrosoft, faDropbox, faPaypal} from '@fortawesome/free-brands-svg-icons';

const transactions = [
  { name: "Apple", amount: "-999€", icon: faApple },
  { name: "Amazon", amount: "-49€", icon: faAmazon },
  { name: "Twitter", amount: "-29€", icon: faTwitter },
  { name: "Microsoft", amount: "-149€", icon: faMicrosoft },
  { name: "Dropbox", amount: "-14€", icon: faDropbox },
  { name: "Paypal", amount: "-200€", icon: faPaypal },
];

const TransactionSection = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-md mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Send & receive money instantly</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
          </p>
          <ul className="text-left space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-teal-600 mr-2" /> Malesuada Ipsum
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-teal-600 mr-2" /> Vestibulum
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-teal-600 mr-2" /> Parturient Lorem
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <ul className="space-y-4">
            {transactions.map((transaction, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={transaction.icon} className="text-teal-600 mr-2" />
                  <span>{transaction.name}</span>
                </div>
                <span>{transaction.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TransactionSection;
