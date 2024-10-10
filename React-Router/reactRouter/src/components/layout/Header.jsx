import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { About } from "../../Pages/About";
import "./header.css";

export const Header = () => {
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <img src={logo} alt="thapa eCommerce logo" className="logo" />
            </NavLink>
          </div>
          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movie" className="nav-link">
                  Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
