import React from 'react'
import SidebarMenu from './SidebarMenu.js'
import Header from './Header.js'


const LandingPage = () => {
  return (
    <>
    <div className='flex'>
      <SidebarMenu />
    </div>
    <section className=' z-0 flex justify-center bg-gradient-to-br from-blue-900 to-blue-300'>
      <Header />    
    </section>
    </>
  )
}

export default LandingPage
