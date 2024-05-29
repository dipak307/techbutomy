import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faPiggyBank, faMobileAlt, faChartBar, faCreditCard, faWifi } from '@fortawesome/free-solid-svg-icons';

const icons = {
  "Instant transactions": faBolt,
  "Saving accounts": faPiggyBank,
  "Mobile banking": faMobileAlt,
  "Advanced statistics": faChartBar,
  "Virtual cards": faCreditCard,
  "Contactless payments": faWifi,
};

const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <FontAwesomeIcon icon={icons[title]} className="text-teal-600 text-3xl mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;

