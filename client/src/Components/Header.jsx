import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex  p-5 justify-between items-center cursor-pointer md:mx-20  ">
      <Link to='/'>
        <div className="flex gap-1 ">
          <h1 className="font-bold text-3xl">Algo</h1>
          <span className="text-3xl font-semibold text-cyan-700">Xpert</span>
        </div>
      </Link>
      <div>
        <ul className="flex items-center gap-4 text-base ">
          <Link to="/">
            <li className="hidden md:inline  hover:opacity-75">Home</li>{" "}
          </Link>
          <Link to="/problems">
            <li className="hidden md:inline hover:opacity-75">Problems</li>
          </Link>
          <Link to="/about">
            <li className="hidden md:inline hover:opacity-75">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="text-xl md:text-base rounded-md  hover:opacity-75">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
