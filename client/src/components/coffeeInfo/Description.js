import React from 'react'

const Description = ({ description, price, url }) => {


  const highlight = e => e.target.style.cssText = 'transform: scale(1.08); color: red;'
  const stopHighlight = e => e.target.style.cssText = 'transform: scale(1);'


  return (
    <div
    className=' text-gray-700  text-justify text-xs w-full h-full flex flex-col justify-evenly items-center font-Roboto'>
      <h2>IN THE ROASTER'S WORDS</h2>
      <p>{description}</p>
      <p>{price}</p>
      <a onMouseEnter={highlight} onMouseLeave={stopHighlight} target='_blank' rel='noreferrer' href={url}>Buy From Roaster</a>      
    </div>
  )
}

export default Description