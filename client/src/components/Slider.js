import React, { useState } from 'react'
import { dummyData } from './DummyData'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import InfoBar from './InfoBar'

const Slider = () => {

  const [ current, setCurrent ] = useState(0)
  const [ info, setInfo ] = useState(false)

  const next = () => setCurrent(current === dummyData.length -1 ? 0 : current + 1)
  const previous = () => setCurrent(current === 0 ? dummyData.length -1 : current - 1)
  const displayInfo = () => setInfo(!info)

  return (
    <section onMouseEnter={displayInfo} onMouseLeave={displayInfo} className='relative flex flex-row justify-evenly m-8 w-80' >
    <FaAngleDoubleLeft className='absolute top-1/2 -left-5 cursor-pointer z-10' onClick={previous} />
    <FaAngleDoubleRight className='absolute top-1/2 -right-16 cursor-pointer z-10' onClick={next} />
      {
        dummyData.map((c, i) => {
          return (
            <div className={i === current ? 'opacity-100 transition duration-500 ease in' : 'opacity-0'}>
              { i === current && (<img className='rounded-xl w-6/8' src={c.image} alt={c.title} />) }
            </div>
            )}
            )
      }
    {info && <InfoBar />}
    </section>
  )
}

export default Slider
