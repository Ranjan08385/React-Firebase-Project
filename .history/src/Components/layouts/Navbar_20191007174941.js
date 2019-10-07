import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-name">
          <h2>ProjectPlan</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
