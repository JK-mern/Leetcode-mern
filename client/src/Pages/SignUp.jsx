import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Toast from "../Components/Toast";

function SignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
    if (password !== confirmPassword) {
      toast.warning("Password doesn't match");
      return;
    }
    try {
      const res = await axios.post("/api/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.data;
      console.log(data)
      toast.success(data);
      setTimeout(() => {
        navigate("/sign-in");
      }, 1000);
    } catch (error) {
      console.log(error);
      const data = error.response.data;
      toast.error(data.message);
    }
  };

  return (
    <>
      <div className="mx-auto  mt-10 md:mt-52 p-3 max-w-lg items-center border-2 border-teal-700">
        <h1 className="text-3xl font-bold text-center my-7">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3 ">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handlechange}
            required
          />
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handlechange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handlechange}
            required
          />
          <input
            type="password"
            placeholder="Confirm-Password"
            id="confirmPassword"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handlechange}
            required
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
      <Toast />
    </>
  );
}

export default SignUp;
