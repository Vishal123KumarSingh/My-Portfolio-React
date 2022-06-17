import React from "react";
import Toggle from "../Toggle/Toggle";
// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Vishal</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to="Navbar" smooth="true">
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth="true">
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experiences" smooth="true">
              <li>Experiences</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth="true">
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testiomonial" smooth="true">
              <li>Tesimonial</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth="true">
          <button className="button n-button">Contact</button>
        </Link>


      </div>
    </div>
  );
};

export default Navbar;
