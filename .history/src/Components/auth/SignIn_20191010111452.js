import React, { Component } from 'react'

class SignIn extends Component {
    render() {
        return (
            <div className="container">
                <form onSubmit={} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onchange={} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onchange={} />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn
