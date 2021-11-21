import React from 'react'
import Slider from './Slider.js'


const LandingPage = () => {

  const strike = e => {
    e.target.style.setProperty('text-decoration', 'line-through')
    e.target.style.setProperty('text-decoration-color', 'red')
  }



  return (
    <main className='h-screen ' style={{border: '2px solid black'}}>
      <section>
          <h2>/*/ FILTER BY REGION /*/</h2>
        <div className='font-Roboto flex flex-wrap w-1/2'>
          <span onClick={strike}>BOLIVA //</span> 
          <span onClick={strike}>BRAZIL //</span> 
          <span onClick={strike}>COLOMBIA //</span> 
          <span onClick={strike}>COSTA RICA //</span> 
          <span onClick={strike}>ECUADOR //</span> 
          <span onClick={strike}>ETHIOPIA //</span> 
          <span onClick={strike}>EL SALVADOR //</span> 
          <span onClick={strike}>GUATEMALA //</span> 
          <span onClick={strike}>HONDURAS //</span> 
          <span onClick={strike}>NICARAGUA //</span> 
          <span onClick={strike}>BRAZIL //</span> 
        </div>  
      </section> 
      <section>
      <div className='font-Roboto flex flex-wrap w-1/2'>
        <span>WASHED //</span> 
        <span>HONEY //</span> 
        <span>NATURAL //</span>   
      </div>
      </section> 
      <section></section>
      {/* ilter by profile */}

    <section className='flex flex-col justify-evenly items-end mx-4'>
      <Slider /> 
      {/* <p>Show me more</p>
      <div style={{border: '2px solid black'}} className='flex justify-between w-2/4'>
      <button>From this Origin</button>
      <button>With this Process</button>
      <button>In this Roast Style</button>
      </div> */}
      <Slider /> 
      <Slider /> 
    </section>
    </main>
  )
}

export default LandingPage
