import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    < >
      <div className="mx-auto  mt-6 p-3 max-w-lg items-center border-2 border-teal-700">
        <h1 className="text-3xl font-bold text-center my-7">Sign Up</h1>
        <form className="flex flex-col gap-4 p-3 ">
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm-Password"
            id="confirmPassword "
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
          />
          <button className=" my-4  bg-teal-700 p-2  rounded-lg text-lg hover:opacity-75">
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 ml-4 ">
          <p>Have an account ?</p>
          <Link to="/sign-in">
            <span className="text-blue-500">Sign in</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
