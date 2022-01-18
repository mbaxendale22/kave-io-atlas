import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { addToJournal } from '../../helpers/api';

const Favourite = ({ user, coffee, roaster }) => {

  
  const [ coffeeData, setCoffeeData ] = useState({
    user,
    coffee,
    roaster,
    brew: 'Brew Method?',
    recipe: 'What was your brew recipe',
    score: 77,
    notes: 'Any thoughts?'
  }
  )
  const { mutate } = useMutation(addToJournal)

  const handleClick = () => {
    mutate(coffeeData)
    setUpdateJournal(true)
  }


  const [updateJournal, setUpdateJournal] = useState(false);

  return (
    <div className=" text-contrast w-full h-full flex flex-col justify-center items-center text-sm font-Roboto">
      {updateJournal ? (
        <p className='hover:bg-black hover:text-white cursor-pointer px-2' onClick={() => setUpdateJournal(false)} >In your Coffee Journal</p>
      ) : (
        <>
          <p className='hover:bg-black hover:text-white cursor-pointer px-2' onClick={handleClick}  >Add to Coffee Journal</p>
        </>
      )}
    </div>
  );
};

export default Favourite;
