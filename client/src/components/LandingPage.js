import React from 'react'
import SidebarMenu from './SidebarMenu.js'
import Header from './Header.js'
import Slider from './Slider.js'


const LandingPage = () => {
  return (
    <>
    <div className='flex'>
      <SidebarMenu />
    </div> 
    <section>
      <Slider /> 
    </section>
    </>
  )
}

export default LandingPage
