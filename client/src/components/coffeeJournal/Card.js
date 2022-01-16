import React from 'react';

const Card = ({ coffee, origin, roaster, brew, score }) => {
  return (
    <div className="info-card flex flex-col justify-center items-center border-2 border-black shadow-md text-contrast text-Roboto p-2">
      <p>{coffee}</p>
      <p>{origin}</p>
      <p>{roaster}</p>
      {/* <p>{brew}</p> */}
      <p>{score}</p>
      <div className='flex w-full justify-evenly'>
        <button>view</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Card;

// user: { type: mongoose.Schema.ObjectId, ref: 'User' },
// coffee: { type: mongoose.Schema.ObjectId, ref: 'Coffee' },
// roaster: { type: mongoose.Schema.ObjectId, ref: 'Roaster' },
// brew: { type: String },
// recipe: { type: String },
// score: { type: Number },
// notes: { type: String, maxlength: 1000 },
// });
