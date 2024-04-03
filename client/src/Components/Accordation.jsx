import React, { useState } from "react";

function Accordation() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    
      <div className=" w-4/12 border border-teal-700 rounded mt-8 ">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-semibold">Arrays</h2>
          <svg
            className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <div className=" flex flex-col justify-center text-center w-full">
            <ul className="">
              <hr />
              <li className="mt-4">
                <a href="#" className=" font-mono">
                  Link 1
                </a>
                <hr />
              </li>
              <li className="mt-4">
                <a href="#" className=" font-mono ">
                  Link 2
                </a>
                <hr />
              </li>
              <li className="mt-4">
                <a href="#" className=" font-mono ">
                  Link 3
                </a>
                <hr />
              </li>
            </ul>
          </div>
        )}
      </div>
    
  );
}

export default Accordation;
