import { database } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
 
    const handleSubmit = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        createUserWithEmailAndPassword (database,email,password).then(data =>{
            console.log(data, "authData")
        })
    }


  return (
    <div className="SignUp-page">
      <div className="Signup-details">
        <div className="signup-text mt-3 mb-3">
          <span>Sign Up</span>
        </div>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="p-1 rounded-1 py-2 mt-5"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="p-1 rounded-1 m-4 py-2 "
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-1 rounded-1 py-2 mb-5"
          />

          <div className="logSub">
            <button type="submit" className="p-1 rounded-1 py-2 mb-3">Sign up with Email</button>
          </div>

          <div className="sign">
            <p>
              Already have an account?
              <a href="/SignIn">
                <b>Log in</b>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
