import React from "react";

import ErrorMessage from "./ErrorMessage";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import { useContext } from "react";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const [isLoginShown, setIsLoginShown] = useState(true);

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    const response = await fetch("/api/token", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  const toogleRegister = (e) => {
    setIsLoginShown(false);
  };

  const showRegister = () => {
    return <Register />;
  };

  const login = () => {
    return (
      <div className="column">
        <form className="box" onSubmit={handleSubmit}>
          <h1 className="title has-text-centered">Login</h1>
          <div className="field">
            <label className="label">Email Address</label>
            <div className="control">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          <ErrorMessage message={errorMessage} />
          <br />
          <button className="button is-primary" type="submit">
            Login
          </button>
          <button className="button is-info ml-3" onClick={toogleRegister}>
            Create an account
          </button>
          {isRegisterShown && <Register />}
        </form>
      </div>
    );
  };

  return isLoginShown ? login() : showRegister();
};

export default Login;
