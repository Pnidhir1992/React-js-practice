import "./Contact.css";
import { useState } from "react";
import React from "react";

export const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const HandelForSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      username,
      email,
      message,
    };
    console.log(contactData);
  };

  return (
    <>
      <div className="center-div">
        <h1>Contact Us</h1>
        <form onSubmit={HandelForSubmit}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="Message">Message</label>
          <input
            type="text"
            name="message"
            autoComplete="off"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-default">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
