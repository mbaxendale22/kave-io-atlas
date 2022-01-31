import React, {useState} from 'react';

const Scores = ({ metric, tasting }) => {
  
  const [tastingScore, setTastingScore] = useState({
  tasting
  })
  

  const handleChange = e => {
    const property = e.target.name
    // let newTastingScore = { ...tastingScore, : e.target.value }
    setTastingScore(newTastingScore)
  }
 
  console.log(tastingScore);
  return (


<div className="flex items-center gap-4">
  <p>{metric}</p>
    <label className="inline-flex items-center">
        <input type="radio" name="acidity" value="1" className="h-5 w-5 text-red-600" onChange={handleChange}/>
            <span className="ml-2 text-gray-700">
                1
            </span>
        </label>
        <label className="inline-flex items-center">
            <input type="radio" name="acidity" value="2" className="h-5 w-5 text-red-600" onChange={handleChange}/>
                <span className="ml-2 text-gray-700">
                    2
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name="acidity" value="3" className="h-5 w-5 text-red-600" onChange={handleChange}/>
                <span className="ml-2 text-gray-700">
                    3
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name="acidity" value="4" className="h-5 w-5 text-red-600" onChange={handleChange}/>
                <span className="ml-2 text-gray-700">
                    4
                </span>
            </label>
        <label className="inline-flex items-center">
            <input type="radio" name="acidity" value="5" className="h-5 w-5 text-red-600" onChange={handleChange}/>
                <span className="ml-2 text-gray-700">
                    5
                </span>
            </label>
        </div>
  )
}

export default Scores;
