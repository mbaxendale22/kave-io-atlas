const Profile = ({ process, profile, notes }) => {
  return (
    <div className=" text-gray-700 text-xs w-full h-full grid grid-cols-4 grid-rows-2 p-3 gap-5 font-Roboto">
      <div className="col-start-1 col-end-3 flex flex-col justify-center items-center sm:border-black border-2">
        <h2>PROCESS</h2>
        <p>{process}</p>
      </div>
      <div className="col-start-3 col-end-5 flex flex-col justify-center items-center sm:border-black border-2">
        <h2>PROFILE</h2>
        <p>{profile}</p>
      </div>
      <div className="col-start-1 col-end-5 flex flex-col items-center sm:border-black border-2">
        <h2>NOTES</h2>
        <div className="flex justify-around mt-1 w-full">
          {notes.map((note) => (
            <p>{note.toUpperCase()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
