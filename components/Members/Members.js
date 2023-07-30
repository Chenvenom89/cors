import React, { useState, useEffect } from "react";
import "./Members.css";



export default function Members() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);


  const handleLogin = () => {
    // Check if the username and password are correct
    if (username === "Chenvenom" && password === "Chenvenom1989") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };
//saving the user in local storage
  // useEffect(() => {
  //   // Check if the user was previously logged in
  //   const prevLoggedIn = localStorage.getItem("loggedIn");
  //   const prevUsername = localStorage.getItem("username");
  //   if (prevLoggedIn === "true" && prevUsername) {
  //     setLoggedIn(true);
  //     setUsername(prevUsername);
  //   }
  // }, []);
  

  useEffect(() => {
    if (loggedIn) {
      setShowGreeting(true);

      // Show the greeting for 3 seconds and then hide it and navigate to "/Flights"
      setTimeout(() => {
        setShowGreeting(false);
      }, 3000);

      // Navigate to "/Flights" after 3 seconds
      setTimeout(() => {
        window.location.href = "/FlightsNo"; 
      }, 3000);
    }
  }, [loggedIn]);

  return (
    <div className="member-login">
      <h1>Welcome to Our Website</h1>
      {!loggedIn ? (
        <div className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      ) : showGreeting ? (
        <div className="greeting">
          <h2>Hello, {username}!</h2>
          <p>You are now logged in. Enjoy your experience!</p>
        </div>
      ) : null}

    </div>
  );
}
