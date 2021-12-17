import React from 'react';
import { highlight, stopHighlight } from '../../helpers/UI';

const Description = ({ description, price, url }) => {
  return (
    <div className=" text-gray-700  text-justify overflow-x-scroll text-xs sm:text-sm w-full h-full p-4 flex flex-col justify-center items-center sm:gap-16 font-Roboto sm:shadow-md">
      <h2 className="pt-48 sm:pt-0">IN THE ROASTER'S WORDS</h2>
      <p className="pt-2 sm:pt-0">{description}</p>
      <p className="hidden sm:inline">{price}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        className="hidden sm:inline hover:bg-black px-2 hover:text-white"
      >
        Buy From Roaster
      </a>
    </div>
  );
};

export default Description;
