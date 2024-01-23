import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faLaptopCode,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main>
      <div className="flex max-w-6xl mx-auto my-8  flex-col p-3  ">
        <div className="flex md:flex-row">
          <div className="flex w-full md:w-8/12  gap-5 justify-center flex-col">
            <h1 className=" text-center md:leading-tight md:text-left  text-3xl md:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-600  to-yellow-500">
              Algo Xpert <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
                Where Complexity Meets Clarity{" "}
              </span>
            </h1>
            <p className="text-sm text-zinc-400 text-center md:text-left">
              Step into the heart of algorithmic excellence with Algo Xpert,
              your ultimate destination <br /> for mastering Data Structures and
              Algorithms.
            </p>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <Link to="/sign-up">
                {" "}
                <button className="btn btn-wide">Create an Account</button>
              </Link>
              <Link to="/problems">
                {" "}
                <button className="btn btn-wide ">
                  Explore Problem Library
                </button>
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
        <div className="mt-24 ">
          <h2 className="font-semibold text-center text-2xl">Perks </h2>
          <div className="flex flex-col justify-center  md:flex-row gap-2 my-6">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="h-16 text-teal-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-neutral-400">Skill Improvement</h2>
                <p >
                  Algo Xpert diversifies coding skills with varied challenges.
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="h-16 text-teal-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-neutral-400">Interview Preparation</h2>
                <p>
                  Algo Xpert real-world coding scenarios, aiding in interview
                  preparation for tech companies.
                </p>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <FontAwesomeIcon icon={faCode} className="h-16 text-teal-700" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-neutral-400">Algorithm Mastery</h2>
                <p>
                  Algo Xpert covers diverse algorithms and data structures, aiding
                  mastery of key programming concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
