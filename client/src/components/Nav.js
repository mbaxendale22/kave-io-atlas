import React from "react";
import { Link, useHistory } from "react-router-dom";
import { authConfirmed } from "../helpers/auth";

const Nav = () => {
  const history = useHistory();

  const handleSignOut = () => {
    window.localStorage.removeItem("token"); // remove token from local storage
    history.push("/");
  };

  return (
    <div className="w-screen ml-8 sm:ml-0 py-4 sm:py-8 text-lg text-contrast flex justify-end mb-4 gap-12 font-Montserrat">
      <Link to="/">
        <div className="transform duration-200 ease-in hover:scale-125">
          HOME
        </div>
      </Link>
      {authConfirmed() ? (
        <>
          <Link to="/journal">
            <div className="cursor-pointer transform duration-200 ease-in hover:scale-125">
              COFFEE JOURNAL
            </div>
          </Link>
          <div
            className="mr-16 cursor-pointer transform duration-200 ease-in hover:scale-125"
            onClick={handleSignOut}
          >
            SIGN OUT
          </div>
        </>
      ) : (
        <>
          <Link to="/login">
            <div>LOGIN</div>
          </Link>
          <Link to="/register">
            <div className="mr-16 transform duration-200 ease-in hover:scale-125">
              SIGN UP
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Nav;
