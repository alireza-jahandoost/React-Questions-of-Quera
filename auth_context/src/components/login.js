import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, error } = useContext(AuthContext);

  const handleUserLogin = (event) => {
    event.preventDefault();
    loginUser(username, password);
  };

  return (
    <div className="account-form">
      <h2>Login to App</h2>
      <div className="error-message" data-testid="error-message">
        {error}
      </div>
      <form onSubmit={handleUserLogin}>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit" data-testid="login-btn">
          Log in
        </button>
      </form>
      <button className="link" onClick={props.changePage}>
        Sign up for an account
      </button>
    </div>
  );
};

export default Login;
