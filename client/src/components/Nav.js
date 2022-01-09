import React from 'react';

const Nav = () => {
  const isAuthenticated = false;
  return (
    <div className="w-screen py-8 bg-black text-white flex justify-end gap-12 mb-4">
      <div>Home</div>
      {isAuthenticated ? (
        <div className="mr-16">My Coffee Journal</div>
      ) : (
        <>
          <div>Login</div>
          <div className="mr-16">Sign Up</div>
        </>
      )}
    </div>
  );
};

export default Nav;
