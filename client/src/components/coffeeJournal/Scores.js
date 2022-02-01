import React, { useState } from 'react';

const Scores = ({ metric, tasting, handleChange }) => {
  
 const firstLetter = metric[0].toUpperCase()
 const rest = metric.slice(1)
 const label = `${firstLetter}${rest}`
 
 useState(() => {
setTimeout(() => {
  const values = Array.from(document.getElementsByName(metric))
  const [defaultValue] = values.filter(x => x.value == tasting[metric])
  defaultValue.setAttribute('checked', 'true');
}, 100)
 }, [metric])


  return (


<div className="flex items-center gap-4">
  <p>{label}</p>
    <label className="inline-flex items-center">
        <input type="radio" name={metric} value="1" className="h-5 w-5 text-red-600" onChange={(e) => handleChange(e, metric)}/>
            <span className="ml-2 text-gray-700">
                1
            </span>
        </label>
        <label className="inline-flex items-center">
            <input type="radio" name={metric} value="2" className="h-5 w-5 text-red-600" onChange={(e) => handleChange(e, metric)}/>
                <span className="ml-2 text-gray-700">
                    2
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name={metric} value="3" className="h-5 w-5 text-red-600" onChange={(e) => handleChange(e, metric)}/>
                <span className="ml-2 text-gray-700">
                    3
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name={metric} value="4" className="h-5 w-5 text-red-600" onChange={(e) => handleChange(e, metric)}/>
                <span className="ml-2 text-gray-700">
                    4
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name={metric} value="5" className="h-5 w-5 text-red-600" onChange={(e) => handleChange(e, metric)}/>
                <span className="ml-2 text-gray-700">
                    5
                </span>
            </label>
        </div>
  )
}

export default Scores;
