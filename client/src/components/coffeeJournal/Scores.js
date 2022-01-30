import React from 'react';

const Scores = ({ metric }) => {
  return (

<div className="flex items-center gap-4">
  <p>{metric}</p>
    <label className="inline-flex items-center">
        <input type="radio" name="vehicle" className="h-5 w-5 text-red-600"/>
            <span className="ml-2 text-gray-700">
                1
            </span>
        </label>
        <label className="inline-flex items-center">
            <input type="radio" name="vehicle" className="h-5 w-5 text-red-600"/>
                <span className="ml-2 text-gray-700">
                    2
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name="vehicle" className="h-5 w-5 text-red-600"/>
                <span className="ml-2 text-gray-700">
                    3
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name="vehicle" className="h-5 w-5 text-red-600"/>
                <span className="ml-2 text-gray-700">
                    4
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name="vehicle" className="h-5 w-5 text-red-600"/>
                <span className="ml-2 text-gray-700">
                    5
                </span>
            </label>
        </div>
  )
}

export default Scores;
