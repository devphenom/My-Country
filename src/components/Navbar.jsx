import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-sm navbar-light bg-navbar shadow-sm px-lg-3 scrolling-navbar">
    <Link to="/" className="navbar-brand">
      <strong>Where in the World?</strong>
    </Link>
    <div className="ml-auto">
      <button className="btn" onClick={props.handleModeChange}>
        {props.iconClass()}
      </button>
    </div>
  </nav>
);

export default Navbar;
