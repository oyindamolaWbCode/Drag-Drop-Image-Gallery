import { database } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

    return (
      <div className="SignUp-page">
        <div className="Signup-details">
          <div className="signup-text mt-3 mb-3">
            <span>Sign Up</span>
          </div>
          <form >
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="p-1 rounded-1 py-2 mt-5 mb-4"
            />
            <input
              name="username"
              type="password"
              placeholder="Password"
              className="p-1 rounded-1 py-2 mb-5"
            />
  
            <div className="logSub">
              <button type="submit" className="p-1 rounded-1 py-2 mb-3">Sign In</button>
            </div>
  
            <div className="sign">
            <p>Don’t have an account?  <a href="/Signup"><b>Sign up</b></a></p>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  