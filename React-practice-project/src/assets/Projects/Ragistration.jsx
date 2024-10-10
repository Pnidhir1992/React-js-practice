import React, { useState } from "react";
import "./Ragister.css";

export const Ragistration = () => {
  const [user, SetUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const HandelInputChange = (e) => {
    const { name, value } = e.target;
    SetUser((prev) => ({ ...prev, [name]: value }));
  };

  const HandelSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section className="abc">
        <p>
          Hello, My Name Is{" "}
          <span className="text-chnage"> {user.firstName} </span>
        </p>
        <p>
          My Last Name is <span className="text-chnage"> {user.lastName} </span>
        </p>
        <p>
          My email is <span className="text-chnage"> {user.email} </span>
        </p>
        <p>
          My phone number is
          <span className="text-chnage"> {user.phoneNumber}</span>
        </p>
      </section>
      <form>
        <div className="center-div">
          <h1>Sign Up</h1>
          <p>Please Fill the Form To Create a New Account</p>
          <label htmlFor="firstName">
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              required
              onChange={HandelInputChange}
              value={user.firstName}
            />
          </label>
          <label htmlFor="lastName">
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              required
              onChange={HandelInputChange}
              value={user.lastName}
            />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email ID"
              required
              onChange={HandelInputChange}
              value={user.email}
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
              onChange={HandelInputChange}
              value={user.password}
            />
          </label>
          <label htmlFor="phoneNumber">
            <p>Phone Number</p>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter Your Phone Number"
              required
              onChange={HandelInputChange}
              value={user.phoneNumber}
            />
          </label>
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>
          </p>
          <div className="btn-group">
            <button type="submit" className="btn" onClick={HandelSubmit}>
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
