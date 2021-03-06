import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field1">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-field1">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-field1">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
