import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Login = () => {
  
  
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    const postData = async () => {
      const post = axios.post()
    }
  })
  
  
  const handleChange = (e) => {
    const newLogin = { ...login, [e.target.name]: e.target.value }
    console.log(newLogin)
    setLogin(newLogin)
  }
  

  return (
      <div className='show-page'>
      <form className='flex-c-c h-3/4 w-3/4'>
        <div className='flex-c-c p4-4 border-2 bg-gray-200 shadow-md w-1/3 h-1/6 '>
        <label for='username'>Username</label>
        <input className='border-2 border-gray-500 rounded-md p-1 mt-2' onChange={handleChange} type='text' name='username' placeholder='username' />
        </div>
        <div className='flex-c-c p4-4 border-2 bg-gray-200 shadow-md w-1/3 h-1/6'>
        <label for='password'>Password</label>
        <input className='border-2 border-gray-500  rounded-md p-1 mt-2' onChange={handleChange} type='password' name='password' placeholder='password' />
        </div>
        <div className='flex-c-c p4-4 border-2 bg-gray-200 shadow-md w-1/3 h-1/6'>
        <button className=' border-2 border-gray-300 p-2 rounded-md bg-white' type='submit'>Submit</button>
        </div>

      </form>



      </div>
  )
}

export default Login
