import socialLogin from  "./Components/SocialLogin"
import InputField from "./Components/InputField"
function App() {
  return (
    <>
      <div className="login-container">
        <h2 className="form-title">Log in With</h2>
        <div className="social-login">
          <button className="social-button">
            <img src="google.svg" alt="Google" className="social-icon" />
            Google
          </button>

          <button className="social-button">
            <img src="apple.svg" alt="Apple" className="social-icon" />
            Apple
          </button>
        </div>

        <p className="separator">
          <span>or</span>
        </p>

        <form action="#" className="login-form">
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Email address"
              className="input-field"
              required
            />
            <i className="fas fa-envelope"></i>
            <span className="material-symbols-rounded"></span>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
            /> <i className="fas fa-lock"></i>
            <span className="material-symbols-rounded"></span>
          </div>

          <a href="#" className="forgot-pass-link">
            Forgot password?
          </a>

          <button className="login-button">Log in</button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="#">Sign up now</a>
        </p>
      </div>
    </>
  );
}

export default App;