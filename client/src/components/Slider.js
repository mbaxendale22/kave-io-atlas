import React, { useState } from 'react'
import { dummyData } from './DummyData'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import InfoBar from './InfoBar'

const Slider = () => {

  const [ current, setCurrent ] = useState(0)
  const [ info, setInfo ] = useState(false)

  const next = () => setCurrent(current === dummyData.length -1 ? 0 : current + 1)
  const previous = () => setCurrent(current === 0 ? dummyData.length -1 : current - 1)
  const displayInfo = () => setInfo(true)
  const removeInfo = () => setInfo(false)

  return (
    <section className='relative h-5/6 ml-10 w-1/3'>
    <>
      {
        dummyData.map((c, i) => {
          return (
            <div 
            key={c._id}
            onMouseEnter={displayInfo} onMouseLeave={removeInfo} 
            className={i === current ? 'opacity-100 w-3/4 h-full transition duration-500 ease in relative' : 'opacity-0'}>
              { i === current && (<img className='rounded-xl shadow-2xl  object-cover h-full  w-full' src={c.image} alt={c.title} />) }
              {i === current && info && 
              <InfoBar
                price={c.price}
                origin={c.origin}
                producer={c.producer}
                process={c.process}
                profile={c.profile}
                url={c.url}
                description={c.description}
                notes={c.notes} />
            }
               <FaAngleDoubleLeft color='white' size='9%' className=' shadow-md absolute bottom-4 left-4 cursor-pointer z-10 text-3xl' onClick={previous} />
              <FaAngleDoubleRight color='white' size='9%' className='shadow-md absolute bottom-4 right-4 cursor-pointer z-10 text-3xl' onClick={next} />
            </div>
            )}
            )
      }
      </>
    
    </section>
  )
}

export default Slider
