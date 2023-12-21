import React from "react";

import "./Login.css"
import { Link } from "react-router-dom";
function Login(){
    return(
        <div>
        <div className="container">
            <h2>LOGIN</h2>
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <br></br>
        
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <br></br>
        <button type="submit">Log In</button>
      <div className="create-account">
        <p>Create new Account?</p>
        </div>
        <div>
            <p className="sign-in"><a href="Signup.js">Sign Up</a> </p>
        </div>
      </div>

        </div>
    );
}
export default Login;