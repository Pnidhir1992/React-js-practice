import React from "react";
import "../Index.css";
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data); // Send data to server or store in a database
    return null;
  } catch (error) {}
};

export const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="grid-two--cols">
          <h1>Contact Us</h1>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            fugiat doloribus expedita excepturi magni pariatur, ipsa rem eos
            doloremque, praesentium illum porro repellat sapiente vitae neque
            corrupti atque tempore unde.
          </p>
          <br />
          <br />
          <Form method="post" action="/contact">
            <div className="form-group">
              <label htmlFor="username">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
                name="username"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                name="email"
              />
            </div>
            <br />
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Message"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </Form>
        </div>
        <div className="grid-two--cols"></div>
      </div>
    </>
  );
};
