import "./Login.css";

import React from "react";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const HandelFormSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      user,
      password,
    };

    console.log(loginData); // replace with actual login logic here
  };

  return (
    <>
      <div className="center-div">
        <h1>Login</h1>
        <form onSubmit={HandelFormSubmit}>
          <input
            type="text"
            placeholder="Username"
            name={"user"}
            autoComplete="off"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name={"password"}
            autoComplete="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-default">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
