import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate (`/search/${searchTerm}`)

  }

  let { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex  p-5 justify-between items-center cursor-pointer md:mx-20   ">
      <Link to="/">
        <div className="flex gap-1 ">
          <h1 className="font-bold text-3xl">Algo</h1>
          <span className="text-3xl font-semibold text-cyan-700">Xpert</span>
        </div>
      </Link>

      <div>
        <form onSubmit={handleSubmit} className="hidden  items-center justify-center gap-4  md:inline-flex">
          <input
            type="text"
            id="search"
            onChange={handleChange}
            placeholder="eg : Arrays"
            className=" py-2 px-4  lowercase rounded-lg bg-transparent border-x-2 border-gray-500  focus:border-teal-700 focus:outline-none "
          />
          <button className="">
            {" "}
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#74C0FC" }}
              size="xl"
            />
          </button>
        </form>
      </div>
      <div>
        <ul className="flex items-center gap-4 text-base font-bold">
          <Link to="/">
            <li className="hidden md:inline  hover:opacity-75">Home</li>{" "}
          </Link>
          <Link to="/problems">
            <li className="hidden md:inline hover:opacity-75">Problems</li>
          </Link>
          <Link to="/about">
            <li className="hidden md:inline hover:opacity-75">About</li>
          </Link>
          {currentUser && currentUser.isAdmin && (
            <Link to="/addproblems">
              <li className="hidden md:inline hover:opacity-75">
                Add Questions
              </li>
            </Link>
          )}
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <li className="text-xl md:text-base rounded-md  hover:opacity-75">
                SignIn
              </li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
