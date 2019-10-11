import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ProjectPlan
        </Link>
        <SignInLink />
        <SignOutLink />
      </div>
    </nav>
  );
};

const mapSateToProps = state => {
  console.log("Navbar", state);
};

export default connect(mapSateToProps)(Navbar);
