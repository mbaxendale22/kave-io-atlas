import React from "react";

const Description = ({ description, price, url }) => {
  return (
    <div className=" text-justify text-xs sm:text-sm w-full p-4 flex flex-col justify-center items-center sm:gap-16 font-Roboto text-contrast overflow-x-hidden">
      <h2>IN THE ROASTER'S WORDS</h2>
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
