import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);

  return (
    <div className="column">
      <form className="box">
        <h1 className="title has-text-centered">Register</h1>
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
          <label className="label">Set Password</label>
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
        <div className="field">
          <label className="label">Confirm your Password</label>
          <div className="control">
            <input
              type="password"
              placeholder="Enter your password again"
              value={confirmationPassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
              className="input"
              required
             />
          </div>
        </div>
        <button className="button is-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  )
};

export default Register;
