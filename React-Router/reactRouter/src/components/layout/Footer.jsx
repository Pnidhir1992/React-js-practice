import React from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { Contact } from "../../Pages/Contact";
import "./header.css";

export const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <div className="footer-container container">
          <div className="content_1">
            <img src={logo} alt="logo" className="white" />
            <p>
              Welcome to Thapa EcomStore, your ultimate destination for
              cutting-edge gadgets!
            </p>
          </div>
          <div className="content_2">
            <h4>SHOPPING</h4>
            <NavLink>Computer Store</NavLink>
            <NavLink>Laptop Store</NavLink>
            <NavLink>Accessories</NavLink>
            <NavLink>Sales & Discount</NavLink>
          </div>
          <div className="content_3">
            <h4>Experience</h4>

            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink>Payment Method</NavLink>
            <NavLink>Delivery</NavLink>

            <NavLink>Return and Exchange</NavLink>
          </div>
          <div className="content_4">
            <h4>NEWSLETTER</h4>
            <p>
              Be the first to know about new
              <br />
              arrivals, sales & promos!
            </p>
            <div className="f-mail">
              <input type="email" placeholder="Your Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt">
            <p>Design and Code by Nidhir Parmar</p>
          </div>
        </div>
      </footer>
    </>
  );
};
