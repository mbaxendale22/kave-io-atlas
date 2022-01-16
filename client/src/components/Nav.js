import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authConfirmed } from '../helpers/auth';

const Nav = () => {
  const history = useHistory();


  const handleSignOut = () => {
    window.localStorage.removeItem('token'); // remove token from local storage
    history.push('/');
  };

  return (
    <div className="w-screen py-8 text-lg text-contrast flex justify-end mb-4 gap-12 font-Montserrat">
      <Link to="/">
        <div>HOME</div>
      </Link>
      {authConfirmed() ? (
        <>
          <Link to= 'journal'><div className='cursor-pointer'>COFFEE JOURNAL</div></Link>
          <div className="mr-16 cursor-pointer" onClick={handleSignOut}>
            SIGN OUT
          </div>
        </>
      ) : (
        <>
          <Link to="/login">
            <div>LOGIN</div>
          </Link>
          <Link to="/register">
            <div className="mr-16">SIGN UP</div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Nav;
