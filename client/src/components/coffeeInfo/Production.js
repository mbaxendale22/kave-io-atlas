import React from 'react';

const Production = ({ roaster, producer, url }) => {
  return (
    <div className="sm:w-full w-11/12 h-full text-gray-700 text-sm font-Roboto flex ml-2 flex-col sm:flex-row mx-2 space-x-1 gap-3 sm:gap-0">
      <div className="flex flex-col justify-center items-center sm:w-1/2 sm:border-gray-700 sm:border-2 sm:shadow-md info-card">
        <h2>ROASTED BY</h2>
        <a
          className="hover:bg-black hover:text-white px-2"
          href={roaster.website}
          target="_blank"
          rel="noreferrer"
        >
          {roaster.name}
        </a>
      </div>
      <div className="flex flex-col justify-center items-center text-center sm:w-1/2 sm:border-gray-700 sm:border-2 sm:shadow-md info-card">
        <h2>PRODUCED BY</h2>
        <p>{producer}</p>
      </div>
    </div>
  );
};

export default Production;
