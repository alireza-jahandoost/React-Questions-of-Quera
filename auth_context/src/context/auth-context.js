import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const loginUser = (username, password) => {
    const data = {
      username,
      password,
    };
    fetch(`http://localhost:8989/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => response.user)
      .then((user) => {
        setUser(user);
        setError(null);
      })
      .catch((err) => setError(err.message));
  };

  const registerUser = (username, password) => {
    const data = {
      username,
      password,
    };
    fetch(`http://localhost:8989/api/register`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => response.user)
      .then((user) => {
        setUser(user);
        setError(null);
      })
      .catch((err) => setError(err.message));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loginUser,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
