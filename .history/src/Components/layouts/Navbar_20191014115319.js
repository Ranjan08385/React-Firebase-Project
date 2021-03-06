import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;
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
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapSateToProps)(Navbar);
