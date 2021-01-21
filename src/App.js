import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import "./App.css";

function App() {
  const [signUpFormStatus, setSignUpFormStatus] = useState(false);
  const loginProps = useSpring({
    left: signUpFormStatus ? -500 : 0,
  });
  const signUpProps = useSpring({
    left: signUpFormStatus ? 0 : 500,
  });

  const loginBtnProps = useSpring({
    borderBottom: signUpFormStatus
      ? "solid 0px transparent"
      : "solid 2px #1059FF",
  });
  const signUpBtnProps = useSpring({
    borderBottom: signUpFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent",
  });
  function signUpClicked() {
    setSignUpFormStatus(true);
  }
  function loginClicked() {
    setSignUpFormStatus(false);
  }
  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={signUpClicked}
          id="registerBtn"
          style={signUpBtnProps}
        >
          SignUp
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={signUpProps}>
          <SignUpForm />
        </animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a href="#" style={{color: "white"}}></a>Forgot your password?
      </animated.div>
    </div>
  );
}

function LoginForm() {
  return (
    <>
      <label for="username">USERNAME</label>
      <input type="text" id="username"></input>
      <label for="password">PASSWORD</label>
      <input type="password" id="password"></input>
      <input type="submit" value="submit" className="submit" />
    </>
  );
}

function SignUpForm() {
  return (
    <>
      <label for="fullname">Full name</label>
      <input type="text" id="fullname" />
      <label for="email">Email</label>
      <input type="text" id="email" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <label for="confirmpassword">Confirm password</label>
      <input type="password" id="confirmpassword" />
      <input type="submit" value="submit" class="submit" />
    </>
  );
}

export default App;
