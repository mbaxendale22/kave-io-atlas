import React from 'react';

const price = ({ price }) => {
  return (
    <div className=" text-contrast w-full h-full flex flex-col justify-center items-center font-Roboto">
      <h2>Price</h2>
      <p>£{price}</p>
    </div>
  );
};

export default price;
