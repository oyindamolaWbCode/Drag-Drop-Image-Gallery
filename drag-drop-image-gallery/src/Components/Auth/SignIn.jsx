import { database } from "../../Firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const ToHome = () => {
    navigate("/Home");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
        ToHome();
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="SignUp-page">
      <div className="Signup-details">
        <div className="signup-text mt-3 mb-3">
          <span>Sign In</span>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="email"
            type="text"
            placeholder="Email Address"
            className="p-1 rounded-1 py-2 mt-5 mb-4"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-1 rounded-1 py-2 mb-5"
          />

          <div className="logSub">
            <button type="submit" className="p-1 rounded-1 py-2 mb-3">
              Sign In
            </button>
          </div>

          <div className="sign">
            <p>
              Don’t have an account?{" "}
              <a href="/Signup">
                <b>Sign up</b>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
