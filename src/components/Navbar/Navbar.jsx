import React from "react";
import navImg from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="logo">
          <img src={navImg} alt="window picture" />
          <h2>Meal Hub</h2>
        </div>

        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
