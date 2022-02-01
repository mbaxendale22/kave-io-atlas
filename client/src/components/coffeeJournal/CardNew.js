import React from 'react';

const CardNew = ({ entry, setEditing, setModal }) => {
  return <div className='w-full h-full border-2 border-black'>


<div className="mb-2 w-full p-2 bg-contrast text-light flex flex-col sm:flex-row justify-evenly items-center text-base sm:text-xl font-Montserrat uppercase">
          <p className="">{entry.coffee.title}</p>
          <p className="">{entry.coffee.origin}</p>
          <p className="">{entry.roaster.name}</p>
        </div>
  </div>;
};

export default CardNew;
