import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="footer footer-center  p-4 bg-base-300 text-base-content bg-transparent my-9">
      <aside>
       

        <p>Copyright © {year} - All right reserved by AlgoXpert</p>
      </aside>
    </footer>
  );
}

export default Footer;
