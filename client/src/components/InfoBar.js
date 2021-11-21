import React, { useState } from 'react'
import {GiFarmer, GiMusicalNotes, GiCoffeeBeans } from 'react-icons/gi'
import {RiTextWrap, RiEarthLine, RiMoneyPoundBoxLine, RiShoppingCartLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

const InfoBar = ({ price, origin, producer, process, profile, url, notes, description }) => {
  
  const [ moreInfo, setMoreInfo ] = useState(null)
  const [ isOpen, setIsOpen ] = useState(false)
 



  return (
    <motion.div
    initial={{opacity: 0, x: +40}}
    animate={{opacity: 1, x: 0}} 
    className='bg-white h-3/4 w-2/12 rounded-lg absolute right-1 top-2 z-20 
    flex flex-col justify-evenly items-center'>
      <motion.div className='relative'
        onMouseEnter={() => setMoreInfo(0)}
        onMouseLeave={() => setMoreInfo(null)}>
          <RiMoneyPoundBoxLine />
        {moreInfo === 0 && <div className='more-info'>{price}</div>
        }
      </motion.div>
      <motion.div className='relative'
        onMouseEnter={() => setMoreInfo(1)}
        onMouseLeave={() => setMoreInfo(null)}>
          <GiMusicalNotes />
          {moreInfo === 1 && <div className='more-info'>{
          notes.map(n => <span key={n}>{n}</span>)
          }
          </div>
          }
      </motion.div>
      <motion.div className='relative'
        onMouseEnter={() => setMoreInfo(2)}
        onMouseLeave={() => setMoreInfo(null)}>
          <GiFarmer />
        {moreInfo === 2 && <div className='more-info'>{producer}</div>}
      </motion.div>
      <motion.div className='relative'
        onMouseEnter={() => setMoreInfo(3)}
        onMouseLeave={() => setMoreInfo(null)}>
          <RiEarthLine />
          {moreInfo === 3 && <div className='more-info'>{origin}</div>}
      </motion.div>
      <motion.div className='relative'
        onMouseEnter={() => setMoreInfo(4)}
        onMouseLeave={() => setMoreInfo(null)}>
            <RiShoppingCartLine />
          {moreInfo === 4 && <div className='more-info'>{<a href={url}>Purchase from Roaster</a>}</div>}
      </motion.div>
      <motion.div className='relative'
        onMouseEnter={() => setMoreInfo(5)}
        onMouseLeave={() => setMoreInfo(null)}>
          <GiCoffeeBeans /> 
          {moreInfo === 5 && <div className='more-info'>{process}</div>}
      </motion.div>
      <motion.div className='relative'
        onClick={() => setIsOpen(!isOpen)}>
          <RiTextWrap />
          {isOpen && <div className='flex justify-center items-center h-screen w-screen bg-gray-400 rounded-2xl opacity-80 top-0 bottom-0 right-0 fixed'>
            <div className='bg-white shadow-2xl flex flex-col justify-center items-center w-1/2 h-1/2 text-black text-justify font-bold p-8 opacity-90 rounded-3xl'>
              <span>{description}</span>
              <button className= 'btn mt-8' onClick={() =>setIsOpen(false)}> Close</button>
              </div>
            </div>}
      </motion.div>
   </motion.div>
  )
}

export default InfoBar

