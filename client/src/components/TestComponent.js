import React from 'react'

const TestComponent = () => {




  return (
         <section className='' style={{border: '2px solid black'}}>
            <h2>/*/ FILTER BY REGION /*/</h2>
          <div id='origin-wrapper' className='font-Roboto justify-center flex flex-wrap w-full p-8'>
            <span data-id='Boliva' onClick={strike}>BOLIVA // </span> 
            <span data-id='Brazil' onClick={strike}>BRAZIL // </span> 
            <span data-id='Colombia' onClick={strike}>COLOMBIA // </span> 
            <span data-id='Costa Rica' onClick={strike}>COSTA RICA // </span> 
            <span data-id='Ecuador' onClick={strike}>ECUADOR // </span> 
            <span data-id='Ethiopia' onClick={strike}>ETHIOPIA // </span> 
            <span data-id='El Salvador' onClick={strike}>EL SALVADOR // </span> 
            <span data-id='Guatemala' onClick={strike}>GUATEMALA // </span> 
            <span data-id='Honduras' onClick={strike}>HONDURAS // </span> 
            <span data-id='Nicaragua' onClick={strike}>NICARAGUA // </span> 
          </div>  
        </section> 
  )
}

export default TestComponent
