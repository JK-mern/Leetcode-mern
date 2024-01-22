import { Link } from "react-router-dom";
function Home() {
  return (
    <main>
      <div className="flex max-w-6xl mx-auto my-8  flex-col p-3  md:flex-row">
        <div className="flex w-full md:w-8/12  gap-5 justify-center flex-col">
          <h1 className="leading-tight text-center  md:text-left  text-3xl lg:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-600  to-yellow-500">
            Algo Xpert <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
              Where Complexity Meets Clarity{" "}
            </span>
          </h1>
          <p className="text-sm text-zinc-400 text-center md:text-left">
            Step into the heart of algorithmic excellence with Algo Xpert, your
            ultimate destination <br /> for mastering Data Structures and
            Algorithms.
          </p>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <Link to="/sign-up">
              {" "}
              <button className="btn btn-wide">Create an Account</button>
            </Link>
            <Link to="/problems">
              {" "}
              <button className="btn btn-wide ">Explore Problem Library</button>
            </Link>
          </div>
        </div>
        <div className="w-4/12 p-5  hidden md:block">
          <img
            src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-2xl h-96 w-full"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
