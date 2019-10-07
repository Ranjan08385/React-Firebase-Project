import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ProjectPlan
        </Link>
        <SignInLink />
      </div>
    </nav>
  );
};

export default Navbar;
