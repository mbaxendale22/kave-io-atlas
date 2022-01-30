import React from 'react'
import { useHistory } from 'react-router-dom'
import Scores from './Scores'

const Card = ({ entry, setEditing, setModal }) => {
  const history = useHistory()
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-5/6 w-10/12 cursor-pointer m-auto">
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
        <div className="bg-white w-full p-4 grid grid-cols-5 grid-rows-3 h-1/2 text-center font-Roboto gap-y-4">
          {/* top row */}
          <div className="col-start-1 col-end-1">
            <h2>Your Tasting Notes</h2>
            <p>Acidity: {entry.tasting.acidity}</p>
            <p>Sweetness: {entry.tasting.acidity}</p>
            <p>Body: {entry.tasting.acidity}</p>
            <p>Finish: {entry.tasting.acidity}</p>
          </div>
          <div className="col-start-3 col-end-3">
            <p className="text-gray-800 font-light text-md">{entry.recipe}</p>
          </div>
          <div className="col-start-5 col-end-5">
            <p className="text-gray-800 font-light text-md">
              {entry.roaster.name}
            </p>
          </div>

          {/* middle row */}

          <div className="col-start-2 col-end-2">
            <p className="text-gray-800 font-light text-md">{entry.brew}</p>
          </div>
          <div className="col-start-4 col-end-4">
            <p className="text-gray-800 font-light text-md">
              Score: {entry.score}
            </p>
          </div>

          {/* bottom row */}

          <div className="row-start-3 col-span-5 text-center">
            <p className="text-gray-800 font-light text-md">{entry.notes}</p>
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
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast"
            onClick={() => setModal(true)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
