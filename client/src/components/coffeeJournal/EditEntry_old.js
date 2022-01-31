import React from "react";

const EditEntryOld = ({ entry, handleChange, updateEntry, setEditing }) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-5/6 w-1/2 cursor-pointer m-auto border">
      <div className="w-full block h-full bg-white">
        <img
          alt="map of coffee region"
          src={entry.coffee.image}
          className="max-h-40 w-full object-cover"
        />
        <div className="mb-2 w-full p-2 bg-contrast text-light flex justify-evenly items-center text-xl font-Montserrat uppercase">
          <p className="">{entry.coffee.title}</p>
          <p className="">{entry.coffee.origin}</p>
        </div>
        <form onSubmit={() => updateEntry()}>
          <div className="bg-white dark:bg-gray-800 w-full p-4 grid grid-cols-5 grid-rows-3 h-1/2 border text-center font-Roboto gap-y-4">
            {/* top row */}
            <div className="col-start-1 col-end-1">
              <p className="text-gray-800 dark:text-gray-300 font-light text-md">
                {entry.coffee.process}
              </p>
            </div>
            <div className="col-start-3 col-end-3">
              <input
                onChange={handleChange}
                className="text-gray-800 dark:text-gray-300 font-light text-md"
                placeholder="change recipe?"
                type="text"
                name="brew"
              />
            </div>
            <div className="col-start-5 col-end-5">
              <p className="text-gray-800 dark:text-gray-300 font-light text-md">
                {entry.roaster.name}
              </p>
            </div>

            {/* middle row */}

            <div className="col-start-2 col-end-2">
              <input
                onChange={handleChange}
                className="text-gray-800 dark:text-gray-300 font-light text-md"
                placeholder="change method?"
                type="text"
                name="brew"
              />
            </div>
            <div className="col-start-4 col-end-4">
              <input
                onChange={handleChange}
                className="text-gray-800 dark:text-gray-300 font-light text-md"
                placeholder="change score?"
                type="text"
                name="score"
              />
            </div>

            {/* bottom row */}

            <div className="row-start-3 col-span-5 text-center">
              <textarea
                onChange={handleChange}
                className="text-gray-800 dark:text-gray-300 font-light text-md"
                placeholder="change notes?"
                type="text"
                name="notes"
              />
            </div>
          </div>
          
          <div className="w-full flex justify-evenly font-Montserrat">
            <button className="flex-shrink-0 px-6 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
              SAVE
            </button>
            <button
              onClick={() => setEditing(false)}
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEntryOld;
