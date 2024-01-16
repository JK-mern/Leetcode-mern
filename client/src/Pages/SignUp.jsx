import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'


function SignUp() {
  
  const [formData, setFormData] = useState({})
  const navigate = useNavigate() 
  const handlechange = (e) =>{
    setFormData({
      ...formData, [e.target.id] : e.target.value
    })
  }
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = res.data
      console.log(data)
      navigate('/sign-in')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    < >
      <div className="mx-auto  mt-6 p-3 max-w-lg items-center border-2 border-teal-700">
        <h1 className="text-3xl font-bold text-center my-7">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3 ">
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handlechange}
         />
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handlechange}
        />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handlechange}
          />
          <input
            type="password"
            placeholder="Confirm-Password"
            id="confirmPassword "
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
            onChange={handlechange}
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
