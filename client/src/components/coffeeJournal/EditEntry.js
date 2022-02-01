import React, { useState } from 'react'
import Buttons from './Buttons'
import Scores from './Scores'

const EditEntry = ({ entry, setEditing, handleChange, updateEntry }) => {
  const [question, setQuestion] = useState(0)

  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-full sm:h-5/6 w-full sm:w-10/12 cursor-pointer m-auto">
      <div className="w-full block h-full bg-white">
        <img
          alt="map of coffee region"
          src={entry.coffee.image}
          className="max-h-32 sm:max-h-40 w-full object-cover"
        />
        <div className="mb-2 w-full p-2 bg-contrast text-light flex flex-col sm:flex-row justify-evenly items-center text-base sm:text-xl font-Montserrat uppercase">
          <p className="">{entry.coffee.title}</p>
          <p className="">{entry.coffee.origin}</p>
          <p className="">{entry.roaster.name}</p>
        </div>

        {/* main black */}

        <div className="h-1/2 w-full flex flex-col justify-evenly items-center">
          <form className="h-full w-full" onSubmit={() => updateEntry()}>
            {question === 0 && (
              <div className="h-full w-full flex flex-col justify-evenly items-center">
                <Scores
                  metric={'acidity'}
                  tasting={entry.tasting}
                  handleChange={handleChange}
                />
                <Scores
                  metric={'sweetness'}
                  tasting={entry.tasting}
                  handleChange={handleChange}
                />
                <Scores
                  metric={'body'}
                  tasting={entry.tasting}
                  handleChange={handleChange}
                />
                <Scores
                  metric={'finish'}
                  tasting={entry.tasting}
                  handleChange={handleChange}
                />
              </div>
            )}
            {question === 1 && (
              <div className="h-full w-full flex flex-col justify-evenly items-center">
                <h2>CURRENT BREW METHOD</h2>

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
              <div className="h-full w-full flex flex-col justify-evenly items-center">
                <h2>CURRENT BREW RECIPE</h2>

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
              <div className="h-full w-full flex flex-col justify-evenly items-center">
                <h2>CURRENT NOTES</h2>

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
              <div className="h-full w-full flex flex-col justify-evenly items-center">
                <h2>OVERALL SCORE</h2>

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
            {/* buttons */}

            {question === 4 ? (
              <Buttons
                question={question}
                setQuestion={setQuestion}
                mainOperation={'save'}
                buttonType={'submit'}
              />
            ) : (
              <Buttons
                question={question}
                setQuestion={setQuestion}
                mainOperation={'cancel'}
                buttonType={'button'}
                mainFunction={() => setEditing(false)}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditEntry
