import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";
import Register from "./components/Register";
import Header from "./components/Header";
import Login from "./components/Login";
import Table from "./components/Table";

const App = () => {
  const [message, setMessage] = useState("");
  const [token, setToken] = useContext(UserContext);
  const [navbarBurger, setNavbarBurger] = useState(false);
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const [isLoginShown, setIsLoginShown] = useState(true);

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log("No response...");
    } else {
      setMessage(data.message);
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  const handleNavbarBurger = () => {
    setNavbarBurger((current) => !current);
  };
  const toogleRegister = (e) => {
    setIsLoginShown(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">
            <strong>Leads Manager API app</strong>
          </div>
          <a
            role="button"
            className={
              navbarBurger ? "navbar-burger is-active" : "navbar-burger"
            }
            aria-label="menu"
            aria-expanded="false"
            onClick={handleNavbarBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={navbarBurger ? "navbar-menu is-active" : "navbar-menu"}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!token ? (
                  <button className="button is-link" onClick={toogleRegister}>
                    Register
                  </button>
                ) : null}
                {!token ? (
                  <button className="button is-light">Log in</button>
                ) : (
                  <button className="button is-light" onClick={handleLogout}>
                    Log out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Header title={message} />
      <div className="columns">
        <div className="column"></div>
        <div className="column m-5 is-two-thirds">
          {!token ? (
            <div className="columns">
              <Login />
            </div>
          ) : (
            <Table />
          )}
        </div>
        <div className="column"></div>
      </div>
    </>
  );
};

export default App;
