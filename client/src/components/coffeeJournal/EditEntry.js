import React, { useState } from 'react'
import Scores from './Scores'

const EditEntry = ({ entry, setEditing, handleChange, updateEntry }) => {
  const [question, setQuestion] = useState(0)


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
          <p className="">{entry.roaster.name}</p>
        </div>

        {/* main black */}

        <div className="h-1/2 w-full flex flex-col justify-evenly border items-center">
          <form className='h-full w-full' onSubmit={() => updateEntry()}>
            {question === 0 && (
              <div className='border h-full w-full flex flex-col justify-evenly items-center'>
                
              <Scores metric={"Acidity"} tasting={entry.tasting} />
                  
             
              </div>
            )}
            {question === 1 && (
              <div className='border h-full w-full flex flex-col justify-evenly items-center'>
                <h2>
                  CURRENT BREW METHOD
                </h2>

                  <p>{entry.brew}</p>
                <input
                  onChange={handleChange}
                  className="text-gray-800"
                  placeholder="change brew method..."
                  type="text"
                  name="brew"
                />
              </div>
            )}
            {question === 2 && (
              <div className='border h-full w-full flex flex-col justify-evenly items-center'>
                <h2>
                  CURRENT BREW RECIPE
                </h2>

                  <p>{entry.recipe}</p>
                <input
                  onChange={handleChange}
                  className="text-gray-800"
                  placeholder="change brew recipe..."
                  type="text"
                  name="recipe"
                />
              </div>
            )}
            {question === 3 && (
              <div className='border h-full w-full flex flex-col justify-evenly items-center'>
                <h2>
                  CURRENT NOTES
                </h2>

                  <p>{entry.notes}</p>
                <input
                  onChange={handleChange}
                  className="text-gray-800"
                  placeholder="change notes..."
                  type="text"
                  name="notes"
                />
              </div>
            )}
            {question === 4 && (
              <div className='border h-full w-full flex flex-col justify-evenly items-center'>
                <h2>
                 OVERALL SCORE
                </h2>

                  <p>{entry.score}</p>
                <input
                  onChange={handleChange}
                  className="text-gray-800"
                  placeholder="change notes..."
                  type="text"
                  name="score"
                />
              </div>
            )}
          </form>
        </div>

        {/* buttons */}

        <div className="w-full flex justify-evenly font-Montserrat">
          <button
            onClick={() =>
              question === 0 ? setQuestion(0) : setQuestion(question - 1)
            }
            className="flex-shrink-0 px-6 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast "
          >
            PREV
          </button>
          <button
            onClick={() => setEditing(false)}
            className="flex-shrink-0 px-6 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast "
          >
            CANCEL
          </button>
          <button
            onClick={() =>
              question === 4 ? setQuestion(4) : setQuestion(question + 1)
            }
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-light bg-contrast rounded-lg shadow-md hover:bg-light hover:text-contrast"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditEntry
