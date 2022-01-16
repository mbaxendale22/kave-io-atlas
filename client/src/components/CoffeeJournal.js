import React from 'react'
import Nav from './Nav'

const CoffeeJournal = () => {
  return (
    <div className="h-screen border bg-main">
    <Nav />
    <section className="flex flex-col w-screen h-5/6 justify-center items-center bg-main ">
      <div className="flex flex-col justify-center items-center font-Roboto mt-16 mb-12 text-xl text-contrast gap-4">
        <p>Hello</p>
      </div>
    </section> 
  </div>
  )
}

export default CoffeeJournal
