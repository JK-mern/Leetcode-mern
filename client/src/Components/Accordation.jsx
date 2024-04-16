import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Accordation(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const ulVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.7 },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  return (
    <div className="  w-full  border border-teal-700 rounded my-2 ">
      <div
        className="flex  justify-between items-center p-4 cursor-pointer"
        id={props.id}

        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-bold  ">{props.title}</h2>
        <svg
          className={`w-6 h-6  duration-200 ease-in  ${isOpen ? "transform rotate-180" : ""}`}
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
     
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={ulVariants}
        className="flex flex-col justify-center text-center w-full"
      >
      {isOpen &&
        props.questions.map((ques, index) => (
          <div
            className="flex flex-col justify-center text-center w-full  "
            key={index}
          >
            <ul className=" duration-500 ease-in" id={index}>
              {/* <hr className="  border-sky-600" /> */}
              <li className="mt-4">
                <Link to={`/problems/${ques}`}><p className="mb-2">{ques}</p></Link>
                <hr className=" border-sky-600" />
              </li>
            </ul>
          </div>
        ))}
        </motion.div>
    </div>
  );
}

export default Accordation;