import React from "react";
import { NavLink } from "react-router-dom";
const SignInLink = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ProjectPlan
        </Link>
      </div>
    </nav>
  );
};

export default SignInLink;
