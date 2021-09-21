import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser, error } = useContext(AuthContext);

  const handleUserRegister = (event) => {
    event.preventDefault();
    registerUser(username, password);
  };

  return (
    <div className="account-form">
      <h2>Sign up</h2>
      <div className="error-message" data-testid="error-message">
        {error}
      </div>
      <form onSubmit={handleUserRegister}>
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
        <button type="submit" data-testid="register-btn">
          Register
        </button>
      </form>
      <button className="link" onClick={props.changePage}>
        Already have an account? Log In
      </button>
    </div>
  );
};

export default Register;
