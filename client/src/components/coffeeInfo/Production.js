import React from 'react'

const Production = ({ roaster, producer, url }) => {
  return (
    <div
    style={{border: '1px solid black'}}
        className=' text-gray-700 text-xs w-full h-full grid grid-cols-4 grid-rows-3 font-Roboto'>
      <div
      className='col-start-1 col-end-3 row-start-1 row-end-4 flex flex-col justify-center items-center' 
      style={{border: '1px solid black'}}>
      <h2>ROASTED BY</h2>
      <p>Placeholder</p>      
      </div>
      <div
       className='col-start-3 col-end-5 row-start-1 row-end-4 flex flex-col justify-center items-center '  
      style={{border: '1px solid black'}}>
      <h2>PRODUCED BY</h2>
      <p>{producer}</p>      
      </div>
    </div>
  )
}

export default Production