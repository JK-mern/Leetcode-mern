import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotFound() {
  return (

      <div className="hero">
        <div className="text-center hero-content">
          <div className="max-w-6xl flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-8">Oops!</h1>
            <p className="text-3xl ">404 - Page Not Found!</p>
            <Link className="btn btn-primary btn-lg mt-10" to="/">
            
              Back To Home
            </Link>
          </div>
        </div>
      </div>
   
  );
}

export default NotFound;
