import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  console.log("authid is", auth.uid);
  const links = auth.uid ? <SignInLink profile={profile} /> : <SignOutLink />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ProjectPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapSateToProps = state => {
  console.log("NavBar State : ", state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapSateToProps)(Navbar);
