import React from 'react'
import { BiPound } from 'react-icons/bi'
import { GiCoffeeBeans } from 'react-icons/gi'
import { motion } from 'framer-motion'

const InfoBar = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: -30}}
    animate={{opacity: 1, y: -10}} 
    className='bg-white h-8 w-4/5 rounded-lg left-12 absolute bottom-5 z-20 
    flex flex-row justify-around items-center'>
    <BiPound />
    <GiCoffeeBeans />  

    </motion.div>
  )
}

export default InfoBar
