import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content bg-transparent my-7">
      <aside>
        <Link to={`mailto:jayakrishnan@gmail.com`}> 
          <button className="btn btn-wide ">Contact Us</button>
        </Link>

        <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
}

export default Footer;
