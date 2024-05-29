import React from 'react';
import cardimgs2 from './cardimgs2.jpeg';
const CardDisplay = () => {
  return (
    <section className="py-20 flex justify-center space-x-4">
      <img src={cardimgs2} alt='cardimg' />
    </section>
  );
};

export default CardDisplay;
