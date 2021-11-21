import React from 'react'
import Slider from './Slider.js'


const LandingPage = () => {
  return (
    <>
    <section className='grid grid-cols-1 grid-rows-3 gap-5' style={{border: '2px solid black'}}>
      <Slider /> 
      <Slider /> 
      <Slider /> 
    </section>
    </>
  )
}

export default LandingPage
