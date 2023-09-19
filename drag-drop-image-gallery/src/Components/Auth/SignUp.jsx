const SignUp = () => {
  return (
    <div className="SignUp-page">
      <div className="Signup-details">
        <div className="signup-text mt-3 mb-3">
          <span>Sign Up</span>
        </div>
        <form>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="p-1 rounded-1 py-2 mt-5"
          />
          <input
            name="username"
            type="email"
            placeholder="Email Address"
            className="p-1 rounded-1 m-4 py-2 "
          />
          <input
            name="username"
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
