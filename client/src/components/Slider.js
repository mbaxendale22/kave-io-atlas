import React, { useState } from 'react'
import { dummyData } from './DummyData'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import InfoBar from './InfoBar'

const Slider = () => {

  const [ current, setCurrent ] = useState(0)
  const [ button, setButton ] = useState(false)
  const [ showInfo, setShowInfo ] = useState(false)

  const next = () => setCurrent(current === dummyData.length -1 ? 0 : current + 1)
  const previous = () => setCurrent(current === 0 ? dummyData.length -1 : current - 1)
  const displayInfo = () => setButton(true)
  const removeInfo = () => setButton(false)

  return (
    <>
    <div className= {showInfo ? ' col-span-2 bg-gray-700': 'hidden'}>1</div>
    <div className= 'bg-gray-700'>2</div>
    <div className= 'bg-gray-700'>3</div>
      {
        dummyData.map((c, i) => {
          return (
            <>
            
            <div 
            key={c._id}
            onMouseEnter={displayInfo} onMouseLeave={removeInfo} 
            className={i === current ? 'opacity-100 transition duration-500 row-span-2 col-span-2 ease in relative' : 'hidden'}
            style={{border: '5px solid black'}}>
              { i === current && 
              (<img className='rounded-xl shadow-2xl  object-cover h-full  w-full' src={c.image} alt={c.title} />) }
              {button && 
              <motion.div
              initial={{opacity: 0, y: -40}}
              animate={{opacity: 1, y: 0}} 
              className='bg-white h-8 w-5/12 absolute bottom-4 right-1/4 rounded-lg z-20 
              flex flex-col justify-evenly items-center'
              onClick={()=> setShowInfo(true)}>
                Show Info
                </motion.div>
              } 
              {/* <InfoBar
                price={c.price}
                origin={c.origin}
                producer={c.producer}
                process={c.process}
                profile={c.profile}
                url={c.url}
                description={c.description}
                notes={c.notes} /> */}
            
              <FaAngleDoubleLeft color='white' size='9%' className=' shadow-md absolute bottom-4 left-4 cursor-pointer z-10 text-3xl' onClick={previous} />
              <FaAngleDoubleRight color='white' size='9%' className='shadow-md absolute bottom-4 right-4 cursor-pointer z-10 text-3xl' onClick={next} />
            </div>
            </>
            )}
            )
      }
    <div className='bg-gray-700'>4</div>
   
    <div className='bg-gray-700'>5</div>
    <div className='bg-gray-700'>6</div>
    <div className='bg-gray-700'>7</div>
    <div className='bg-gray-700'>8</div>
      </>
  )
}

export default Slider
