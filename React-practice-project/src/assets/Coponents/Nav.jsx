import React from "react";

export const Nav = () => {
  return (
    <>
      <section>
        <nav className="container">
          <div className="logo">
            <img src="../public/main-logo-1.png" alt="image" />
          </div>
          <ul className="navling">
            <li className="nav-item">
              <a href="">Home</a>
            </li>
            <li className="nav-item">
              <a href="">About</a>
            </li>
            <li className="nav-item">
              <a href="">Servicess</a>
            </li>
            <li className="nav-item">
              <a href="">Contact</a>
            </li>
          </ul>
          <button className="btn">Know More</button>
        </nav>
      </section>
    </>
  );
};
