import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSucces,
  signInFailure,
} from "../redux/user/user.slice";
import {useSelector, useDispatch } from 'react-redux'

const SignIn = () => {
  const Dispatch = useDispatch()
  const { loading, error } = useSelector( (state)=> state.user );
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signin", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.data;
      Dispatch ( (signInSucces(data)))
      navigate("/problems");
      
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <>
      <div className="mx-auto  mt-6 p-3 max-w-lg items-center border-2 border-teal-700">
        <h1 className="text-3xl font-bold text-center my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3 ">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handleChange}
            required
          />

          <button className=" my-4  bg-teal-700 p-2  rounded-lg text-lg hover:opacity-75">
            Sign In
          </button>
        </form>
        <div className="flex gap-2 ml-4 ">
          <p>Create an account ?</p>
          <Link to="/sign-up">
            <span className="text-blue-500">Sign up</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
