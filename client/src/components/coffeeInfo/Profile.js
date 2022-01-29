import React from 'react'

const Profile = ({ process, profile, notes }) => {
  return (
    <div className=" text-gray-700 text-sm w-full h-full grid grid-cols-4 grid-rows-2 p-3 gap-5 font-Roboto">
      <div className="col-start-1 col-end-3 flex flex-col justify-center items-center sm:border-black sm:border-2 sm:shadow-md info-card">
        <h2 className="font-bold">PROCESS</h2>
        <p>{process}</p>
      </div>
      <div className="col-start-3 col-end-5 flex flex-col justify-center items-center sm:border-black sm:border-2 sm:shadow-md info-card">
        <h2>PROFILE</h2>
        <p>{profile}</p>
      </div>
      <div className="col-start-1 col-end-5 flex flex-col pt-4 items-center sm:border-black sm:border-2 sm:shadow-md info-card">
        <h2>NOTES</h2>
        <div className="flex flex-col items-center sm:flex-row sm:justify-around mt-1 w-full">
          {notes.length ? (
            notes.map((note) => <p key={note}>{note.toUpperCase()}</p>)
          ) : (
            <p>No Notes Provided By Roaster</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
