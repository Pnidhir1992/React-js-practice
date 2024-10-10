import React, { useId } from "react";
import "./user.css";

export const UserID = () => {
  const usernameId = useId();
  const emailId = useId();

  return (
    <div>
      <div className="center-div">
        <h1>Login</h1>
        <br />
        <form>
          <label htmlFor={usernameId}>User Name :-</label>
          <input type="text" name="name" id={usernameId} />
          <br />
          <label htmlFor={emailId}></label>
          <input type="email" id={emailId} name="email" />
          <br />
          <button type="submit" className="btn btn-default">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
