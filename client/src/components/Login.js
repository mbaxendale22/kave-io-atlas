import React, { useState } from 'react';
import axios from 'axios';
import { authConfirmed } from '../helpers/auth';
import Database from './Database.js';

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(false);

  const setItemToLocalStorage = (token) =>
    window.localStorage.setItem('token', token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/login', login);
      setItemToLocalStorage(data.token);
    } catch (err) {
      setError(true);
    }
    const inputs = [...document.querySelectorAll('input')];
    inputs.forEach((i) => (i.value = ''));
  };

  const handleChange = (e) => {
    const newLogin = { ...login, [e.target.name]: e.target.value };
    setLogin(newLogin);
  };

  return (
    <>
      <div className="show-page">
        <form onSubmit={handleSubmit} className="flex-c-c h-3/4 w-3/4">
          <div className="flex-c-c p4-4 border-2 bg-gray-200 shadow-md w-1/3 h-1/6 ">
            <label for="username">Username</label>
            <input
              className="border-2 border-gray-500 rounded-md p-1 mt-2"
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div className="flex-c-c p4-4 border-2 bg-gray-200 shadow-md w-1/3 h-1/6">
            <label for="password">Password</label>
            <input
              className="border-2 border-gray-500  rounded-md p-1 mt-2"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div className="flex-c-c p4-4 border-2 bg-gray-200 shadow-md w-1/3 h-1/6">
            <button
              className=" border-2 border-gray-300 p-2 rounded-md bg-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div
        className={
          authConfirmed()
            ? 'h-screen flex justify-center items-center border-4 border-red-500'
            : 'h-screen hidden'
        }
      >
        <Database />
      </div>
    </>
  );
};

export default Login;
