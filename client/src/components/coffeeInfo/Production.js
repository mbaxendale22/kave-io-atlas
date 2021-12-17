import React from 'react';

const Production = ({ roaster, producer, url }) => {
  return (
    <div className="text-xs w-full h-full font-Roboto flex flex-col sm:flex-row ml-2 space-x-1 gap-3 sm:gap-0">
      <div className="flex flex-col justify-center items-center sm:w-1/2 sm:border-gray-700 sm:border-2 sm:shadow-md">
        <h2>ROASTED BY</h2>
        <p>Placeholder</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center sm:w-1/2 sm:border-gray-700 sm:border-2 sm:shadow-md">
        <h2>PRODUCED BY</h2>
        <p>{producer}</p>
      </div>
    </div>
  );
};

export default Production;
