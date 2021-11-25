
const Profile = ({ process, profile, notes }) => {
  return (
    <div
    className=' text-gray-700 text-xs w-full h-full grid grid-cols-4 grid-rows-2 p-3 gap-5 font-Roboto'>
      <div style={{border: '1px solid black'}} className='col-start-1 col-end-3 flex flex-col justify-center items-center'>
      <h2>PROCESS</h2>
      <p>{process}</p> 
      </div>
      <div style={{border: '1px solid black'}} className='col-start-3 col-end-5 flex flex-col justify-center items-center' >
      <h2>PROFILE</h2>
      <p>{profile}</p>      
      </div>
      <div className='col-start-1 col-end-5 flex flex-col items-center'>
      <h2>NOTES</h2>
      <div style={{border: '1px solid black'}} className='flex justify-around mt-1 w-full'>
      {notes.map((note)=> <p>{note.toUpperCase()}</p> )}
      </div>   
      </div>
    </div>
  )
}

export default Profile