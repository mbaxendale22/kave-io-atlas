import React from 'react'
import { useHistory } from 'react-router-dom'
import Buttons from './Buttons'
import Scores from './Scores'

const Card = ({ entry, setEditing, setModal }) => {
  const history = useHistory()
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

        {/* left hand side */}

        <div className='flex flex-col items-center sm:flex-row w-full h-1/2'>
          <div className='flex flex-col items-center justify-evenly h-1/2 sm:h-full w-full sm:w-1/2'>
            <div className='flex flex-col items-center w-full'>
            <h2 className='font-Montserrat uppercase'>Tasting Scores</h2>
          <div className="flex justify-evenly w-full">
            <p>Acidity: {entry.tasting.acidity}</p>
            <p>Sweetness: {entry.tasting.sweetness}</p>
            <p>Body: {entry.tasting.body}</p>
            <p>Finish: {entry.tasting.finish}</p>
          </div>
            </div>
          <div className="flex flex-col items-center">
            <h2 className='font-Montserrat uppercase'>brewed with</h2>
            <p>{entry.brew}</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className='font-Montserrat uppercase'>overall score</h2>
            <p>{entry.score}</p>
          </div>
          </div>

          {/* right-hand side */}

          <div className='flex flex-col items-center justify-evenly h-1/2 sm:h-full w-full sm:w-1/2'>
          <div className="flex flex-col items-center">
            <h2 className='font-Montserrat uppercase'>recipe</h2>
            <p>{entry.recipe}</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className='font-Montserrat uppercase'>notes</h2>
            <p>{entry.notes}</p>
          </div>

          </div>
        </div>
 

      {/* buttons */}

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
