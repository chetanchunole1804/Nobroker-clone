import React from 'react';

const InfoCards: React.FC = () => {
  return (
    <div className='w-[20%] bg-white sm:block hidden' >
      <div >
        <h4>Rental Agreement</h4>
        <p>No need to visit Government office</p>
        <button>Get It Now</button>
      </div>
      <div >
        <h4>Get Tenants Faster</h4>
        <p>Subscribe to our owner plans</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default InfoCards;
