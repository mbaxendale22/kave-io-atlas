import React, {useState} from 'react'
import Slider from './Slider.js'


const LandingPage = () => {
  const [  origin, setOrigin ] = useState(null)
  const [ process, setProcess ] = useState(null)
  const [ profile, setProfile ] = useState(null)

  
  const strike = e => {
    const origins = [ ...document.getElementById('origin-wrapper').childNodes ]
    const [ checkForStrike ] = origins.filter(x => x.classList.contains('strikethrough')) 
    if (checkForStrike === undefined) {
      e.target.classList.add('strikethrough')
      setOrigin(e.target.dataset.id)
      return
    }
    else {
      checkForStrike.classList.remove('strikethrough')
      e.target.classList.add('strikethrough')
      setOrigin(e.target.dataset.id)
      return
    }
  }
  const secondStrike = e => {
    const processes = [ ...document.getElementById('process-wrapper').childNodes ]
    const [ checkForStrike ] = processes.filter(x => x.classList.contains('strikethrough')) 
    if (checkForStrike === undefined) {
      e.target.classList.add('strikethrough')
      return
    }
    else {
      checkForStrike.classList.remove('strikethrough')
      e.target.classList.add('strikethrough')
      return
    }
  }
  const thirdStrike = e => {
    const profile = [ ...document.getElementById('profile-wrapper').childNodes ]
    const [ checkForStrike ] = profile.filter(x => x.classList.contains('strikethrough')) 
    if (checkForStrike === undefined) {
      e.target.classList.add('strikethrough')
      return
    }
    else {
      checkForStrike.classList.remove('strikethrough')
      e.target.classList.add('strikethrough')
      return
    }
  }

  const resetFilter = e => {
    const current = [... document.getElementsByClassName('strikethrough')]
    for (const x of current){
      x.classList.remove('strikethrough')
    }
      setOrigin(null)
      setProcess(null)
      setProfile(null)
    }    



  return (
    <main className='h-screen flex'>
      <div className='w-1/2'>
        <section>
          BASIC INSTRUCTIONS ON HOW IT WORKS
        </section>
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
        <section>
          <hr className= 'w-1/2' />
        <div style={{border: '2px solid black'}} id='process-wrapper' className='font-Roboto p-8 flex justify-center flex-wrap w-full'>
          <span onClick={secondStrike}>WASHED //</span> 
          <span onClick={secondStrike}>HONEY //</span> 
          <span onClick={secondStrike}>NATURAL //</span>   
        </div>
        </section> 
        <section>
        <hr className= 'w-1/2' />
        <div style={{border: '2px solid black'}} id='profile-wrapper' className='font-Roboto p-8 flex justify-center flex-wrap w-full'>
          <span onClick={thirdStrike}>FILTER //</span> 
          <span onClick={thirdStrike}>ESPRESSO //</span> 
          <span onClick={thirdStrike}>OMNI //</span>   
        </div>
        </section>
        <section className='w-full flex justify-evenly p-8' style={{border: '2px solid black'}}>
        <div>Lets Go</div>
        <div onClick={resetFilter}>Reset</div>
        </section>
      </div>
      <div className='w-1/2 flex justify-center items-center m-5'>
        <section style={{border: '1px solid black'}} className='grid grid-cols-3 grid-rows-3 gap-5 h-full w-full'>
        <Slider />
        </section>
      </div>
      
    </main>
  )
}

export default LandingPage
