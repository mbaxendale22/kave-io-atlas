import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const isAuthenticated = false;
  return (
    <div className="w-screen py-8 text-lg text-contrast flex justify-end gap-12 mb-4 font-Montserrat">
      <Link to="/">
        <div>HOME</div>
      </Link>
      {isAuthenticated ? (
        <div className="mr-16">My Coffee Journal</div>
      ) : (
        <>
          <div>LOGIN</div>
          <div className="mr-16">SIGN UP</div>
        </>
      )}
    </div>
  );
};

export default Nav;
