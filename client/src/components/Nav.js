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
    <div className="w-screen py-8 text-lg text-contrast flex justify-end gap-12 mb-4 font-Montserrat">
      <Link to="/">
        <div>HOME</div>
      </Link>
      {authConfirmed() ? (
        <>
          <div>COFFEE JOURNAL</div>
          <div className="mr-16" onClick={handleSignOut}>
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
