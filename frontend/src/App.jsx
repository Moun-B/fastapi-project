import React, { useState, useEffect, useContext } from "react";
import {UserContext} from "./context/UserContext";
import Register from "./components/Register";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  const [message, setMessage] = useState("");
  const [token,] = useContext(UserContext);

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
      console.log("No response...")
    } else {
      setMessage(data.message)
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <>
      <Header title={message} />
      <div className="columns">
        <div className="column"></div>
        <div className="column m-5 is-two-thirds">
          {
            !token ? (
              <div className="columns">
                <Register/> <Login/>
              </div>
            ) : (
              <p>Table</p>
            )
          }
        </div>
        <div className="column"></div>
      </div>
    </>
  );
}

export default App;