import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-10">
      <div className="container">
        <Link to="/" className="brand-name">
          ProjectPlan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
