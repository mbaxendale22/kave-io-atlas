import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ entry, setEditing }) => {
  const history = useHistory()
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-5/6 w-10/12 cursor-pointer m-auto border">
            <div className="w-full block h-full bg-white">
              <img
                alt="map of coffee region"
                src={entry.coffee.image}
                className="max-h-40 w-full object-cover"
              />
              <p className=" uppercase text-xl font-Montserrat mb-2 w-full text-center p-2 bg-contrast text-light">
                {entry.coffee.title}
              </p>
              <div className="bg-white w-full p-4 grid grid-cols-5 grid-rows-3 h-1/2 border text-center font-Roboto gap-y-4">
                {/* top row */}
                <div className="col-start-1 col-end-1">
                  <p className="text-gray-800 dark:text-gray-300 font-light text-md">
                    {entry.coffee.process}
                  </p>
                </div>
                <div className="col-start-3 col-end-3">
                  <p className="text-gray-800 dark:text-gray-300 font-light text-md">
                    {entry.coffee.origin}
                  </p>
                </div>
                <div className="col-start-5 col-end-5">
                  <p className="text-gray-800 dark:text-gray-300 font-light text-md">
                    {entry.roaster.name}
                  </p>
                </div>

                {/* middle row */}

                <div className="col-start-2 col-end-2">
                  <p className="text-gray-800 dark:text-gray-300 font-light text-md">
                    {entry.brew}
                  </p>
                </div>
                <div className="col-start-4 col-end-4">
                  <p className="text-gray-800 dark:text-gray-300 font-light text-md">
                    Score: {entry.score}
                  </p>
                </div>

                {/* bottom row */}

                <div className="row-start-3 col-span-5 text-center">
                  <p className="text-gray-800 dark:text-gray-300 font-light text-md">
                    {entry.notes}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-evenly font-Montserrat">
                <button
                onClick={() => setEditing(true)}
                  className="flex-shrink-0 px-6 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast "
                >
                  EDIT
                </button>
                <button
                  onClick={() => history.push('/journal')}
                  className="flex-shrink-0 px-6 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast "
                >
                  BACK
                </button>
                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast ">
                  DELETE
                </button>
              </div>
            </div>
          </div>
  );
};

export default Card;

// user: { type: mongoose.Schema.ObjectId, ref: 'User' },
// coffee: { type: mongoose.Schema.ObjectId, ref: 'Coffee' },
// roaster: { type: mongoose.Schema.ObjectId, ref: 'Roaster' },
// brew: { type: String },
// recipe: { type: String },
// score: { type: Number },
// notes: { type: String, maxlength: 1000 },
// });
