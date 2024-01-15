import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <>
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
            type="password"
            placeholder="Password"
            id="password"
            className="p-3 rounded-lg bg-inherit border border-slate-500 focus:border-teal-700 focus:outline-none"
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
