import React, { useState } from 'react';

const Favourite = () => {
  const [updateJournal, setUpdateJournal] = useState(false);

  return (
    <div className=" text-contrast w-full h-full flex flex-col justify-center items-center text-sm font-Roboto">
      {updateJournal ? (
        <p className='hover:bg-black hover:text-white cursor-pointer px-2' onClick={() => setUpdateJournal(false)} >In your Coffee Journal</p>
      ) : (
        <>
          <p className='hover:bg-black hover:text-white cursor-pointer px-2' onClick={() => setUpdateJournal(true)}  >Add to Coffee Journal</p>
        </>
      )}
    </div>
  );
};

export default Favourite;
