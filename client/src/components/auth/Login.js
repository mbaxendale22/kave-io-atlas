import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import Nav from "../../components/Nav";
import { postLogin } from "../../helpers/api";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const { mutate, isError, data } = useMutation(postLogin, {
    onSuccess: (data) => history.push({ pathname: "/", state: data }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(login);
    const inputs = [...document.querySelectorAll("input")];
    inputs.forEach((i) => (i.value = ""));
  };

  const handleChange = (e) => {
    const newLogin = { ...login, [e.target.name]: e.target.value };
    setLogin(newLogin);
  };

  return (
    <div className="bg-main h-screen flex flex-col justify-center items-center">
      <Nav />
      <form
        onSubmit={handleSubmit}
        className=" border-2 border-contrast rounded-lg shadow-md h-4/6 w-7/12 flex items-center justify-evenly flex-col"
      >
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
        <button className="text-Montserrat text-contrast text-lg">
          SIGN IN
        </button>
        {isError && (
          <div className="w-3/4 text-red-700">
            Either your email or password is incorrect
          </div>
        )}
      </form>
      <div className="mt-8 w-full flex flex-col gap-3 items-center">
        <p className="text-black text-xs sm:text-base">Need an account?</p>
        <Link to="/register" className="">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Login;
