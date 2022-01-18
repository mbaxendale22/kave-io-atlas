import React, { useState } from 'react';
import Nav from '../Nav';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { getUserJournalEntry } from '../../helpers/api';

const CoffeeShow = () => {
  const [editing, setEditing] = useState(false);
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery('currentEntry', () =>
    getUserJournalEntry(id)
  );

  if (isLoading) return <p>Loading...</p>;
  const [entry] = data;

  console.log(entry);

  return (
    <div className="h-screen border bg-main">
      <Nav />
      <section className="flex w-screen h-5/6 justify-center items-center bg-main ">
        {!editing ? (
          <div className="overflow-hidden shadow-lg rounded-lg h-5/6 w-1/2 cursor-pointer m-auto border">
            <div className="w-full block h-full bg-white">
              <img
                alt="map of coffee region"
                src={entry.coffee.image}
                className="max-h-40 w-full object-cover"
              />
              <p className=" uppercase text-xl font-medium mb-2 w-full text-center p-2 bg-contrast text-light">
                {entry.coffee.title}
              </p>
              <div className="bg-white dark:bg-gray-800 w-full p-4 grid grid-cols-5 grid-rows-3 h-1/2 border text-center font-Roboto gap-y-4">
                {/* top row */}
                <div className="col-start-1 col-end-1">
                  <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {entry.coffee.process}
                  </p>
                </div>
                <div className="col-start-3 col-end-3">
                  <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {entry.coffee.origin}
                  </p>
                </div>
                <div className="col-start-5 col-end-5">
                  <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {entry.roaster.name}
                  </p>
                </div>

                {/* middle row */}

                <div className="col-start-2 col-end-2">
                  <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {entry.brew}
                  </p>
                </div>
                <div className="col-start-4 col-end-4">
                  <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    Score: {entry.score}
                  </p>
                </div>

                {/* bottom row */}

                <div className="row-start-3 col-span-5 text-center">
                  <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    {entry.notes}
                  </p>
                </div>
              </div>
              <div className='w-full flex justify-evenly'>

              <button
                onClick={() => setEditing(true)}
                className="flex-shrink-0 px-6 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              >
                Edit
              </button>
              <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                Delete
              </button>


              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <div className="w-full block h-full">
              <img
                alt="map of coffee region"
                src={entry.coffee.image}
                className="max-h-40 w-full object-cover"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-indigo-500 text-md font-medium"></p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  {entry.coffee.title}
                </p>
                <input className="text-gray-400 dark:text-gray-300 font-light text-md" />
              </div>
            </div>
            <button
              onClick={() => setEditing(false)}
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-contrast bg-light rounded-lg shadow-md hover:bg-contrast hover:text-light focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            >
              cancel
            </button>
            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-contrast bg-light rounded-lg shadow-md hover:bg-contrast hover:text-light focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
              Delete
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default CoffeeShow;
