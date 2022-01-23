import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useHistory } from "react-router-dom";
import { postRegister } from "../../helpers/api";
import Nav from "../Nav";

const Register = () => {
  const history = useHistory();

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const { mutate, isError } = useMutation(postRegister, {
    onSuccess: () => history.push("/login"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(register);
  };

  const handleChange = (e) => {
    const newRegister = { ...register, [e.target.name]: e.target.value };
    setRegister(newRegister);
  };
  return (
    <div className="bg-main h-screen flex flex-col justify-center items-center">
      <Nav />
      <form
        onSubmit={handleSubmit}
        className=" border-2 border-contrast rounded-lg shadow-md h-4/6 w-7/12 flex items-center justify-evenly flex-col"
      >
        <div className="w-3/4 flex flex-col">
          <label htmlFor="username" className="font-Roboto text-contrast">
            USERNAME
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="username..."
            className="rounded-md mt-3 p-1 bg-primary border-b-2 focus:outline-none"
          ></input>
        </div>
        <div className="w-3/4 flex flex-col">
          <label htmlFor="email" className="font-Roboto text-contrast">
            EMAIL<span className="text-white">*</span>
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="email..."
            className=" rounded-md mt-3 p-1 bg-primary border-b-2 focus:outline-none"
          ></input>
        </div>
        <div className="w-3/4 flex flex-col">
          <label htmlFor="password" className="font-Roboto text-contrast">
            PASSWORD
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password..."
            className="rounded-md mt-3 p-1 bg-primary border-b-2 focus:outline-none"
          ></input>
        </div>
        <div className="w-3/4 flex flex-col">
          <label
            htmlFor="passwordConfirmation"
            className="font-Roboto text-contrast"
          >
            CONFIRM PASSWORD
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="passwordConfirmation"
            placeholder="confirm password..."
            className="rounded-md mt-3 p-1 bg-primary border-b-2 focus:outline-none"
          ></input>
        </div>
        <button className="text-Montserrat text-contrast text-lg">
          SIGN UP
        </button>
        {isError && (
          <div className="pr-btn bg-opacity-95 w-3/4 bg-red-700 text-white">
            Check your passwords match
          </div>
        )}
      </form>
      <div className="mt-8 w-full flex flex-col gap-3 items-center">
        <p className="text-black text-xs sm:text-base">Already signed up?</p>
        <Link to="/login" className="alt-btn">
          Sign In
        </Link>
      </div>
      {/* <div className="flex flex-col items-center text-center text-white text-xs mt-4 sm:text-base">
        <p>
          *No spaces in username, emails must be unique, however dummy emails
          are accepted. Please us a unique password with at least eight
          characters.
        </p>
      </div> */}
    </div>
  );
};

export default Register;
